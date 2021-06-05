"use strict"
import { Emotion } from '../base'

export class Joy extends Emotion {
    public static instance: Joy | null
    private constructor() {
        super({
            name: 'Joy',
            hedonismRange: [0, 1],
            excitementRange: [-0.2, .2],
        })
    }

    public static GetInstance():Joy {
        if(!this.instance) {
            this.instance = new Joy()
        }
        return this.instance
    }
}