import { expect } from 'chai'
import isEmpty from '../code-to-test/isEmpty.js'

describe('isEmpty', () => {
    describe('Null and Undefined', () => {
        it('should return true for null', () => {
            expect(isEmpty(null)).to.be.true
        })

        it('should return true for undefined', () => {
            expect(isEmpty(undefined)).to.be.true
        })
    })

    describe('Booleans and Numbers', () => {
        it('should return true for booleans', () => {
            expect(isEmpty(true)).to.be.true
            expect(isEmpty(false)).to.be.true
        })

        it('should return true for numbers (including 0)', () => {
            expect(isEmpty(0)).to.be.true
            expect(isEmpty(1)).to.be.true
            expect(isEmpty(NaN)).to.be.true
        })

        it('should return true for symbols', () => {
            expect(isEmpty(Symbol('a'))).to.be.true
        })
    })

    describe('Strings', () => {
        it('should return true for empty strings', () => {
            expect(isEmpty('')).to.be.true
        })

        it('should return false for non-empty strings', () => {
            expect(isEmpty('abc')).to.be.false
        })
    })

    describe('Arrays and Array-likes', () => {
        it('should return true for empty arrays', () => {
            expect(isEmpty([])).to.be.true
        })

        it('should return false for non-empty arrays', () => {
            expect(isEmpty([1, 2, 3])).to.be.false
        })

        it('should handle arguments objects', () => {
            function testArgs() { return arguments }
            expect(isEmpty(testArgs())).to.be.true
            expect(isEmpty(testArgs(1, 2, 3))).to.be.false
        })

        it('should handle jQuery-like collections', () => {
            const emptyJQuery = { length: 0, splice: () => {} }
            const fullJQuery = { length: 1, splice: () => {}, 0: 'element' }
            
            expect(isEmpty(emptyJQuery)).to.be.true
            expect(isEmpty(fullJQuery)).to.be.false
        })
    })

    describe('TypedArrays and Buffers', () => {
        it('should return true for empty TypedArrays', () => {
            expect(isEmpty(new Uint8Array(0))).to.be.true
            expect(isEmpty(new Float32Array(0))).to.be.true
        })

        it('should return false for non-empty TypedArrays', () => {
            expect(isEmpty(new Uint8Array([1]))).to.be.false
        })

        if (typeof Buffer !== 'undefined') {
            it('should handle Buffers', () => {
                expect(isEmpty(Buffer.alloc(0))).to.be.true
                expect(isEmpty(Buffer.alloc(1))).to.be.false
            })
        }
    })

    describe('Maps and Sets', () => {
        it('should return true for empty Maps', () => {
            const map = new Map()
            expect(isEmpty(map)).to.be.true
        })

        it('should return false for non-empty Maps', () => {
            const map = new Map()
            map.set('a', 1)
            expect(isEmpty(map)).to.be.false
        })

        it('should return true for empty Sets', () => {
            const set = new Set()
            expect(isEmpty(set)).to.be.true
        })

        it('should return false for non-empty Sets', () => {
            const set = new Set()
            set.add(1)
            expect(isEmpty(set)).to.be.false
        })
    })

    describe('Objects', () => {
        it('should return true for empty plain objects', () => {
            expect(isEmpty({})).to.be.true
        })

        it('should return false for objects with own properties', () => {
            expect(isEmpty({ 'a': 1 })).to.be.false
        })

        it('should return true for objects with only inherited properties', () => {
            const proto = { a: 1 }
            const obj = Object.create(proto)
            expect(isEmpty(obj)).to.be.true
        })

        it('should return true for prototype objects', () => {
            expect(isEmpty(Object.prototype)).to.be.true
        })
    })
})

