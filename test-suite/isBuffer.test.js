import { expect } from 'chai'
import isBuffer from '../code-to-test/isEmpty.js'

describe('isBuffer', () => {
    describe('Environment with Buffer support (Node.js)', () => {
        it('should return true for Buffer instances', function() {
            // Check if Buffer exists in this environment before running assertion
            if (typeof Buffer === 'function') {
                expect(isBuffer(Buffer.alloc(2))).to.be.true
                expect(isBuffer(Buffer.from('test'))).to.be.true
            } else {
                this.skip() // Skip if running in a browser without Buffer polyfill
            }
        })
    })

    describe('Standard Type Checks', () => {
        it('should return false for Uint8Array', () => {
            // This is a key distinction: A Buffer IS a Uint8Array, 
            // but a plain Uint8Array is NOT a Buffer.
            expect(isBuffer(new Uint8Array(2))).to.be.false
        })

        it('should return false for other TypedArrays', () => {
            expect(isBuffer(new Int8Array(2))).to.be.false
            expect(isBuffer(new Float32Array(2))).to.be.false
        })

        it('should return false for plain arrays', () => {
            expect(isBuffer([1, 2, 3])).to.be.false
        })

        it('should return false for strings', () => {
            expect(isBuffer('abc')).to.be.false
        })

        it('should return false for objects', () => {
            expect(isBuffer({ length: 0 })).to.be.false
        })

        it('should return false for null and undefined', () => {
            expect(isBuffer(null)).to.be.false
            expect(isBuffer(undefined)).to.be.false
        })
    })
})