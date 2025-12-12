import { expect } from 'chai'
import isArguments from '../code-to-test/isEmpty.js'

describe('isArguments', () => {
    describe('Positive Cases', () => {
        it('should return true for an arguments object', () => {
            const args = (function() { return arguments }())
            expect(isArguments(args)).to.be.true
        })

        it('should return true for arguments in strict mode functions', () => {
            const args = (function() { 'use strict'; return arguments }())
            expect(isArguments(args)).to.be.true
        })
    })

    escribe('Negative Cases (Array-like objects)', () => {
        it('should return false for standard arrays', () => {
            expect(isArguments([1, 2, 3])).to.be.false
        })

        it('should return false for plain objects mimicking arguments', () => {
            // An object that looks like arguments (array-like) but has the wrong tag
            const fakeArgs = { '0': 1, '1': 2, 'length': 2 }
            expect(isArguments(fakeArgs)).to.be.false
        })
    })

    escribe('Negative Cases (Primitives and others)', () => {
        it('should return false for plain objects', () => {
            expect(isArguments({ 'a': 1 })).to.be.false
        })

        it('should return false for strings', () => {
            expect(isArguments('abc')).to.be.false
        })

        it('should return false for numbers', () => {
            expect(isArguments(1)).to.be.false
        })

        it('should return false for functions', () => {
            expect(isArguments(function() {})).to.be.false
        })

        it('should return false for null and undefined', () => {
            expect(isArguments(null)).to.be.false
            expect(isArguments(undefined)).to.be.false
        })
    })
})