export type Question = {
  id: number;
  question: string;
  answers: Array<Answer>;
  ref: string;
};

export type Answer = {
  id: string;
  answer: string;
  followUpQuestion: number;
};

export const houseQuestions = [
  {
    id: 0,
    question: "Is the item too big to fit in an empty bin?",
    answers: [
      {
        id: "a",
        answer: "Yes",
        followUpQuestion: 1,
      },
      {
        id: "b",
        answer: "No",
        followUpQuestion: 2,
      },
    ],
    ref: "",
  },
  {
    id: 1,
    question: "You can use the bulky waste collection service!",
    answers: [],
    ref: "Bulky Waste Collection Service",
  },
  {
    id: 2,
    question: "What material is it made of?",
    answers: [
      {
        id: "c",
        answer: "Plastic / Metal",
        followUpQuestion: 3,
      },
      {
        id: "d",
        answer: "Cardboard / Paper",
        followUpQuestion: 4,
      },
      {
        id: "e",
        answer: "Glass",
        followUpQuestion: 5,
      },
      {
        id: "f",
        answer: "Textiles",
        followUpQuestion: 6,
      },
      {
        id: "g",
        answer: "Food",
        followUpQuestion: 7,
      },
      {
        id: "h",
        answer: "Natural / Organic",
        followUpQuestion: 8,
      },
      {
        id: "i",
        answer: "Other",
        followUpQuestion: 9,
      },
    ],
    ref: "",
  },
  {
    id: 3,
    question: "You can use the red recycling box!",
    answers: [],
    ref: "Plastic and Metal Recycling Service",
  },
  {
    id: 4,
    question: "You can use the blue recycling box!",
    answers: [],
    ref: "Paper and Card Recycling Service",
  },
  {
    id: 5,
    question: "You can use the green recycling box!",
    answers: [],
    ref: "Glass Recycling Service",
  },
  {
    id: 6,
    question:
      "You can use a clearly marked plastic bag and put it alongside your recycling boxes!",
    answers: [],
    ref: "Textile Recycling Service",
  },
  {
    id: 7,
    question: "You can use the food waste bin!",
    answers: [],
    ref: "Food Waste Recycling Service",
  },
  {
    id: 8,
    question: "Is it infectious (blood / tissue)?",
    answers: [
      {
        id: "j",
        answer: "Yes",
        followUpQuestion: 10,
      },
      {
        id: "k",
        answer: "No",
        followUpQuestion: 11,
      },
    ],
    ref: "",
  },
  {
    id: 9,
    question: "Is it an electrical appliance?",
    answers: [
      {
        id: "l",
        answer: "Yes",
        followUpQuestion: 12,
      },
      {
        id: "m",
        answer: "No",
        followUpQuestion: 13,
      },
    ],
    ref: "",
  },
  {
    id: 10,
    question: "You can use the clinical waste collection service!",
    answers: [],
    ref: "Clinical Waste Collection Service",
  },
  {
    id: 11,
    question: "You can use the brown wheeled bin!",
    answers: [],
    ref: "Garden Waste Recycling Service",
  },
  {
    id: 12,
    question:
      "You can use a clearly marked plastic bag and put it alongside your recycling boxes!",
    answers: [],
    ref: "Small Electrical Items Recycling Service",
  },
  {
    id: 13,
    question:
      "Sorry, this item is rubbish and cannot be recycled. Please use the black wheeled bin!",
    answers: [],
    ref: "General Waste Collection Service",
  },
];

export const flatQuestions = [
  {
    id: 0,
    question: "Is the item too big to fit in an empty bin?",
    answers: [
      {
        id: "a",
        answer: "Yes",
        followUpQuestion: 1,
      },
      {
        id: "b",
        answer: "No",
        followUpQuestion: 2,
      },
    ],
    ref: "",
  },
  {
    id: 1,
    question: "You can use the bulky waste collection service!",
    answers: [],
    ref: "Bulky Waste Collection Service",
  },
  {
    id: 2,
    question: "What material is it made of?",
    answers: [
      {
        id: "c",
        answer: "Plastic",
        followUpQuestion: 3,
      },
      {
        id: "d",
        answer: "Metal",
        followUpQuestion: 4,
      },
      {
        id: "e",
        answer: "Cardboard",
        followUpQuestion: 5,
      },
      {
        id: "f",
        answer: "Paper",
        followUpQuestion: 6,
      },
      {
        id: "g",
        answer: "Glass",
        followUpQuestion: 7,
      },
      {
        id: "h",
        answer: "Textiles",
        followUpQuestion: 8,
      },
      {
        id: "i",
        answer: "Food",
        followUpQuestion: 9,
      },
      {
        id: "j",
        answer: "Natural / Organic",
        followUpQuestion: 10,
      },
      {
        id: "k",
        answer: "Other",
        followUpQuestion: 11,
      },
    ],
    ref: "",
  },
  {
    id: 3,
    question:
      "You can use a communal bin with a red 'household plastic packaging' label!",
    answers: [],
    ref: "Plastic Recycling Service",
  },
  {
    id: 4,
    question:
      "You can use a communal bin with a grey 'tins, cans & aerosols' label!",
    answers: [],
    ref: "Metal Recycling Service",
  },
  {
    id: 5,
    question: "You can use a communal bin with a blue 'cardboard' label!",
    answers: [],
    ref: "Card Recycling Service",
  },
  {
    id: 6,
    question: "You can use a communal bin with a blue 'paper' label!",
    answers: [],
    ref: "Paper Recycling Service",
  },
  {
    id: 7,
    question: "You can use a communal bin with a teal 'mixed glass' label!",
    answers: [],
    ref: "Glass Recycling Service",
  },
  {
    id: 8,
    question:
      "You can utilise TRAID charity and Salvation Army Textile Banks to get your textiles recycled!",
    answers: [],
    ref: "Textiles Recycling",
  },
  {
    id: 9,
    question: "You can use a communal bin with a green 'food waste' label!",
    answers: [],
    ref: "Food Waste Recycling Service",
  },

  {
    id: 10,
    question: "Is it infectious (blood / tissue)?",
    answers: [
      {
        id: "l",
        answer: "Yes",
        followUpQuestion: 12,
      },
      {
        id: "m",
        answer: "No",
        followUpQuestion: 13,
      },
    ],
    ref: "",
  },
  {
    id: 11,
    question: "Is it an electrical appliance?",
    answers: [
      {
        id: "n",
        answer: "Yes",
        followUpQuestion: 14,
      },
      {
        id: "o",
        answer: "No",
        followUpQuestion: 13,
      },
    ],
    ref: "",
  },
  {
    id: 12,
    question: "You can use the clinical waste collection service!",
    answers: [],
    ref: "Clinical Waste Collection Service",
  },
  {
    id: 13,
    question:
      "Sorry, this item is rubbish and cannot be recycled. Please use a general waste communal bin!",
    answers: [],
    ref: "General Waste Collection Service",
  },
  {
    id: 14,
    question:
      "You can utilise TRAID charity as an opportunity to get your small electrical appliances recycled!",
    answers: [],
    ref: "Small Electrical Items Recycling",
  },
];
