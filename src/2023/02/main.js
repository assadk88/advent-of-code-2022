import { AOC } from "@assadk/aoc-utils";

export const part1 = input => {
  return AOC.parseInput(input)
    .map(line => {
      return line.replace(/Game\s\d+:\s/g, '');
    })
    .map(line => {
      return line.match(/\d+\s(g|b|r)/g);
    })
    .map(lineArrayRep => {
      return lineArrayRep.map(arrayItems => {
        const array = [];
        return arrayItems;
      });
    });
};

export const part2 = input => { };
