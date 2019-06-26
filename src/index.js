import "./scss/main.scss";

import Button from "./components/atoms/Button";
import Paragraph from "./components/atoms/Paragraph";
import Title from "./components/atoms/Title";
import Wrapper from "./components/atoms/Wrapper";

import Buttons from "./components/molecules/Buttons";

export default {
  install(Vue) {
    Vue.component("Button", Button);
    Vue.component("Paragraph", Paragraph);
    Vue.component("Title", Title);
    Vue.component("Wrapper", Wrapper);
    Vue.component("Buttons", Buttons);
  }
};

export { Button, Paragraph, Title, Wrapper, Buttons };
