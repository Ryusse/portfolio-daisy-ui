import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fromLeft = (dataElement: string, duration: number = 1, stagger: number = 1) => {
  if (dataElement) {
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
          ease: "cubic-bezier(.435, .250, .150, .965)",
        },
      );
    });
  }
};

export const fromRight = (dataElement: string, duration: number = 1, stagger: number = 1) => {
  if (dataElement) {
    gsap.utils.toArray(dataElement).forEach((item: HTMLElement) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: duration,
          delay: 0.3,
          stagger: stagger,
          scrollTrigger: item,
          ease: "cubic-bezier(.435, .250, .150, .965)",
        },
      );
    });
  }
};

export const fadeUpOnce = (
  dataElement: string,
  y: number = 100,
  delay: number = 0.8,
  duration: number = 0.8,
  stagger: number = 0.8,
) => {
  if (dataElement) {
    gsap.utils.toArray(dataElement).forEach((item: HTMLElement) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: y,
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          stagger: stagger,
          scrollTrigger: item,
          ease: "cubic-bezier(.435, .250, .150, .965)",
        },
      );
    });
  }
};

export const fadeUp = (dataElement: string) => {
  if (dataElement) {
    console.log("dataElement", dataElement);
    gsap.from(dataElement, { opacity: 0, y: 100, stagger: 0.6, scrollTrigger: dataElement });
  }
};

export const scaleUp = (dataElement: string) => {
  if (dataElement) {
    gsap.utils.toArray(dataElement).forEach((item: HTMLElement) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          delay: 0.6,
          stagger: 0.8,
          scrollTrigger: item,
          ease: "cubic-bezier(.435, .250, .150, .965)",
        },
      );
    });
  }
};
