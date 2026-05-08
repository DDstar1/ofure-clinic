export const CLINIC = {
  NAME: "Ofure Clinic & Maternity Home",
  SHORT_NAME: "Ofure Clinic",

  /** E.164 digits only — used in tel: and wa.me links */
  PHONE_DIGITS: "2348068251228",
  /** Human-readable phone number */
  PHONE_DISPLAY: "+234 806 825 1228",
  /** Ready-to-use href for <a> tags */
  PHONE_HREF: "tel:+2348068251228",
  /** WhatsApp deep-link */
  WHATSAPP_HREF: "https://wa.me/2348068251228",

  EMAIL: "info@ofureclinic.com.ng",
  EMAIL_APPOINTMENTS: "mosesakhimien@ofureclinic.com.ng",

  SITE_URL: "https://ofureclinic.com.ng",
  SITEMAP_URL: "https://ofureclinic.com.ng/sitemap.xml",

  LOCATION: "Ekpoma, Edo State, Nigeria",

  /**
   * Replace the src value below with the embed URL from:
   * Google Maps → Share → Embed a map → copy the src attribute
   */
  MAPS_EMBED_SRC:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.280780279989!2d6.1377014999999995!3d6.7355605999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104695821f9287b3%3A0xf49a1f8d49b09c2a!2sOfure%20Clinic%20And%20Maternity%20Home!5e0!3m2!1sen!2sng!4v1778235724279!5m2!1sen!2sng",
} as const;
