import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, f as renderSlot, e as createAstro, b as renderHead } from './astro/server_Cx0qwKoR.mjs';
import { b as $$Layout, $ as $$BaseHead, a as $$Footer } from './Footer_CHQx5qCU.mjs';
import { $ as $$Image } from './_astro_assets_DFMSO8KY.mjs';
/* empty css                           */

const $$GridPatternBackground = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="absolute inset-0 -z-10 h-full w-full bg-base-100"> <div class="absolute inset-0 -z-10 h-full w-full bg-base-100 bg-[linear-gradient(to_right,theme(colors.neutral/5%)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.neutral/5%)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div> </div>`;
}, "D:/github/personal/portfolio-landing/src/components/molecules/backgrounds/GridPatternBackground.astro", void 0);

const $$BannerSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative section"> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} ${renderComponent($$result, "GridPatternBackground", $$GridPatternBackground, {})} </section>`;
}, "D:/github/personal/portfolio-landing/src/components/organisms/sections/BannerSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ScheduleConsultation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="bg-base-100/80 text-center px-4 py-8 md:p-20 backdrop-blur-md z-10 relative w-full grid place-content-center rounded-3xl shadow-lg"> <div class="max-w-2xl"> <h3 class="text-3xl md:text-4xl font-bold mb-2">Free 30min consultation</h3> <p class="mb-10 text-body-color">
Have a new project in mind? Schedule a 30-minute discovery call or fill out the quick form, and together we'll
      explore the possibilities.
</p> <button class="btn btn-primary" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/joelangelocano/30min'});return false;">Schedule a quick call
</button> </div> </div> <!-- Calendly link widget begin --> <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"> <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async><\/script> <!-- Calendly link widget end -->`])), maybeRenderHead());
}, "D:/github/personal/portfolio-landing/src/components/molecules/common/ScheduleConsultation.astro", void 0);

const BannerImage = new Proxy({"src":"/_astro/schedule.BC4PkWSA.jpeg","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/github/personal/portfolio-landing/src/assets/images/schedule.jpeg";
							}
							
							return target[name];
						}
					});

const $$ScheduleConsultationSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-base-300 section relative grid items-center"> <picture class="absolute w-full flex h-full rounded-3xl"> ${renderComponent($$result, "Image", $$Image, { "src": BannerImage, "class": "w-full h-full rounded-2xl object-cover", "alt": "Schedule consultation" })} </picture> ${renderComponent($$result, "Layout", $$Layout, { "class": "section w-full gap-10" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ScheduleConsultation", $$ScheduleConsultation, {})} ` })} </section>`;
}, "D:/github/personal/portfolio-landing/src/components/organisms/sections/ScheduleConsultationSection.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Root = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Root;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body> <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/github/personal/portfolio-landing/src/layouts/Root.astro", void 0);

export { $$BannerSection as $, $$ScheduleConsultationSection as a, $$Root as b };
