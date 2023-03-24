import { useState, ChangeEvent, MouseEvent } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Facts } from "@/data/Facts";
import style from "@/styles/cms/FactCMS.module.css";

type FactCMSProps = {
  facts: Facts[];
  setFacts(facts: Facts[]): void;
  // authToken: string;
};

export default function FactCMS(props: FactCMSProps) {
  const [newFact, setNewFact] = useState({ title: "", content: "", id: "" });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewFact({ ...newFact, [event.target.name]: event.target.value });
  }

  async function submitFacts() {
    // const res = await fetch("/api/facts", {
    //   method: "POST",
    //   body: JSON.stringify(newFact),
    //   headers: {
    //     "content-type": "application/json",
    //     // Authorization: props.authToken,
    //   },
    // });
    // const status = await res.status;
    // console.log(status);
    window.location.reload();
  }

  function handleEditClick(title: string, content: string, id: string) {
    setNewFact({ title: title, content: content, id: id });
    document.getElementById("create-new-fact")?.scrollIntoView();
  }

  async function handleDeleteClick(id: string) {
    // <update database here>
    props.setFacts(props.facts.filter((fact) => fact.id != id));
  }

  return (
    <div>
      <form>
        <div id="create-new-fact" className={style["subheading"]}>
          <h1>Create New Fact</h1>
        </div>

        <div className={style["markdown-guide"]}>
          <ReactMarkdown>
            You can use markdown to style your content. Please see
            [here](https://commonmark.org/help/) for a guide on markdown. To
            create an empty line, use *&amp;nbsp\;*.
          </ReactMarkdown>
        </div>

        <div className={style["subheading"]}>
          <h3>Preview</h3>
        </div>

        <div className={style["form-fact-preview"]}>
          <div>
            <h2>
              <ReactMarkdown>
                {newFact.title.replace(/\\n/g, "\n")}
              </ReactMarkdown>
            </h2>
          </div>
          <div>
            <ReactMarkdown>
              {newFact.content.replace(/\\n/g, "\n")}
            </ReactMarkdown>
          </div>
        </div>

        <div className={style["form-text-field"]}>
          <TextField
            required
            fullWidth
            id="fact-title"
            label="Fact Title"
            name="title"
            variant="outlined"
            value={newFact.title}
            onChange={handleChange}
          />
        </div>

        <div className={style["form-text-field"]}>
          <TextField
            required
            fullWidth
            multiline
            id="fact-content"
            label="Fact Content"
            name="content"
            variant="outlined"
            value={newFact.content}
            onChange={handleChange}
          />
        </div>

        <div className={style["form-text-field"]}>
          <TextField
            fullWidth
            id="fact-id"
            label="Fact ID (leave blank unless updating an existing fact)"
            name="id"
            variant="outlined"
            value={newFact.id}
            onChange={handleChange}
          />
        </div>

        <div className={style["form-submit-button"]}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={submitFacts}
          >
            Submit
          </Button>
        </div>
      </form>

      <div className={style["subheading"]}>
        <h1>Edit Existing Facts</h1>
      </div>

      <div className={style["fact-list"]}>
        {props.facts.map((fact) => (
          <div className={style["fact-list-item"]} key={fact.id}>
            <div className={style["fact-list-fact"]}>
              <div>
                <h2>
                  <ReactMarkdown>
                    {fact.title.replace(/\\n/g, "\n")}
                  </ReactMarkdown>
                </h2>
              </div>
              <div>
                <ReactMarkdown>
                  {fact.content.replace(/\\n/g, "\n")}
                </ReactMarkdown>
              </div>
            </div>

            <div className={style["fact-list-buttons-div"]}>
              <Button
                className={style["fact-list-button"]}
                variant="outlined"
                color="primary"
                endIcon={<EditIcon />}
                type="button"
                onClick={() =>
                  handleEditClick(fact.title, fact.content, fact.id)
                }
              >
                Edit
              </Button>

              <div className={style["fact-list-id"]}>ID: {fact.id}</div>

              <Button
                className={style["fact-list-button"]}
                variant="outlined"
                color="primary"
                endIcon={<ClearIcon />}
                type="button"
                onClick={() => handleDeleteClick(fact.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
