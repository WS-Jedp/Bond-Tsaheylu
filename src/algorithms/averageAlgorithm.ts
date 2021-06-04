type AverageParametersAlgorithm = {
    keys: string[],
    entities: {[key:string]: number}[]
}
export const averageAlgorithm = (options:AverageParametersAlgorithm) => {
    const { entities, keys } = options
    let averageEntity:{[key:string]: number} = {}
    
    for(let i = 0; i < keys.length; i++) {
        averageEntity = {
            ...averageEntity,
            [keys[i]]: entities.map(entity => entity[keys[i]]).reduce((prev, curr) => prev + curr) / entities.length
        }
    }

    return averageEntity
}