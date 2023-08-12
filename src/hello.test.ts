import { describe, it } from 'node:test'
import { deepEqual } from 'node:assert'
import { helloWorld } from './hello.js'

describe('Test Hello World', () => {
    it('helloWorld', () => {
        const result = helloWorld('world')
        const expected = 'hello world'
        deepEqual(result, expected)
    })
})
