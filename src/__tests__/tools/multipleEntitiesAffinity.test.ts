import { MultipleEntitiesAffinity } from '../../tools/multipleEntitiesAffinity'

describe("Testing the multiple entities affinity tool", () => {
    const keys:string[] = ['activity', 'emotional']

    test("The affinity should be 100", () => {
        const entities:{[key:string]: number}[] = [{activity: .5, emotional: .5}, {activity: .5, emotional: .5}]
        const affinity = MultipleEntitiesAffinity({entities, keys, maxValueDifference: 2})
        expect(affinity).toBe(100)
    })

    test("The affinity should be lower than 100 but higher than 90", () => {
        const entities:{[key:string]: number}[] = [{activity: .8, emotional: .9}, {activity: .8, emotional: .8}]
        const affinity = MultipleEntitiesAffinity({keys, entities, maxValueDifference: 2})
        expect(affinity).toBeGreaterThan(95)
        expect(affinity).toBeLessThan(100)
    })
})