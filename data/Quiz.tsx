export type Question = {
  question: string;
  answers: Answer[];
  id: string;
};

export type Answer = {
  answer: string;
  correct: boolean;
  id: string;
};

export const quiz = [
  {
    question: "What kind of item can you recycle using your red recycling box?",
    answers: [
      {
        answer: "Plastic",
        correct: true,
        id: "a",
      },
      {
        answer: "Card",
        correct: false,
        id: "b",
      },
      {
        answer: "Paper",
        correct: false,
        id: "c",
      },
      {
        answer: "Glass",
        correct: false,
        id: "d",
      },
    ],
    id: "0",
  },
  {
    question: "What kind of item can you recycle using your red recycling box?",
    answers: [
      {
        answer: "Metal",
        correct: true,
        id: "a",
      },
      {
        answer: "Card",
        correct: false,
        id: "b",
      },
      {
        answer: "Paper",
        correct: false,
        id: "c",
      },
      {
        answer: "Glass",
        correct: false,
        id: "d",
      },
    ],
    id: "1",
  },
  {
    question:
      "What kind of item can you recycle using your blue recycling box?",
    answers: [
      {
        answer: "Plastic",
        correct: false,
        id: "a",
      },
      {
        answer: "Metal",
        correct: false,
        id: "b",
      },
      {
        answer: "Card",
        correct: true,
        id: "c",
      },
      {
        answer: "Glass",
        correct: false,
        id: "d",
      },
    ],
    id: "2",
  },
  {
    question:
      "What kind of item can you recycle using your blue recycling box?",
    answers: [
      {
        answer: "Plastic",
        correct: false,
        id: "a",
      },
      {
        answer: "Metal",
        correct: false,
        id: "b",
      },
      {
        answer: "Paper",
        correct: true,
        id: "c",
      },
      {
        answer: "Glass",
        correct: false,
        id: "d",
      },
    ],
    id: "3",
  },
  {
    question:
      "What kind of item can you recycle using your green recycling box?",
    answers: [
      {
        answer: "Plastic",
        correct: false,
        id: "a",
      },
      {
        answer: "Card",
        correct: false,
        id: "b",
      },
      {
        answer: "Paper",
        correct: false,
        id: "c",
      },
      {
        answer: "Glass",
        correct: true,
        id: "d",
      },
    ],
    id: "4",
  },
  {
    question: "What is the correct way to recycle plastic?",
    answers: [
      {
        answer: "Red recycling box",
        correct: true,
        id: "a",
      },
      {
        answer: "Blue recycling box",
        correct: false,
        id: "b",
      },
      {
        answer: "Green recycling box",
        correct: false,
        id: "c",
      },
      {
        answer: "Black wheeled bin",
        correct: false,
        id: "d",
      },
    ],
    id: "5",
  },
  {
    question: "What is the correct way to recycle metal?",
    answers: [
      {
        answer: "Red recycling box",
        correct: true,
        id: "a",
      },
      {
        answer: "Blue recycling box",
        correct: false,
        id: "b",
      },
      {
        answer: "Green recycling box",
        correct: false,
        id: "c",
      },
      {
        answer: "Black wheeled bin",
        correct: false,
        id: "d",
      },
    ],
    id: "6",
  },
  {
    question: "What is the correct way to recycle card?",
    answers: [
      {
        answer: "Red recycling box",
        correct: false,
        id: "a",
      },
      {
        answer: "Blue Recycling box",
        correct: true,
        id: "b",
      },
      {
        answer: "Green recycling box",
        correct: false,
        id: "c",
      },
      {
        answer: "Black wheeled bin",
        correct: false,
        id: "d",
      },
    ],
    id: "7",
  },
  {
    question: "What is the correct way to recycle paper?",
    answers: [
      {
        answer: "Red recycling box",
        correct: false,
        id: "a",
      },
      {
        answer: "Blue Recycling box",
        correct: true,
        id: "b",
      },
      {
        answer: "Green recycling box",
        correct: false,
        id: "c",
      },
      {
        answer: "Black wheeled bin",
        correct: false,
        id: "d",
      },
    ],
    id: "8",
  },
  {
    question: "What is the correct way to recycle glass?",
    answers: [
      {
        answer: "Red recycling box",
        correct: false,
        id: "a",
      },
      {
        answer: "Blue Recycling box",
        correct: false,
        id: "b",
      },
      {
        answer: "Green recycling box",
        correct: true,
        id: "c",
      },
      {
        answer: "Black wheeled bin",
        correct: false,
        id: "d",
      },
    ],
    id: "9",
  },
  {
    question: "What is the correct way to recycle textiles and clothing?",
    answers: [
      {
        answer: "Red recycling box",
        correct: false,
        id: "1a",
      },
      {
        answer: "Blue Recycling box",
        correct: false,
        id: "1b",
      },
      {
        answer: "Green recycling box",
        correct: false,
        id: "1c",
      },
      {
        answer: "Tied carrier bag",
        correct: true,
        id: "1d",
      },
    ],
    id: "10",
  },
  {
    question: "What is the correct way to recycle small electrical items?",
    answers: [
      {
        answer: "Red recycling box",
        correct: false,
        id: "1a",
      },
      {
        answer: "Blue Recycling box",
        correct: false,
        id: "1b",
      },
      {
        answer: "Green recycling box",
        correct: false,
        id: "1c",
      },
      {
        answer: "Tied carrier bag",
        correct: true,
        id: "1d",
      },
    ],
    id: "11",
  },
  {
    question:
      "Which of these items should NOT be recycled using your red recycling box?",
    answers: [
      {
        answer: "Plastic bottle",
        correct: false,
        id: "1a",
      },
      {
        answer: "Drink can",
        correct: false,
        id: "1b",
      },
      {
        answer: "Aluminium foil",
        correct: false,
        id: "1c",
      },
      {
        answer: "Plastic wrapping and packaging",
        correct: true,
        id: "1d",
      },
    ],
    id: "12",
  },
  {
    question:
      "Which of these items should NOT be recycled using your blue recycling box?",
    answers: [
      {
        answer: "Cardboard",
        correct: false,
        id: "1a",
      },
      {
        answer: "Newspapers",
        correct: false,
        id: "1b",
      },
      {
        answer: "Tetra Paks",
        correct: false,
        id: "1c",
      },
      {
        answer: "Shredded paper",
        correct: true,
        id: "1d",
      },
    ],
    id: "13",
  },
  {
    question:
      "Which of these items should NOT be recycled using your green recycling box?",
    answers: [
      {
        answer: "Glass bottles",
        correct: false,
        id: "1a",
      },
      {
        answer: "Glass jars",
        correct: false,
        id: "1b",
      },
      {
        answer: "Glass",
        correct: false,
        id: "1c",
      },
      {
        answer: "Ceramics",
        correct: true,
        id: "1d",
      },
    ],
    id: "14",
  },
  {
    question:
      "Which of these items should NOT be recycled using your food waste bin?",
    answers: [
      {
        answer: "Fruit and vegetable peelings",
        correct: false,
        id: "1a",
      },
      {
        answer: "Tea bags and coffee granules",
        correct: false,
        id: "1b",
      },
      {
        answer: "Out of date meat and fish",
        correct: false,
        id: "1c",
      },
      {
        answer: "Liquids and oils",
        correct: true,
        id: "1d",
      },
    ],
    id: "15",
  },
  {
    question:
      "Which of these items should NOT be recycled using your brown wheeled bin?",
    answers: [
      {
        answer: "Grass cuttings",
        correct: false,
        id: "1a",
      },
      {
        answer: "Leaves",
        correct: false,
        id: "1b",
      },
      {
        answer: "Twigs and small branches",
        correct: false,
        id: "1c",
      },
      {
        answer: "Soil",
        correct: true,
        id: "1d",
      },
    ],
    id: "16",
  },
];
