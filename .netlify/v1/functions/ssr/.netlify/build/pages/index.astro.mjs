/* empty css                                  */
import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, s as spreadAttributes, F as Fragment } from '../chunks/astro/server_Cx0qwKoR.mjs';
import { c as $$Icon, b as $$Layout } from '../chunks/Footer_CHQx5qCU.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DFMSO8KY.mjs';
import { s as socialLinks, c as ctaLinks, f as featuredWork, b as services } from '../chunks/consts_8dWJOc48.mjs';
import { $ as $$BannerSection, a as $$ScheduleConsultationSection, b as $$Root } from '../chunks/Root_Yjb6EKGy.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://example.com");
const $$CtaCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CtaCard;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(data.href, "href")} class="px-5 btn h-fit text-start transition-all duration-400 ease-in-out hover:lg:-translate-y-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center py-4 border-neutral/20 border rounded-lg w-full"> <div> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-xl", "name": data.icon })} </div> <div class="grid gap-0.5"> <h2 class="text-xl font-semibold">${data.title}</h2> <p class="font-normal text-base text-body-color">${data.text}</p> </div> <div> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-xl", "name": "angle-right" })} </div> </a>`;
}, "D:/github/personal/portfolio-landing/src/components/molecules/cards/CtaCard.astro", void 0);

const Me = new Proxy({"src":"/_astro/me.C8nfGp6_.jpg","width":497,"height":498,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/github/personal/portfolio-landing/src/assets/images/me.jpg";
							}
							
							return target[name];
						}
					});

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 max-w-3xl mx-auto"> <picture class="w-fit mx-auto"> ${renderComponent($$result, "Image", $$Image, { "src": Me, "class": "rounded-full aspect-square", "alt": "Me", "width": 200, "height": 200 })} </picture> <div class="grid gap-4"> <h1 class="title text-center">I’m Joel Ocaño, UI/UX designer and frontend developer</h1> <p class="text-center text-xl">
I design products with purpose and meticulous attention to detail. Aviable for work.
</p> </div> <div class="flex items-center justify-center flex-wrap gap-4"> ${socialLinks && socialLinks.map((link) => renderTemplate`<div class="lg:tooltip"${addAttribute(link.label, "data-tip")}> <a${addAttribute(link.href, "href")} class="btn btn-square text-2xl btn-circle"> ${renderComponent($$result, "Icon", $$Icon, { "name": link.icon })} </a> </div>`)} </div> </div>`;
}, "D:/github/personal/portfolio-landing/src/components/molecules/common/Profile.astro", void 0);

const $$AboutContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-16"> ${renderComponent($$result, "Profile", $$Profile, {})} <div class="grid lg:grid-cols-3 gap-8"> ${ctaLinks && ctaLinks.map((cta) => renderTemplate`${renderComponent($$result, "CtaCard", $$CtaCard, { "data": cta })}`)} </div> </div>`;
}, "D:/github/personal/portfolio-landing/src/components/molecules/common/AboutContent.astro", void 0);

const $$CtaSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "id": "contact", "class": "section" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-xl mx-auto grid justify-center gap-8"> <h6 class="text-2xl text-center font-semibold uppercase">¿Tienes un proyecto en mente?, Hablemos</h6> <div class="grid gap-4 justify-center"> <a href="/contact" class="btn btn-primary w-fit mx-auto">Habla conmigo</a> <p> <span class="text-body-color">Mi hora local:</span> <span id="datetime" class="text-center font-semibold"></span> </p> </div> </div> ` })} `;
}, "D:/github/personal/portfolio-landing/src/components/organisms/sections/CtaSection.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$Divider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Divider;
  const {
    orientation = "horizontal",
    class: className,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "shrink-0 divider",
    { "h-[1px] w-full": orientation === "horizontal" },
    { "h-full w-[1px]": orientation === "vertical" },
    className
  ], "class:list")}${spreadAttributes(props)}></div>`;
}, "D:/github/personal/portfolio-landing/src/components/atoms/Divider.astro", void 0);

const Wiestate = new Proxy({"src":"/_astro/wiestate.CZGvzjEX.webp","width":801,"height":801,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/github/personal/portfolio-landing/src/assets/images/wiestate.webp";
							}
							
							return target[name];
						}
					});

const $$WorkExperienceCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid items-center grid-cols-[auto_1fr] gap-4"> <div class="w-14 h-14 bg-base-content/10 rounded-lg"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-lg", "src": Wiestate, "width": "56", "height": 56, "alt": "Wiestate logo", "format": "webp" })} </div> <div class="grid mb-1"> <p class="text-xl font-semibold">Product design at Uber</p> <p class="text-body-color">February 2018 - February 2020</p> </div> </div>`;
}, "D:/github/personal/portfolio-landing/src/components/molecules/cards/WorkExperienceCard.astro", void 0);

