import { expect } from 'chai'
import isObjectLike from '../code-to-test/isObjectLike.js'

describe('isObjectLike', () => {
  describe('Should return true', () => {
    it('should return true for plain objects', () => {
      expect(isObjectLike({})).to.be.true
      expect(isObjectLike({ a: 1, b: 2 })).to.be.true
    })

    it('should return true for arrays', () => {
      expect(isObjectLike([])).to.be.true
      expect(isObjectLike([1, 2, 3])).to.be.true
    })

    it('should return true for Date objects', () => {
      expect(isObjectLike(new Date())).to.be.true
    })

    it('should return true for RegExp objects', () => {
      expect(isObjectLike(/abc/)).to.be.true
    })

    it('should return true for Error objects', () => {
      expect(isObjectLike(new Error())).to.be.true
    })
  })

  describe('Should return false', () => {
    it('should return false for null', () => {
      expect(isObjectLike(null)).to.be.false
    })

    it('should return false for undefined', () => {
      expect(isObjectLike(undefined)).to.be.false
    })

    it('should return false for functions', () => {
      expect(isObjectLike(Function)).to.be.false
      expect(isObjectLike(() => {})).to.be.false
    })

    it('should return false for numbers', () => {
      expect(isObjectLike(42)).to.be.false
      expect(isObjectLike(0)).to.be.false
      expect(isObjectLike(-1)).to.be.false
    })

    it('should return false for strings', () => {
      expect(isObjectLike('abc')).to.be.false
      expect(isObjectLike('')).to.be.false
    })

    it('should return false for booleans', () => {
      expect(isObjectLike(true)).to.be.false
      expect(isObjectLike(false)).to.be.false
    })

    it('should return false for symbols', () => {
      expect(isObjectLike(Symbol('test'))).to.be.false
    })
  })
})