import { getCounter } from "./getCounter";

describe('getCounter test', () => {
    test('should return counter value', () => {
        const state = {
            counter: {value: 10},
        };
        expect(getCounter(state)).toEqual({value: 10});
    })
})