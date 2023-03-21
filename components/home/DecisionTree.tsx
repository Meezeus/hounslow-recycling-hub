import React, { useState } from "react";
import { questions } from "@/data/DecisionTreeQuestions";
import { Button } from "antd";
import style from "@/styles/home/DecisionTree.module.css";
import buttonStyle from "@/styles/home/Button.module.css"

type Option = {
  id: string;
  value: string;
  followUpQuestion: number;
};

// type Question = {
//   id: number;
//   question: string;
//   options: Array<Option>;
// };

export default function DecisionTree() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionClick = (option: Option) => {
    setCurrentQuestionIndex(option.followUpQuestion);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
  };

  const currentQuestion = questions[currentQuestionIndex];

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
              className={buttonStyle["button"]}
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
