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
    it('should not handle string numbers', () => {
      expect(() => add('yi', 8)).to.throw(TypeError)
    })

    it('should not handle string numbers', () => {
      expect(() => add(8, 'yi')).to.throw(TypeError)
    })

    it('should not handle string numbers', () => {
      expect(() => add('8', 9)).to.throw(TypeError)
    })

    it('should not handle string numbers', () => {
      expect(() => add(8, '9')).to.throw(TypeError)
    })




  })
})