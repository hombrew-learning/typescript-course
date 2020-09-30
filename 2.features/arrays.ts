const carMakers = ['ford', 'toyota', 'chevy'];
const carMakersEmpty: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMakeEmpty: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// preventing incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
const importantDatesEmpty: (string | Date)[] = [];

importantDatesEmpty.push('2030-10-10');
importantDatesEmpty.push(new Date());

export {};
