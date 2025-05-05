/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.min.css";
import "vuetify/styles";
import "../styles/settings.scss";

// Composables
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import { createVuetify } from "vuetify";
import { fa } from "vuetify/lib/iconsets/fa";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
});
