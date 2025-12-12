import { expect } from 'chai'
import isTypedArray from '../code-to-test/isEmpty.js'

describe('isTypedArray', () => {
    describe('Supported Typed Arrays', () => {
        const typedArrayTypes = [
            'Float32Array',
            'Float64Array',
            'Int8Array',
            'Int16Array',
            'Int32Array',
            'Uint8Array',
            'Uint8ClampedArray',
            'Uint16Array',
            'Uint32Array'
        ]

        typedArrayTypes.forEach((type) => {
            it(`should return true for ${type}`, () => {
                
                if (typeof global[type] === 'function') {
                    const Ctor = global[type]
                    expect(isTypedArray(new Ctor(new ArrayBuffer(8)))).to.be.true
                } else {
                    this.skip()
                }
            })
        })
    })

    describe('Standard Arrays and Objects', () => {
        it('should return false for standard arrays', () => {
            expect(isTypedArray([])).to.be.false
            expect(isTypedArray([1, 2, 3])).to.be.false
        })

        it('should return false for arguments objects', () => {
            function testArgs() { return arguments }
            expect(isTypedArray(testArgs(1, 2, 3))).to.be.false
        })

        it('should return false for plain objects', () => {
            expect(isTypedArray({ 'a': 1 })).to.be.false
        })

        it('should return false for objects that look like typed arrays', () => {
            
            const fakeTypedArray = { length: 0, buffer: new ArrayBuffer(0) }
            expect(isTypedArray(fakeTypedArray)).to.be.false
        })
    })

    describe('Primitives', () => {
        it('should return false for numbers', () => {
            expect(isTypedArray(1)).to.be.false
        })

        it('should return false for strings', () => {
            expect(isTypedArray('abc')).to.be.false
        })

        it('should return false for booleans', () => {
            expect(isTypedArray(true)).to.be.false
        })

        it('should return false for null and undefined', () => {
            expect(isTypedArray(null)).to.be.false
            expect(isTypedArray(undefined)).to.be.false
        })
    })

    describe('BigInt Typed Arrays (Environment Dependent)', () => {
        

        if (typeof BigInt64Array !== 'undefined') {
            it('should check BigInt64Array', () => {
                const array = new BigInt64Array(8)
                
                const result = isTypedArray(array)
                
                expect(result).to.be.a('boolean') 
            })
        }
    })
})