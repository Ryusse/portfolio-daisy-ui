/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_Cx0qwKoR.mjs';
import { $ as $$BannerSection, a as $$ScheduleConsultationSection, b as $$Root } from '../chunks/Root_Yjb6EKGy.mjs';
import { b as $$Layout } from '../chunks/Footer_CHQx5qCU.mjs';
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const apiKey = "5866a89d-1d03-47dc-867d-97942d85fc58";
  return renderTemplate`${maybeRenderHead()}<form method="POST" id="form" class="grid gap-4 w-full mx-auto"> <div id="result" class="alert hidden w-full transition-all ease-in-out"></div> <div class="grid md:grid-cols-2 gap-4"> <div class="form-control"> <input type="text" id="firstName" name="firstName" class="input input-bordered w-full input-md" placeholder="Ingresa tus nombres"> </div> <div class="form-control"> <input type="text" id="lastName" name="lastName" class="input input-bordered w-full input-md" placeholder="Ingresa tus apellidos"> </div> </div> <div class="form-control"> <input type="text" id="company" name="company" class="input input-bordered w-full input-md" placeholder="Ingresa el nombre de tu compañia"> </div> <div class="form-control"> <input type="text" id="email" name="email" class="input input-bordered w-full input-md" placeholder="Ingresa tu correo electrónico"> </div> <div class="form-control"> <textarea id="message" name="message" class="textarea w-full textarea-md textarea-bordered" placeholder="Ingresa tu mensaje"></textarea> </div> <input type="hidden" name="subject" value="Alguien solicita tus servicios"> <input type="hidden" name="from_name" value="Portfolio"> <input type="hidden" name="access_key"${addAttribute(apiKey, "value")}> <input type="checkbox" name="botcheck" class="hidden" style="display: none;"> <div class="h-captcha" data-captcha="true"></div> <button type="submit" class="btn btn-primary" id="submit-button"> Enviar formulario </button> </form> `;
}, "D:/github/personal/portfolio-landing/src/components/molecules/forms/ContactForm.astro", void 0);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="section bg-base-200"> ${renderComponent($$result, "Layout", $$Layout, { "class": "grid lg:grid-cols-2 items-start gap-20" }, { "default": ($$result2) => renderTemplate` <div class="grid gap-5"> <h2 class="subtitle">Starting a new project? Get in touch and let’s talk all about it</h2> <p class="text-body-color text-xl">
Call, email, meet or video call us - however you’d prefer to work I would love to hear from you
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ` })} </section>`;
}, "D:/github/personal/portfolio-landing/src/components/organisms/sections/ContactSection.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Root", $$Root, { "title": "Contacto", "description": "Cont\xE1ctame" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid gap-5"> <h1 class="title text-center">Contact me</h1> </div> ` })} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ${renderComponent($$result2, "ScheduleConsultationSection", $$ScheduleConsultationSection, {})} ` })}`;
}, "D:/github/personal/portfolio-landing/src/pages/contact.astro", void 0);

const $$file = "D:/github/personal/portfolio-landing/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
