import { averageAlgorithm as Average } from '../../algorithms/averageAlgorithm'

describe("Test for the average algorithm", () => {
    test("The result should be 0.5 in each key", () => {
        const keys:string[] = ["activity", "emotional"]
        const entities:{[key:string]: number}[] = [{activity: 1, emotional: 1}, {activity: 0, emotional: 0}]
        const result = Average({entities, keys})

        expect(parseFloat(result['activity'].toFixed(2))).toBe(0.5)
        expect(parseFloat(result['emotional'].toFixed(2))).toBe(0.5)
    })
})