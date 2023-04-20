import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faPlus,
  faTrashCan,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const pinia = createPinia();

library.add(faUserSecret, faPlus, faTrashCan, faCheck, faXmark);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(pinia)
  .mount("#app");