const $$ExperienceSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-base-200 section"> ${renderComponent($$result, "Layout", $$Layout, { "tag": "div", "class": "grid gap-10 md:gap-20 md:grid-cols-2" }, { "default": ($$result2) => renderTemplate` <h2 class="text-2xl font-semibold uppercase">WORKING EXPERIENCE</h2> <div class="flex flex-col"> ${renderComponent($$result2, "WorkExperienceCard", $$WorkExperienceCard, {})} ${renderComponent($$result2, "Divider", $$Divider, { "class": "my-8" })} ${renderComponent($$result2, "WorkExperienceCard", $$WorkExperienceCard, {})} ${renderComponent($$result2, "Divider", $$Divider, { "class": "my-8" })} ${renderComponent($$result2, "WorkExperienceCard", $$WorkExperienceCard, {})} </div> ` })} </section>`;
}, "D:/github/personal/portfolio-landing/src/components/organisms/sections/ExperienceSection.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(data.href, "href")} class="grid btn text-base text-start leading-normal h-fit w-fit gap-8 p-5 md:p-7 bg-base-100 rounded-3xl"> <picture> ${renderComponent($$result, "Image", $$Image, { "class": "aspect-video w-full rounded-2xl", "src": data.image, "alt": data.title })} </picture> <div class="grid gap-4"> <div class="flex flex-wrap gap-2"> ${data.tags && data.tags.length > 0 && data.tags.map((tag) => renderTemplate`<div class="badge badge-neutral"> <p>${tag}</p> </div>`)} </div> <div class="grid gap-3"> <h6 class="text-3xl">${data.title}</h6> <div class="grid gap-1.5"> <p class="text-xl">${data.subtitle}</p> <p class="text-body-color">${data.date}</p> </div> </div> <p class="font-normal text-body-color"> ${data.description} </p> </div> </a>`;
}, "D:/github/personal/portfolio-landing/src/components/molecules/cards/ProjectCard.astro", void 0);

const $$FeaturedWorkSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-base-200 grid gap-12 section overflow-x-hidden" id="projects" data-astro-cid-csfkyn3a> ${renderComponent($$result, "Layout", $$Layout, { "class": "grid gap-12", "data-astro-cid-csfkyn3a": true }, { "default": ($$result2) => renderTemplate` <div class="grid md:grid-cols-2 gap-10" data-astro-cid-csfkyn3a> <h5 class="text-2xl font-semibold uppercase" data-astro-cid-csfkyn3a>Featured work</h5> <a href="#" class="btn hidden md:flex w-fit justify-self-end btn-primary" data-astro-cid-csfkyn3a>See all my work</a> </div> ` })} <div class="embla px-4 rounded-2xl lg:px-0 grid gap-10" data-astro-cid-csfkyn3a> <div class="embla__viewport rounded-3xl" data-astro-cid-csfkyn3a> <div class="embla__container" data-astro-cid-csfkyn3a> ${featuredWork && featuredWork.map((project) => renderTemplate`<div class="embla__slide" data-astro-cid-csfkyn3a> <div class="embla__slide__number" data-astro-cid-csfkyn3a> ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "data": project, "data-astro-cid-csfkyn3a": true })} </div> </div>`)} </div> </div> <div class="grid mx-auto w-fit gap-5 grid-cols-2" data-astro-cid-csfkyn3a> <button class="btn btn-square btn-outline embla__button--prev" type="button" disabled="" data-astro-cid-csfkyn3a> ${renderComponent($$result, "Icon", $$Icon, { "name": "prev", "data-astro-cid-csfkyn3a": true })} </button> <button class="btn btn-square btn-outline embla__button--next" type="button" disabled="" data-astro-cid-csfkyn3a> ${renderComponent($$result, "Icon", $$Icon, { "name": "next", "data-astro-cid-csfkyn3a": true })} </button> </div> </div> <a href="#" class="btn md:hidden w-fit mx-auto btn-primary" data-astro-cid-csfkyn3a>See all my work</a> </section>  `;
}, "D:/github/personal/portfolio-landing/src/components/organisms/sections/FeaturedWorkSection.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid w-full h-fit group gap-7 md:gap-16 items-center md:grid-cols-[1fr_auto] transition-all ease-in-out"> <div class="grid gap-7"> <div class="bg-base-300 p-3 grid place-content-center w-11 h-11 rounded-full"> ${renderComponent($$result, "Icon", $$Icon, { "name": data.icon, "class": "text-xl" })} </div> <div class="grid gap-2 max-w-[700px]"> <h4 class="text-3xl font-semibold">${data.title}</h4> <p class="text-body-color"> ${data.description} </p> </div> <a href="#" class="btn w-fit btn-primary">View all work</a> </div> <picture class="block lg:group-hover:opacity-100 lg:opacity-0 transition-all duration-700 ease-in-out"> ${renderComponent($$result, "Image", $$Image, { "src": data.image, "alt": data.title, "class": "aspect-video w-full md:aspect-square rounded-3xl", "width": 300, "height": 272 })} </picture> </div>`;
}, "D:/github/personal/portfolio-landing/src/components/molecules/cards/ServiceCard.astro", void 0);

const $$ServicesSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "id": "services", "class": "grid gap-12 section" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="text-2xl font-semibold uppercase">I CAN HELP YOU WITH</h3> <div> ${services && services.map((service, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ServiceCard", $$ServiceCard, { "data": service })} ${index !== services.length - 1 && renderTemplate`${renderComponent($$result3, "Divider", $$Divider, { "class": "my-10" })}`}` })}`)} </div> ` })}`;
}, "D:/github/personal/portfolio-landing/src/components/organisms/sections/ServicesSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Root", $$Root, { "title": "Home", "description": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AboutContent", $$AboutContent, {})} ` })} ${renderComponent($$result2, "ExperienceSection", $$ExperienceSection, {})} ${renderComponent($$result2, "ServicesSection", $$ServicesSection, {})} ${renderComponent($$result2, "FeaturedWorkSection", $$FeaturedWorkSection, {})} ${renderComponent($$result2, "CtaSection", $$CtaSection, {})} ${renderComponent($$result2, "ScheduleConsultationSection", $$ScheduleConsultationSection, {})} ` })}`;
}, "D:/github/personal/portfolio-landing/src/pages/index.astro", void 0);

const $$file = "D:/github/personal/portfolio-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
