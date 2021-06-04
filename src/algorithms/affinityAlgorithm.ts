
type AffinityAlgorithmParams = {
    keys: string[],
    entities: { [key:string]: number }[],
    maxValueDifference: number
}

// O(n^2)
export const AffinityAlgorithm = (options:AffinityAlgorithmParams) => {
    const { entities, keys, maxValueDifference } = options
    let comparedKeys: {[key: string]: number} = {} 
    let difference:number 
    let affinity:number

    for(let i = 0; i < keys.length; i++) {
        comparedKeys = {
            ...comparedKeys,
            [keys[i]]: Math.abs(
                entities.map(entity => entity[keys[i]]).reduce((prev, curr) => prev - curr) 
            )
        }
    }

    difference = Object.values(comparedKeys).reduce((prev, curr) => prev + curr)

    if(difference === 0 ) {
        affinity = ((100 * maxValueDifference) / maxValueDifference)
    } else {
        affinity = 100 - ((100 * difference) / maxValueDifference)
    }

    return parseFloat(affinity.toFixed(2))
}
