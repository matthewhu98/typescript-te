import { loops_and_arrays } from '../main/loops_and_arrays';

const exercise = new loops_and_arrays();

describe('Loops and Arrays exercise', () => {
  describe('firstLast6', () => {
    it('should return true if the array given is [1, 2, 3, 6]', () => {
      expect(exercise.firstLast6([1, 2, 3, 6])).toEqual(true);
    });

    it('should return false if neither end is a 6', () => {
      expect(exercise.firstLast6([3, 2, 8, 5, 2])).toEqual(false);
    })
  })
})