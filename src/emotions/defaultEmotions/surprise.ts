"use strict"
import { Emotion } from '@emotions/base'

export class Surprise extends Emotion {
    public static instance: Surprise | null
    private constructor() {
        super({
            name: 'Surprise',
            hedonismRange: [-0.1, 0.1],
            excitementRange: [0, 1],
        })
    }

    public static GetInstance():Surprise {
        if(!this.instance) {
            this.instance = new Surprise()
        }
        return this.instance
    }
}