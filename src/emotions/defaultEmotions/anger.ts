"use strict"
import { Emotion } from '../base'

export class Anger extends Emotion {
    public static instance: Anger | null
    private constructor() {
        super({
            name: 'Anger',
            hedonismRange: [0, 0.1],
            excitementRange: [0, 1]
        })
    }

    public static GetInstance():Anger {
        if(!this.instance) {
            this.instance = new Anger()
        }
        return this.instance
    }
}