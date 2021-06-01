import { Joy as EmotionJoy } from './joy'
import { Sadness as EmotionSadness } from './sadness'
import { Fear as EmotionFear } from './fear'
import { Anger as EmotionAnger } from './anger'
import { Surprise as EmotionSurprise} from './surprise'

export const Joy = EmotionJoy.GetInstance()
export const Sadness = EmotionSadness.GetInstance()
export const Fear = EmotionFear.GetInstance()
export const Surprise = EmotionSurprise.GetInstance()
export const Anger = EmotionAnger.GetInstance()
