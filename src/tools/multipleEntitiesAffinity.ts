import { Affinity, Average } from '@algorithms/base'

type MultipleEntitiesAffinityParameters = {
    entities: {[key:string]: number}[],
    keys: string[],
    maxValueDifference: number
}

export const MultipleEntitiesAffinity = (options:MultipleEntitiesAffinityParameters) => {
    const { entities, keys, maxValueDifference = 2} = options
    let affinity = 0

    // O(n)
    const entityAverage = Average({
        entities: entities,
        keys: keys
    })

    // O(n)
    for(let i = 0; i < entities.length; i++) {
        // O(n^2)
        affinity += Affinity({
            keys: keys,
            entities: [entityAverage, entities[i]],
            maxValueDifference: maxValueDifference
        })
    }    
    return parseFloat(((affinity * 100) / (entities.length * 100)).toFixed(2))
}
