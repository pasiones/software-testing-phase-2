import { expect } from 'chai'
import add from '../code-to-test/add.js'

describe('add', () => {
  describe('Basic Addition', () => {
    it('should add two positive numbers', () => {
      expect(add(6, 4)).to.equal(10)
    })  

    it('should add two negative numbers', () => {
      expect(add(-5, -3)).to.equal(-8)
    })

    it('should add a positive and a negative number', () => {
      expect(add(10, -3)).to.equal(7)
    })

    it('should add zero to a number', () => {
      expect(add(5, 0)).to.equal(5)
      expect(add(0, 5)).to.equal(5)
    })

    it('should add two zeros', () => {
      expect(add(0, 0)).to.equal(0)
    })
  })

  describe('Decimal Numbers', () => {
    it('should add decimal numbers', () => {
      expect(add(1.5, 2.3)).to.be.closeTo(3.8, 0.0001)
    })

    it('should add negative decimal numbers', () => {
      expect(add(-1.5, -2.3)).to.be.closeTo(-3.8, 0.0001)
    })
  })

  describe('Edge Cases', () => {
    it('should handle large numbers', () => {
      expect(add(1000000, 2000000)).to.equal(3000000)
    })

    it('should handle very small decimal numbers', () => {
      expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001)
    })
  })

  describe('Invalid Inputs', () => {
    it('should handle undefined as augend', () => {
      const result = add(undefined, 5)
      expect(result).to.be.NaN
    })

    it('should handle undefined as addend', () => {
      const result = add(5, undefined)
      expect(result).to.be.NaN
    })

    it('should handle null values', () => {
      expect(add(null, 5)).to.equal(5)
      expect(add(5, null)).to.equal(5)
    })

    it('should handle string numbers', () => {
      expect(() => add('5', '3')).to.throw(TypeError)
    })
  })
})