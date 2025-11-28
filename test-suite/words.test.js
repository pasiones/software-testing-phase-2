import { expect } from 'chai'
import words from '../code-to-test/words.js'

describe('words', () => {
  describe('Basic Word Extraction', () => {
    it('should split basic string into words', () => {
      expect(words('fred, barney, & pebbles')).to.deep.equal(['fred', 'barney', 'pebbles'])
    })

    it('should extract single word', () => {
      expect(words('hello')).to.deep.equal(['hello'])
    })

    it('should handle multiple spaces', () => {
      expect(words('hello   world')).to.deep.equal(['hello', 'world'])
    })

    it('should handle empty string', () => {
      expect(words('')).to.deep.equal([])
    })
  })

  describe('Special Characters', () => {
    it('should ignore punctuation', () => {
      expect(words('hello, world!')).to.deep.equal(['hello', 'world'])
    })

    it('should handle hyphens and underscores', () => {
      expect(words('hello-world_test')).to.deep.equal(['hello', 'world', 'test'])
    })

    it('should handle special symbols', () => {
      expect(words('one & two | three')).to.deep.equal(['one', 'two', 'three'])
    })
  })

  describe('CamelCase and Mixed Case', () => {
    it('should split camelCase words', () => {
      const result = words('camelCaseWord')
      expect(result).to.be.an('array')
    })

    it('should split PascalCase words', () => {
      const result = words('PascalCaseWord')
      expect(result).to.be.an('array')
    })
  })

  describe('Numbers', () => {
    it('should extract words with numbers', () => {
      expect(words('test123')).to.deep.equal(['test123'])
    })

    it('should handle mixed alphanumeric', () => {
      expect(words('abc123 def456')).to.deep.equal(['abc123', 'def456'])
    })
  })

  describe('Custom Pattern', () => {
    it('should use custom pattern to match words', () => {
      expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles'])
    })

    it('should handle custom regex pattern', () => {
      expect(words('hello world', /\w+/g)).to.deep.equal(['hello', 'world'])
    })

    it('should return empty array when pattern matches nothing', () => {
      expect(words('hello', /\d+/g)).to.deep.equal([])
    })
  })

  describe('Edge Cases', () => {
    it('should handle undefined string', () => {
      const result = words(undefined)
      expect(result).to.deep.equal([])
    })

    it('should handle string with only spaces', () => {
      expect(words('   ')).to.deep.equal([])
    })

    it('should handle string with only special characters', () => {
      expect(words('!@#$%')).to.deep.equal([])
    })
  })
})