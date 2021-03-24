import { createAnimation } from '@ionic/core';

export const fadeInAnimation = () =>
  createAnimation().duration(300).iterations(1).fromTo('opacity', '0', '1');
