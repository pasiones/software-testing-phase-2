import { expect } from 'chai'
import add from '../code-to-test/add.js'

describe('add', () => {
  describe('Basic Addition', () => {
    it('should add two integers', () => {
      expect(add(6, 4)).to.equal(10)
    })

    it('should add two decimals', () => {
      expect(add(2.7, 6.389)).to.equal(9.089)
    })
  })

  describe('Invalid input types', () => {
    it('should throw TypeError when first argument is a non-numeric string', () => {
      expect(() => add('yi', 8)).to.throw(TypeError)
    })

    it('should throw TypeError when second argument is a non-numeric string', () => {
      expect(() => add(8, 'yi')).to.throw(TypeError)
    })

    it('should throw TypeError when first argument is a numeric string', () => {
      expect(() => add('8', 9)).to.throw(TypeError)
    })

    it('should throw TypeError when second argument is a numeric string', () => {
      expect(() => add(8, '9')).to.throw(TypeError)
    })




  })
})