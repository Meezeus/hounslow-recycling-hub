import { useState, FormEvent, ChangeEvent } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { Facts } from "@/data/Facts";
import style from "@/styles/cms/FactCMS.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type FactCMSProps = {
  facts: Facts[];
};

export default function FactCMS(props: FactCMSProps) {
  const [newFact, setNewFact] = useState({ title: "", content: "" });

  /* ID is auto generated in backend */

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewFact({ ...newFact, [event.target.name]: event.target.value });
  }

  async function submitFacts(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await fetch("/api/facts", {
      method: "POST",
      body: JSON.stringify(newFact),
      headers: {
        "content-type": "application/json",
      },
    });

    const status = await res.status;
    console.log(status);
  }

  return (
    <div>
      <h2>Create new fact:</h2>
      <form onSubmit={submitFacts}>
        <div className={style["form-component-div"]}>
          <TextField
            fullWidth
            id="fact-title"
            label="Fact Title"
            name="title"
            variant="outlined"
            value={newFact.title}
            onChange={handleChange}
          />
        </div>
        <div className={style["form-component-div"]}>
          <TextField
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
        <div className={style["form-component-div"]}>
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Submit
          </Button>
        </div>
      </form>
      {/* <h2>Edit existing facts:</h2>
      <div className={style["fact-list"]}>
        {props.facts.map((fact) => (
          <div className={style["fact-list-item"]} key={fact.id}>
            <div className={style["fact-list-fact"]}>
              <h2>
                <ReactMarkdown>{fact.title}</ReactMarkdown>
              </h2>
              <ReactMarkdown>{fact.content}</ReactMarkdown>
              <br></br>
              <p style={{ whiteSpace: "pre-wrap" }}>{fact.content}</p>
              <br></br>
              <ReactMarkdown>
                {
                  "Find your nearest supermarket [recycling point](https://www.recyclenow.com/recycling-locator).  \nMake sure the bags and wrapping are food-free and as clean as possible.  \nKeep them all together and bring in bulk on your next supermarket trip.  \nNote down a reminder to recycle them on your shopping list."
                }
              </ReactMarkdown>
            </div>
            <Button
              variant="outlined"
              size="small"
              color="secondary"
              endIcon={<EditIcon />}
              type="button"
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="secondary"
              endIcon={<ClearIcon />}
              type="button"
            >
              Delete
            </Button>
          </div>
        ))}
      </div> */}
    </div>
  );
}
