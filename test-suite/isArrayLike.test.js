import { expect } from 'chai'
import isArrayLike from '../code-to-test/isArrayLike.js'

describe('isArrayLike', () => {
  describe('Should return true', () => {
    it('should return true for arrays', () => {
      expect(isArrayLike([1, 2, 3])).to.be.true
      expect(isArrayLike([])).to.be.true
    })

    it('should return true for strings', () => {
      expect(isArrayLike('abc')).to.be.true
      expect(isArrayLike('')).to.be.true
    })

    it('should return true for arguments object', function() {
      expect(isArrayLike(arguments)).to.be.true
    })

    it('should return true for objects with length property', () => {
      expect(isArrayLike({ length: 0 })).to.be.true
      expect(isArrayLike({ length: 5 })).to.be.true
      expect(isArrayLike({ 0: 'a', 1: 'b', length: 2 })).to.be.true
    })

    it('should return true for array-like with max safe integer length', () => {
      expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER })).to.be.true
    })
  })

  describe('Should return false', () => {
    it('should return false for functions', () => {
      expect(isArrayLike(Function)).to.be.false
      expect(isArrayLike(() => {})).to.be.false
      expect(isArrayLike(function() {})).to.be.false
    })

    it('should return false for null and undefined', () => {
      expect(isArrayLike(null)).to.be.false
      expect(isArrayLike(undefined)).to.be.false
    })

    it('should return false for numbers', () => {
      expect(isArrayLike(42)).to.be.false
      expect(isArrayLike(0)).to.be.false
    })

    it('should return false for booleans', () => {
      expect(isArrayLike(true)).to.be.false
      expect(isArrayLike(false)).to.be.false
    })

    it('should return false for objects with invalid length', () => {
      expect(isArrayLike({ length: -1 })).to.be.false
      expect(isArrayLike({ length: '5' })).to.be.false
      expect(isArrayLike({ length: 3.14 })).to.be.false
      expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER + 1 })).to.be.false
    })

    it('should return false for objects without length', () => {
      expect(isArrayLike({ a: 1, b: 2 })).to.be.false
      expect(isArrayLike({})).to.be.false
    })

    it('should return false for symbols', () => {
      expect(isArrayLike(Symbol('test'))).to.be.false
    })
  })
})