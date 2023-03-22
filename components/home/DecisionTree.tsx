import React, { useEffect, useState } from "react";
import {
  Answer,
  houseQuestions,
  flatQuestions,
} from "@/data/DecisionTreeQuestions";
import { Button } from "antd";
import style from "@/styles/home/DecisionTree.module.css";
import buttonStyle from "@/styles/home/Button.module.css";

type DecisionTreeProps = {
  showFlatVersion: boolean;
  openAccordion(id: string): void;
};

export default function DecisionTree(props: DecisionTreeProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = props.showFlatVersion ? flatQuestions : houseQuestions;

  // This hook is called when the page version changes. It resets the recycling
  // assistant.
  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [props.showFlatVersion]);

  const handleAnswerClick = (answer: Answer) => {
    setCurrentQuestionIndex(answer.followUpQuestion);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
  };

  async function jumpToAccordion(
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) {
    event.stopPropagation();
    props.openAccordion(id);
    await new Promise((r) => setTimeout(r, 200));
    document.getElementById(id)?.scrollIntoView();
  }

  return (
    <div className={style["decision-tree-wrapper"]}>
      <div className={style["decision-tree-title"]}>
        <h2>Find out how to recycle your item here!</h2>
      </div>
      <div className={style["decision-tree"]}>
        <h3>{questions[currentQuestionIndex].question}</h3>
        <div>
          {questions[currentQuestionIndex].answers.map((answer) => (
            <button
              className={
                buttonStyle["button"] + " " + style["decision-tree-button"]
              }
              key={answer.id}
              onClick={() => handleAnswerClick(answer)}
            >
              {answer.answer}
            </button>
          ))}
        </div>
        <button
          className={
            buttonStyle["button"] + " " + style["decision-tree-button"]
          }
          type="button"
          onClick={(event) =>
            jumpToAccordion(event, questions[currentQuestionIndex].ref)
          }
          hidden={questions[currentQuestionIndex].ref == ""}
        >
          Click here for more info!
        </button>
      </div>
      <Button onClick={handleReset}>Restart</Button>
    </div>
  );
}
