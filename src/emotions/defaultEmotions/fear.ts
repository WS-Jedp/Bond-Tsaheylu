"use strict"
import { Emotion } from '../base'

export class Fear extends Emotion {
    public static instance: Fear | null
    private constructor() {
        super({
            name: 'Fear',
            hedonismRange: [-1, 0],
            excitementRange: [0, 1],
        })
    }

    public static GetInstance():Fear {
        if(!this.instance) {
            this.instance = new Fear()
        }
        return this.instance
    }
}