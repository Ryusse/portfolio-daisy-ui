import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fromLeft = (dataElement: string, duration: number = 1, stagger: number = 1) => {
  gsap.utils.toArray(dataElement).forEach((item: HTMLElement) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration,
        delay: 0.3,
        stagger: stagger,
        scrollTrigger: item,
        once: true,
        ease: "cubic-bezier(.435, .250, .150, .965)",
      },
    );
  });
};

export const fadeUpOnce = (dataElement: string, duration: number = 1, stagger: number = 1) => {
  gsap.utils.toArray(dataElement).forEach((item: HTMLElement) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: 1,
        stagger: stagger,
        scrollTrigger: item,
        once: true,
        ease: "cubic-bezier(.435, .250, .150, .965)",
      },
    );
  });
};

export const fadeUp = (dataElement: string) => {
  gsap.from(dataElement, { opacity: 0, y: 100, stagger: 0.6, scrollTrigger: dataElement });
};
