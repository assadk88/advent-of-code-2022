import { describe, expect, test } from 'vitest';
import { input } from './input';
import { part1, part2 } from './main';

describe('2023', () => {
  describe('Day 1', () => {
    test('Part 1', () => {
      const result = part1(input);
      expect(result).toBe(54239);
    });

    test.skip('Part 2', () => {
      const result = part2(input);
      expect(result).toBe(206104);
    });
  });
});
