import React, { useEffect, useState } from "react";
import {
  Option,
  houseQuestions,
  flatQuestions,
} from "@/data/DecisionTreeQuestions";
import { Button } from "antd";
import style from "@/styles/home/DecisionTree.module.css";
import buttonStyle from "@/styles/home/Button.module.css";

type DecisionTreeProps = {
  showFlatVersion: boolean;
};

export default function DecisionTree(props: DecisionTreeProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // This hook is called when the page version changes. It resets the recycling
  // assistant.
  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [props.showFlatVersion]);

  const handleOptionClick = (option: Option) => {
    setCurrentQuestionIndex(option.followUpQuestion);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
  };

  const currentQuestion = props.showFlatVersion
    ? flatQuestions[currentQuestionIndex]
    : houseQuestions[currentQuestionIndex];

  return (
    <div className={style["decision-tree-wrapper"]}>
      <div className={style["decision-tree-title"]}>
        <h2>Find the right recycling service for your item here!</h2>
      </div>
      <div className={style["decision-tree"]}>
        <h3>{currentQuestion.question}</h3>
        <div>
          {currentQuestion.options.map((option) => (
            <button
              className={
                buttonStyle["button"] + " " + style["decision-tree-option"]
              }
              key={option.id}
              onClick={() => handleOptionClick(option)}
            >
              {option.value}
            </button>
          ))}
        </div>
      </div>
      <Button onClick={handleReset}>Restart</Button>
    </div>
  );
}
