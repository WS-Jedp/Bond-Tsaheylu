import { AffinityAlgorithm } from '../../algorithms/affinityAlgorithm'

describe('Testing the Affinity Algorithms', () => {
    const keys = ['activity','emotional']
    const entities = [
        {
            activity: .2,
            emotional: .2
        },
        {
            activity: .2,
            emotional: .2
        }
    ]
    const result = AffinityAlgorithm({
        keys: keys,
        entities: entities,
        maxValueDifference: 2
    })
    test('The result must be 100', () => {
        expect(result).toBe(100)
    })
    test('The result must be a number type of', () => {
        expect(typeof result).toBe('number')
    })
})

