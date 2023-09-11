/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default class Animations {
  constructor() {
    this.scrollTrigger = ScrollTrigger;
    gsap.registerPlugin(this.scrollTrigger);
  }

  createLeftAnimation() {
    const boxes = gsap.utils.toArray('.leftAnimate');
    boxes.forEach((box) => {
      gsap.set(box, { x: '-50px', opacity: 0 });
      const tl = this.#scrollTriggerCreate(box);
      tl.to(box, { x: '0', opacity: 1, duration: 1 });
    });
  }

  createRightAnimation() {
    const boxes = gsap.utils.toArray('.rightAnimation');
    boxes.forEach((box) => {
      gsap.set(box, { x: '50px', opacity: 0 });
      const tl = this.#scrollTriggerCreate(box);
      tl.to(box, { x: '0', opacity: '1', duration: 1 });
    });
  }

  createAnimationBottom() {
    const box = document.querySelector('.animationBottom');
    gsap.set(box, { y: '100px', opacity: 0 });
    const tl = this.#scrollTriggerCreate(box);
    tl.to(box, { y: 0, opacity: 1, duration: 1 });
  }

  #scrollTriggerCreate(box) {
    return gsap.timeline({
      scrollTrigger: {
        trigger: box,
        toggleActions: 'play reset play reset',
      },
    });
  }
}
