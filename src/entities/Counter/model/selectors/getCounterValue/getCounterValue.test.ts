import { getCounterValue } from "./getCounterValue";

describe('getCounterValue test', () => {
    test('should return simple value', () => {
        const state = {
            counter: {value: 10},
        };
        expect(getCounterValue(state)).toEqual(10);
    })
})