export const isEven = (n: number) => n % 2 === 0

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min
