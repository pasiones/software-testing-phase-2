import { expect } from 'chai'
import divide from '../code-to-test/divide.js'

describe('divide', () => {
  describe('Basic Division', () => {
    it('should divide two integers', () => {
      expect(divide(5, 1)).to.be.closeTo(5, 0.0001)
    })

    it('should divide two decimals', () => {
      expect(divide(4.8, 2)).to.be.closeTo(2.4, 0.0001)
    })

  })

  describe('Division by Zero', () => {
    it('should return NaN when dividing by zero', () => {
      expect(divide(4, 0)).to.be.NaN
    })

  })


  describe('Invalid Inputs', () => {
    it('should throw TypeError when first argument is a non-numeric string', () => {
      const result = divide('yi', 8)
      expect(result).to.throw(TypeError)
    })

    it('should throw TypeError when second argument is a non-numeric string', () => {
      expect(divide(7, 'yi')).to.throw(TypeError)
    })

    it('should throw TypeError when first argument is a numeric string', () => {
      expect(divide('10', 8)).to.throw(TypeError)
    })

    it('should throw TypeError when second argument is a numeric string', () => {
      expect(divide(9, '8')).to.throw(TypeError)
    })
  })
})