export const labelToFlatServices = new Map<
  string,
  { name: string; id: string }
>([
  [
    "plastic",
    {
      name: "You can use a communal bin with a red 'household plastic packaging' label!",
      id: "plastic-recycling-service",
    },
  ],
  [
    "metal",
    {
      name: "You can use a communal bin with a grey 'tins, cans & aerosols' label!",
      id: "metal-recycling-service",
    },
  ],
  [
    "cardboard",
    {
      name: "You can use a communal bin with a blue 'cardboard' label!",
      id: "card-recycling-service",
    },
  ],
  [
    "paper",
    {
      name: "You can use a communal bin with a blue 'paper' label!",
      id: "paper-recycling-service",
    },
  ],
  [
    "glass",
    {
      name: "You can use a communal bin with a teal 'mixed glass' label!",
      id: "glass-recycling-service",
    },
  ],
  [
    "food",
    {
      name: "You can use a communal bin with a green 'food waste' label!",
      id: "food-waste-recycling-service",
    },
  ],
  [
    "rubbish",
    {
      name: "This item cannot be recycled. Please use a communal bin with a black 'general waste' label!",
      id: "general-waste-collection-service",
    },
  ],
  [
    "textile",
    {
      name: "You can utilise TRAID charity and Salvation Army Textile Banks to get your textiles recycled!",
      id: "textiles-recycling",
    },
  ],
  [
    "small electrical",
    {
      name: "You can utilise TRAID charity as an opportunity to get your small electrical appliances recycled!",
      id: "small-electrical-items-recycling",
    },
  ],
  [
    "bulky waste",
    {
      name: "You can use the bulky waste collection service!",
      id: "bulky-waste-collection-service",
    },
  ],
  [
    "clinical waste",
    {
      name: "You can use the clinical waste collection service!",
      id: "clinical-waste-collection-service",
    },
  ],
]);

export const labelToHouseServices = new Map<
  string,
  { name: string; id: string }
>([
  [
    "plastic",
    {
      name: "You can use the red recycling box!",
      id: "plastic-and-metal-recycling-service",
    },
  ],
  [
    "metal",
    {
      name: "You can use the red recycling box!",
      id: "plastic-and-metal-recycling-service",
    },
  ],
  [
    "cardboard",
    {
      name: "You can use the blue recycling box!",
      id: "paper-and-card-recycling-service",
    },
  ],
  [
    "paper",
    {
      name: "You can use the blue recycling box!",
      id: "paper-and-card-recycling-service",
    },
  ],
  [
    "glass",
    {
      name: "You can use the green recycling box!",
      id: "glass-recycling-service",
    },
  ],
  [
    "food",
    {
      name: "You can use the food waste bin!",
      id: "food-waste-recycling-service",
    },
  ],
  [
    "rubbish",
    {
      name: "This item cannot be recycled. Please use the black wheeled bin!",
      id: "general-waste-collection-service",
    },
  ],
  [
    "textile",
    {
      name: "You can use a clearly marked plastic bag and put it alongside your recycling boxes!",
      id: "textile-recycling-service",
    },
  ],
  [
    "small electrical",
    {
      name: "You can use a clearly marked plastic bag and put it alongside your recycling boxes!",
      id: "small-electrical-items-recycling-service",
    },
  ],
  [
    "bulky waste",
    {
      name: "You can use the bulky waste collection service!",
      id: "bulky-waste-collection-service",
    },
  ],
  [
    "clinical waste",
    {
      name: "You can use the clinical waste collection service!",
      id: "clinical-waste-collection-service",
    },
  ],
  [
    "garden waste",
    {
      name: "You can use the brown wheeled bin!",
      id: "garden-waste-recycling-service",
    },
  ],
]);
