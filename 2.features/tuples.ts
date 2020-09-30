const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type DrinkTuple = [string, boolean, number];

const pepsi: DrinkTuple = ['brown', true, 40];
const sprite: DrinkTuple = ['clear', true, 40];
const tea: DrinkTuple = ['brown', false, 0];

const carSpecs: [number, number] = [40, 3354];

const carStats = {
  hp: 400,
  weight: 3354,
};
