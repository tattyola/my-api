import {expect} from 'chai';

describe('operations with numbers', function () {
    const a = 3;
    const b = 2;
    it ('addition works correctly', function () {
        expect(a + b).to.eq(5);
    })
    it ('deduction works correctly', function () {
        expect(a - b).to.eq(1);
    })
})