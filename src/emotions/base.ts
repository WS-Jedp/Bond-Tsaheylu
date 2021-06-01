"use strict"

/**
 * @example {hedonism: .9, excitment: .6, intensity: .3, controlLevel: .4, novelty: .4} - Note that all the parameters are greater than or equal to 0 and lower than or equal to one.
 */
export type EmotionParameters = {
    name: string;
    hedonismRange: [number, number];
    excitementRange: [number, number];
}

export type EmotionRanges = {
    hedonismRange: [number, number];
    excitementRange: [number, number]
}

/**
 * @class Emotion
 * @abstract Emotion - Must be extended by each virtual represenation of an emotion. 
 * 
 * @description The Emotion class is the base virtual representation of our emotions. All emotions must be extends by all emotion class.
 */
abstract class Emotion {

    
    protected name:string // Define the name of the Emotion
    protected hedonismRange:[number, number]  // Define the range of the hedonism that can have the emotion (-1, 1)
    protected excitementRange:[number, number] // Define the range of the excitement that can have the emotion (-1, 1)

    /**
     * Creates a new instance of the class emotion
     * 
     * @param emotionParameters Object with all the parameters needed to create a Emotion and the effect that can have in an dynamic entity
     * 
     * @returns {Emotion} Get a new instance of a virtual emotion
     */
    constructor(emotionParameters:EmotionParameters) {
        const { excitementRange, hedonismRange, name } = emotionParameters

        this.name = name
        this.hedonismRange = hedonismRange
        this.excitementRange = excitementRange

    }

    /**
     * Know the value range that must have an emotion to be the referenced Emotion  
     * 
     * @returns {EmotionRanges} Object with the two values range to identify the emotion 
     */
    public GetRanges():EmotionRanges {
        return {
            hedonismRange: this.hedonismRange, 
            excitementRange: this.excitementRange, 
        }
    }
}

export {
    Emotion
}