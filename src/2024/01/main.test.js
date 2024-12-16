import { describe, expect, test } from 'vitest';
import { input } from './input';
import { input as sampleInput } from './inputSample';
import { part1, part2 } from './main';

describe('2024', () => {
  describe('Day 1', () => {
    test('Part 1', () => {
      expect(part1(sampleInput)).toEqual(11);
      expect(part1(input)).toEqual(2164381);
    });

    test('Part 2', () => {
      expect(part2(sampleInput)).toEqual(31);
      expect(part2(input)).toEqual(20719933);
    });
  });
});
