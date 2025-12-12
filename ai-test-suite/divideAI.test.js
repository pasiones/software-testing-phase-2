import { expect } from 'chai'
import divide from '../code-to-test/divide.js'

describe('divide', () => {
  describe('Basic Division', () => {
    it('should divide two positive numbers', () => {
      expect(divide(6, 4)).to.be.closeTo(1.5, 0.0001)
    })

    it('should divide two negative numbers', () => {
      expect(divide(-6, -2)).to.equal(3)
    })

    it('should divide a positive by a negative number', () => {
      expect(divide(10, -2)).to.equal(-5)
    })

    it('should divide a negative by a positive number', () => {
      expect(divide(-10, 2)).to.equal(-5)
    })

    it('should return 1 when dividing a number by itself', () => {
      expect(divide(5, 5)).to.equal(1)
    })
  })

  describe('Division by Zero', () => {
    it('should return NaN when dividing by zero', () => {
      expect(divide(10, 0)).to.be.NaN
    })

    it('should return NaN when dividing negative by zero', () => {
      expect(divide(-10, 0)).to.be.NaN
    })

    it('should return NaN when dividing zero by zero', () => {
      expect(divide(0, 0)).to.be.NaN
    })
  })

  describe('Decimal Numbers', () => {
    it('should handle decimal division', () => {
      expect(divide(7.5, 2.5)).to.equal(3)
    })

    it('should handle division resulting in decimals', () => {
      expect(divide(10, 3)).to.be.closeTo(3.333, 0.001)
    })
  })

  describe('Edge Cases', () => {
    it('should handle large numbers', () => {
      expect(divide(1000000, 1000)).to.equal(1000)
    })

    it('should handle very small numbers', () => {
      expect(divide(0.001, 0.01)).to.be.closeTo(0.1, 0.0001)
    })

    it('should handle division by 1', () => {
      expect(divide(42, 1)).to.equal(42)
    })

    it('should handle zero as dividend', () => {
      expect(divide(0, 5)).to.equal(0)
    })
  })

  describe('Invalid Inputs', () => {
    it('should handle undefined values', () => {
      const result = divide(undefined, 5)
      expect(result).to.be.NaN
    })

    it('should handle null values', () => {
      expect(divide(null, 5)).to.equal(0)
    })

    it('should handle string numbers', () => {
      expect(divide('10', '2')).to.equal(5)
    })
  })
})