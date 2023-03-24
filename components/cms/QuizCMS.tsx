import { useState, ChangeEvent } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { Question, Answer } from "@/data/Quiz";
import style from "@/styles/cms/QuizCMS.module.css";

type QuizCMSProps = {
  quiz: Question[];
  setQuiz(quiz: Question[]): void;
  // authToken: string;
};

export default function QuizCMS(props: QuizCMSProps) {
  const [newQuestion, setNewQuestion] = useState<Question>({
    question: "",
    answers: getEmptyAnswers(4),
    // id: "",
  });
  const [numberOfAnswers, setNumberOfAnswers] = useState(4);
  const [answers, setAnswers] = useState([]);

  function handleQuestionOnChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setNewQuestion({
      ...newQuestion,
      question: event.target.value,
    });
  }

  function getEmptyAnswers(num: number) {
    const answers = [];
    for (let i = 0; i < num; i++) {
      answers.push({ answer: "", correct: false });
    }
    return answers;
  }

  function handleSelectOnChange(event: SelectChangeEvent<number>) {
    setNumberOfAnswers(event.target.value as number);
    setNewQuestion({
      ...newQuestion,
      answers: getEmptyAnswers(event.target.value as number),
    });
  }

  function handleAnswerTextFieldOnChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) {
    setNewQuestion({
      ...newQuestion,
      answers: newQuestion.answers.map((currentAnswer, currentAnswerIndex) => {
        if (currentAnswerIndex == index) {
          return { answer: event.target.value, correct: currentAnswer.correct };
        } else {
          return {
            answer: currentAnswer.answer,
            correct: currentAnswer.correct,
          };
        }
      }),
    });
  }

  function handleAnswerCheckboxOnChange(
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    setNewQuestion({
      ...newQuestion,
      answers: newQuestion.answers.map((currentAnswer, currentAnswerIndex) => {
        if (currentAnswerIndex == index) {
          return {
            answer: currentAnswer.answer,
            correct: event.target.checked,
          };
        } else {
          return {
            answer: currentAnswer.answer,
            correct: currentAnswer.correct,
          };
        }
      }),
    });
  }

  async function submitQuestion() {
    let correct = false;
    // Check at least one marked as correct.
    newQuestion.answers.forEach(
      (answer) => (correct = correct || answer.correct)
    );
    // Check question is not empty.
    correct = correct && newQuestion.question != "";
    // Check answers are not empty.
    newQuestion.answers.forEach(
      (answer) => (correct = correct && answer.answer != "")
    );
    if (correct) {
      // <update database here>
      window.location.reload();
    }
  }

  //   function handleEditClick(question: string, answers: Answer[], id: string) {
  //     setNewQuestion({ question: question, answers: answers, id: id });
  //     document.getElementById("create-new-question")?.scrollIntoView();
  //   }

  //   async function handleDeleteClick(id: string) {
  //     // <update database here>
  //     props.setQuiz(props.quiz.filter((question) => question.id != id));
  //   }

  const answerComponents = [];
  for (let i = 0; i < numberOfAnswers; i++) {
    answerComponents.push(
      <div className={style["form-field"]} key={i}>
        <TextField
          required
          fullWidth
          label={`Answer #${i + 1}`}
          variant="outlined"
          value={newQuestion.answers[i].answer}
          onChange={(event) => handleAnswerTextFieldOnChange(event, i)}
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={newQuestion.answers[i].correct}
                onChange={(event) => handleAnswerCheckboxOnChange(event, i)}
              />
            }
            label="Correct"
          />
        </FormGroup>
      </div>
    );
  }

  return (
    <div>
      <form>
        <div id="create-new-question" className={style["subheading"]}>
          <h1>Create New Question</h1>
        </div>

        <div className={style["form-field"]}>
          <TextField
            required
            fullWidth
            id="question"
            label="Question"
            name="question"
            variant="outlined"
            value={newQuestion.question}
            onChange={(event) => handleQuestionOnChange(event)}
          />
        </div>

        <FormControl fullWidth>
          <InputLabel>Number of Answers</InputLabel>
          <Select
            id="number-of-answers"
            label="Number of Answers"
            name="number-of-answers"
            defaultValue={4}
            value={numberOfAnswers}
            onChange={(event, child) => handleSelectOnChange(event)}
          >
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={6}>Six</MenuItem>
          </Select>
        </FormControl>

        {answerComponents}

        <div className={style["form-submit-button"]}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={submitQuestion}
          >
            Submit
          </Button>
        </div>
      </form>

      <div className={style["subheading"]}>
        <h1>Edit Existing Quiz Questions</h1>
      </div>
    </div>
  );
}
