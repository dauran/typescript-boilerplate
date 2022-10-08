import { helloWorld } from './index'

describe('Test Hello World', () => {
    test('helloWorld', () => expect(helloWorld('world')).toEqual('hello world'))
})
