import { useState, ChangeEvent } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Fact } from "@/data/Facts";
import style from "@/styles/cms/FactCMS.module.css";

type FactCMSProps = {
  facts: Fact[];
  setFacts(facts: Fact[]): void;
  authToken: string;
};

export default function FactCMS(props: FactCMSProps) {
  const [newFact, setNewFact] = useState({ title: "", content: "", id: "" });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewFact({ ...newFact, [event.target.name]: event.target.value });
  }

  async function submitFact() {
    if (newFact.title != "" && newFact.content != "") {
      const updateurl = newFact.id === "" ? "" : `/${newFact.id}`;
      const res = await fetch(`/api/facts${updateurl}`, {
        method: "POST",
        body: JSON.stringify(newFact),
        headers: {
          "content-type": "application/json",
          Authorization: props.authToken,
        },
      });
      const status = await res.status;
      console.log(status);
      window.location.reload();
    }
  }

  function handleEditClick(fact: Fact) {
    setNewFact({ title: fact.title, content: fact.content, id: fact.id });
    document.getElementById("create-new-fact")?.scrollIntoView();
  }

  async function handleDeleteClick(id: string) {
    const res = await fetch(`/api/facts/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: props.authToken,
      },
    });
    const status = await res.status;
    console.log(status);
    props.setFacts(props.facts.filter((fact) => fact.id != id));
  }

  const cmsformtitle =
    newFact.id === ""
      ? "Create new Fact"
      : `Editing fact with ID: ${newFact.id}`;

  return (
    <div>
      <form>
        <div id="create-new-fact" className={style["subheading"]}>
          <h1>{cmsformtitle}</h1>
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
            label="Fact Content"
            name="content"
            variant="outlined"
            value={newFact.content}
            onChange={handleChange}
          />
        </div>

        <div className={style["form-submit-button"]}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={submitFact}
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
                onClick={() => handleEditClick(fact)}
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
