import { helloWorld } from './hello.js'

describe('Test Hello World', () => {
    test('helloWorld', () => expect(helloWorld('world')).toEqual('hello world'))
})
