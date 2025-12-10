import { expect } from 'chai'
import upperFirst from '../code-to-test/upperFirst.js'

describe('upperFirst', () => {
    describe('basic functionality', () =>{
        it('should convert the first character to uppercase', () =>{
            expect(upperFirst('fred')).to.equal('Fred')
        })

        it('should leave already uppercase strings unchanged', () => {
            expect(upperFirst('FRED')).to.equal('FRED')
        })

        it('should only affect the first character', () => {
            expect(upperFirst('hello world')).to.equal('Hello world')
        })

        it('should handle mixed case strings', () => {
            expect(upperFirst('fRED')).to.equal('FRED')
            expect(upperFirst('hElLo')).to.equal('HElLo')
        })
    })

    describe('empty and whitespace strings', () => {
        it('should return an empty string for an an empty input', () => {
            expect(upperFirst('')).to.equal('')
        })

        it('should handle strings with leading spaces', () => {
            expect(upperFirst(' fred')).to.equal(' fred')
        })

        it('should handle strings with only spaces', () => {
            expect(upperFirst('  ')).to.equal('  ')
        })

        it('should handle strings with trailing space', () => {
            expect(upperFirst('fred ')).to.equal('Fred ')
        })
    })

    describe('single character strings', () => {
        it('should uppercase a single lowercase character', () => {
            expect(upperFirst('a')).to.equal('A')
        })

        it('should leave a single uppercase character unchanged', () => {
            expect(upperFirst('Z')).to.equal('Z')
        })
    })

    describe('special characters and numbers', () => {
        it('should leave numbers at the start of the string unchanged', () => {
            expect(upperFirst('123fred')).to.equal('123fred')
        })

        it('should leave special characters at the start unchanged', () => {
            expect(upperFirst('--foo')).to.equal('--foo')
            expect(upperFirst('!wow')).to.equal('!wow')
        })

    })

    describe('edge cases and non-string inputs', () => {
        it('should return an empty string for undefined', () => {
            expect(upperFirst(undefined)).to.equal('')
        })

        it('should return an empty string for null', () => {
            expect(upperFirst(null)).to.equal('')
        })

        it('should coerce numbers to strings and process them', () => {
            expect(upperFirst(123)).to.equal('123')
        })
        
        it('should handle boolean values by converting to string', () => {
             expect(upperFirst(true)).to.equal('True')
             expect(upperFirst(false)).to.equal('False')
        })
    })
})