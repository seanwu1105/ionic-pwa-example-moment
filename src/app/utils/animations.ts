import { createAnimation } from '@ionic/core';

export const fadeInAnimation = (duration = 300) =>
  createAnimation()
    .duration(duration)
    .iterations(1)
    .fromTo('opacity', '0', '1');
