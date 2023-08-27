import { deepEqual } from 'node:assert'
import { describe, it } from 'node:test'

import { helloWorld } from '@/hello.js'

await describe('Test Hello World', async () => {
    await it('helloWorld', () => {
        const result = helloWorld('world')
        const expected = 'hello world'
        deepEqual(result, expected)
    })
})
