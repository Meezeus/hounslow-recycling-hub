export type Question = {
  question: string;
  answers: Array<Answer>;
};

export type Answer = {
  answer: string;
  correct: boolean;
};

export const quiz = [
  {
    question: "What kind of item can you recycle using you red recycling box?",
    answers: [
      {
        answer: "Plastic",
        correct: true,
      },
      {
        answer: "Card",
        correct: false,
      },
      {
        answer: "Paper",
        correct: false,
      },
      {
        answer: "Glass",
        correct: false,
      },
    ],
  },
  {
    question: "What kind of item can you recycle using you red recycling box?",
    answers: [
      {
        answer: "Metal",
        correct: true,
      },
      {
        answer: "Card",
        correct: false,
      },
      {
        answer: "Paper",
        correct: false,
      },
      {
        answer: "Glass",
        correct: false,
      },
    ],
  },
  {
    question: "What kind of item can you recycle using you blue recycling box?",
    answers: [
      {
        answer: "Plastic",
        correct: false,
      },
      {
        answer: "Metal",
        correct: false,
      },
      {
        answer: "Card",
        correct: true,
      },
      {
        answer: "Glass",
        correct: false,
      },
    ],
  },
  {
    question: "What kind of item can you recycle using you blue recycling box?",
    answers: [
      {
        answer: "Plastic",
        correct: false,
      },
      {
        answer: "Metal",
        correct: false,
      },
      {
        answer: "Paper",
        correct: true,
      },
      {
        answer: "Glass",
        correct: false,
      },
    ],
  },
  {
    question:
      "What kind of item can you recycle using you green recycling box?",
    answers: [
      {
        answer: "Plastic",
        correct: false,
      },
      {
        answer: "Card",
        correct: false,
      },
      {
        answer: "Paper",
        correct: false,
      },
      {
        answer: "Glass",
        correct: true,
      },
    ],
  },
  {
    question: "What is the correct way to recycle plastic?",
    answers: [
      {
        answer: "Red recycling box",
        correct: true,
      },
      {
        answer: "Blue recycling box",
        correct: false,
      },
      {
        answer: "Green recycling box",
        correct: false,
      },
      {
        answer: "Black wheeled bin",
        correct: false,
      },
    ],
  },
  {
    question: "What is the correct way to recycle metal?",
    answers: [
      {
        answer: "Red recycling box",
        correct: true,
      },
      {
        answer: "Blue recycling box",
        correct: false,
      },
      {
        answer: "Green recycling box",
        correct: false,
      },
      {
        answer: "Black wheeled bin",
        correct: false,
      },
    ],
  },
  {
    question: "What is the correct way to recycle card?",
    answers: [
      {
        answer: "Red recycling box",
        correct: false,
      },
      {
        answer: "Blue Recycling box",
        correct: true,
      },
      {
        answer: "Green recycling box",
        correct: false,
      },
      {
        answer: "Black wheeled bin",
        correct: false,
      },
    ],
  },
  {
    question: "What is the correct way to recycle paper?",
    answers: [
      {
        answer: "Red recycling box",
        correct: false,
      },
      {
        answer: "Blue Recycling box",
        correct: true,
      },
      {
        answer: "Green recycling box",
        correct: false,
      },
      {
        answer: "Black wheeled bin",
        correct: false,
      },
    ],
  },
  {
    question: "What is the correct way to recycle glass?",
    answers: [
      {
        answer: "Red recycling box",
        correct: false,
      },
      {
        answer: "Blue Recycling box",
        correct: false,
      },
      {
        answer: "Green recycling box",
        correct: true,
      },
      {
        answer: "Black wheeled bin",
        correct: false,
      },
    ],
  },
  {
    question: "What is the correct way to recycle textiles and clothing?",
    answers: [
      {
        answer: "Red recycling box",
        correct: false,
      },
      {
        answer: "Blue Recycling box",
        correct: false,
      },
      {
        answer: "Green recycling box",
        correct: false,
      },
      {
        answer: "Tied carrier bag",
        correct: true,
      },
    ],
  },
  {
    question: "What is the correct way to recycle small electrical items?",
    answers: [
      {
        answer: "Red recycling box",
        correct: false,
      },
      {
        answer: "Blue Recycling box",
        correct: false,
      },
      {
        answer: "Green recycling box",
        correct: false,
      },
      {
        answer: "Tied carrier bag",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of these items should NOT be recycled using your red recycling box?",
    answers: [
      {
        answer: "Plastic bottle",
        correct: false,
      },
      {
        answer: "Drink can",
        correct: false,
      },
      {
        answer: "Aluminium foil",
        correct: false,
      },
      {
        answer: "Plastic wrapping and packaging",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of these items should NOT be recycled using your blue recycling box?",
    answers: [
      {
        answer: "Cardboard",
        correct: false,
      },
      {
        answer: "Newspapers",
        correct: false,
      },
      {
        answer: "Tetra Paks",
        correct: false,
      },
      {
        answer: "Shredded paper",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of these items should NOT be recycled using your green recycling box?",
    answers: [
      {
        answer: "Glass bottles",
        correct: false,
      },
      {
        answer: "Glass jars",
        correct: false,
      },
      {
        answer: "Glass",
        correct: false,
      },
      {
        answer: "Ceramics",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of these items should NOT be recycled using your food waste bin?",
    answers: [
      {
        answer: "Fruit and vegetable peelings",
        correct: false,
      },
      {
        answer: "Tea bags and coffee granules",
        correct: false,
      },
      {
        answer: "Out of date meat and fish",
        correct: false,
      },
      {
        answer: "Liquids and oils",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of these items should NOT be recycled using your brown wheeled bin?",
    answers: [
      {
        answer: "Grass cuttings",
        correct: false,
      },
      {
        answer: "Leaves",
        correct: false,
      },
      {
        answer: "Twigs and small branches",
        correct: false,
      },
      {
        answer: "Soil",
        correct: true,
      },
    ],
  },
];
