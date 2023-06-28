const getPaginationArray = require('../paginations')
const assert = require('assert')

describe('Pagination index calculator', function () {
  describe('getPaginationArray Function', function () {
    it('Should get [1] from input (3, 1)', function () {
      const result = getPaginationArray(3, 1)
      const answer = [1]
      assert.deepEqual(result, answer)
    });

    it('Should get [1, 2] from input (7, 1)', function () {
      const result = getPaginationArray(7, 1)
      const answer = [1, 2]
      assert.deepEqual(result, answer)
    });

    it('Should get [1, 2] from input (8, 2)', function () {
      const result = getPaginationArray(8, 2)
      const answer = [1, 2]
      assert.deepEqual(result, answer)
    });

    it('Should get [1, 2, 3] from input (12, 2)', function () {
      const result = getPaginationArray(12, 2)
      const answer = [1, 2, 3]
      assert.deepEqual(result, answer)
    });

    it('Should get [2, 3, 4] from input (17, 3)', function () {
      const result = getPaginationArray(17, 3)
      const answer = [2, 3, 4]
      assert.deepEqual(result, answer)
    });

    it('Should get [2, 3, 4] from input (19, 4)', function () {
      const result = getPaginationArray(19, 4)
      const answer = [2, 3, 4]
      assert.deepEqual(result, answer)
    });
  });
});