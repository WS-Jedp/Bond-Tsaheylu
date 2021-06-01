"use strict"
import { Emotion } from '@emotions/base'

export class Sadness extends Emotion {
    public static instance: Sadness | null
    private constructor() {
        super({
            name: 'Sadness',
            hedonismRange: [-1, 0],
            excitementRange: [-1, 0],
        })
    }

    public static GetInstance():Sadness {
        if(!this.instance) {
            this.instance = new Sadness()
        }
        return this.instance
    }
}