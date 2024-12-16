// https://adventofcode.com/2024/day/1
import { AOC } from '@assadk/aoc-utils';

export function part1(input) {
  const processedInput = AOC.parseInput(input).map(val => {
    return val.split('   ');
  });
  const [firstColumn, secondColumn] = processedInput.transpose();
  const displacement = firstColumn.sort().displacement(secondColumn.sort());
  return displacement.sum();
}

export function part2(input) {
  const processedInput = AOC.parseInput(input).map(val => {
    return val.split('   ');
  });
  const [firstColumn, secondColumn] = processedInput.transpose();
  const frequencyProduct = () => {
    return firstColumn.map(element => {
      return secondColumn.freq().reduce((elementFreq, curVal) => {
        return element === curVal[0] ? element * curVal[1] : elementFreq;
      }, 0);
    });
  };
  return frequencyProduct().sum();
}
