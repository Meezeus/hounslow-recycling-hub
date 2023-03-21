export type Question = {
  id: number;
  question: string;
  options: Array<Option>;
};

export type Option = {
  id: string;
  value: string;
  followUpQuestion: number;
};

export const houseQuestions = [
  {
    id: 0,
    question: "Is the item too big to fit in an empty bin?",
    options: [
      {
        id: "a",
        value: "Yes",
        followUpQuestion: 1,
      },
      {
        id: "b",
        value: "No",
        followUpQuestion: 2,
      },
    ],
  },
  {
    id: 1,
    question: "You can use the bulky waste collection service!",
    options: [],
  },
  {
    id: 2,
    question: "What material is it made of?",
    options: [
      {
        id: "c",
        value: "Plastic / Metal",
        followUpQuestion: 3,
      },
      {
        id: "d",
        value: "Cardboard / Paper",
        followUpQuestion: 4,
      },
      {
        id: "e",
        value: "Glass",
        followUpQuestion: 5,
      },
      {
        id: "f",
        value: "Textiles",
        followUpQuestion: 6,
      },
      {
        id: "g",
        value: "Food",
        followUpQuestion: 7,
      },
      {
        id: "h",
        value: "Natural / Organic",
        followUpQuestion: 8,
      },
      {
        id: "i",
        value: "Other",
        followUpQuestion: 9,
      },
    ],
  },
  {
    id: 3,
    question: "You can use the red recycling box!",
    options: [],
  },
  {
    id: 4,
    question: "You can use the blue recycling box!",
    options: [],
  },
  {
    id: 5,
    question: "You can use the green recycling box!",
    options: [],
  },
  {
    id: 6,
    question:
      "You can use a clearly marked plastic bag and put it alongside your recycling boxes!",
    options: [],
  },
  {
    id: 7,
    question: "You can use the food waste bin!",
    options: [],
  },
  {
    id: 8,
    question: "Is it infectious (blood / tissue)?",
    options: [
      {
        id: "j",
        value: "Yes",
        followUpQuestion: 10,
      },
      {
        id: "k",
        value: "No",
        followUpQuestion: 11,
      },
    ],
  },
  {
    id: 9,
    question: "Is it an electrical appliance?",
    options: [
      {
        id: "l",
        value: "Yes",
        followUpQuestion: 6,
      },
      {
        id: "m",
        value: "No",
        followUpQuestion: 12,
      },
    ],
  },
  {
    id: 10,
    question: "You can use the clinical waste collection service!",
    options: [],
  },
  {
    id: 11,
    question: "You can use the brown wheeled bin!",
    options: [],
  },
  {
    id: 12,
    question:
      "Sorry, this item is rubbish and cannot be recycled. Please use the black wheeled bin!",
    options: [],
  },
];

export const flatQuestions = [
  {
    id: 0,
    question: "Is the item too big to fit in an empty bin?",
    options: [
      {
        id: "a",
        value: "Yes",
        followUpQuestion: 1,
      },
      {
        id: "b",
        value: "No",
        followUpQuestion: 2,
      },
    ],
  },
  {
    id: 1,
    question: "You can use the bulky waste collection service!",
    options: [],
  },
  {
    id: 2,
    question: "What material is it made of?",
    options: [
      {
        id: "c",
        value: "Plastic",
        followUpQuestion: 3,
      },
      {
        id: "d",
        value: "Metal",
        followUpQuestion: 4,
      },
      {
        id: "e",
        value: "Cardboard",
        followUpQuestion: 5,
      },
      {
        id: "f",
        value: "Paper",
        followUpQuestion: 6,
      },
      {
        id: "g",
        value: "Glass",
        followUpQuestion: 7,
      },
      {
        id: "h",
        value: "Textiles",
        followUpQuestion: 8,
      },
      {
        id: "i",
        value: "Food",
        followUpQuestion: 9,
      },
      {
        id: "j",
        value: "Natural / Organic",
        followUpQuestion: 10,
      },
      {
        id: "k",
        value: "Other",
        followUpQuestion: 11,
      },
    ],
  },
  {
    id: 3,
    question:
      "You can use a communal bin with a red 'household plastic packaging' label!",
    options: [],
  },
  {
    id: 4,
    question:
      "You can use a communal bin with a grey 'tins, cans & aerosols' label!",
    options: [],
  },
  {
    id: 5,
    question: "You can use a communal bin with a blue 'cardboard' label!",
    options: [],
  },
  {
    id: 6,
    question: "You can use a communal bin with a blue 'paper' label!",
    options: [],
  },
  {
    id: 7,
    question: "You can use a communal bin with a teal 'mixed glass' label!",
    options: [],
  },
  {
    id: 8,
    question:
      "You can utilise TRAID charity and Salvation Army Textile Banks to get your textiles recycled!",
    options: [],
  },
  {
    id: 9,
    question: "You can use a communal bin with a green 'food waste' label!",
    options: [],
  },

  {
    id: 10,
    question: "Is it infectious (blood / tissue)?",
    options: [
      {
        id: "l",
        value: "Yes",
        followUpQuestion: 12,
      },
      {
        id: "m",
        value: "No",
        followUpQuestion: 13,
      },
    ],
  },
  {
    id: 11,
    question: "Is it an electrical appliance?",
    options: [
      {
        id: "n",
        value: "Yes",
        followUpQuestion: 14,
      },
      {
        id: "o",
        value: "No",
        followUpQuestion: 13,
      },
    ],
  },
  {
    id: 12,
    question: "You can use the clinical waste collection service!",
    options: [],
  },
  {
    id: 13,
    question:
      "Sorry, this item is rubbish and cannot be recycled. Please use a general waste communal bin!",
    options: [],
  },
  {
    id: 14,
    question:
      "You can utilise TRAID charity as an opportunity to get your small electrical appliances recycled!",
    options: [],
  },
];
