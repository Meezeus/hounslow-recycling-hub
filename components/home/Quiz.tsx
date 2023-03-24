import React, { useState } from "react";
import { Question, quiz } from "@/data/Quiz";
import style from "@/styles/home/Question.module.css";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    quiz[Math.floor(Math.random() * quiz.length)]
  );
  const [isAnswerSelected, setAnswerSelected] = useState(false);

  const handleAnswerClick = async () => {
    if (!isAnswerSelected) {
      setAnswerSelected(true);
      await new Promise((r) => setTimeout(r, 10000));
      setAnswerSelected(false);
      setCurrentQuestion(quiz[Math.floor(Math.random() * quiz.length)]);
    }
  };

  return (
    <div className={style["question-box"]}>
      <h2>{currentQuestion.question}</h2>
      <div className={style["question-box-answers"]}>
        {currentQuestion.answers.map((answer) => (
          <button
            key={currentQuestion.answers.indexOf(answer)}
            className={
              style["answer-button"] +
              (isAnswerSelected
                ? answer.correct
                  ? " " + style["border-correct"]
                  : " " + style["border-incorrect"]
                : "")
            }
            onClick={() => handleAnswerClick()}
          >
            {answer.answer}
          </button>
        ))}
      </div>
    </div>
  );
}
