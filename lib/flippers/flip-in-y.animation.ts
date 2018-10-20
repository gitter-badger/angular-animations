import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const flipInY = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, easing: 'ease-in', offset: 0  }),
      style({transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: 0.5, easing: 'ease-in', offset: 0.4  }),
      style({transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: 1, easing: 'ease-in', offset: 0.6  }),
      style({transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', easing: 'ease', offset: 0.8  }),
      style({transform: 'perspective(400px)', easing: 'ease', offset: 1  }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function flipInYAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'flipInY', [
    transition(
      '0 <=> 1',
      [
        style({  'backface-visibility': 'visible' }),
        useAnimation(flipInY, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })]
    )
  ]);
}
