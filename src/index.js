import "./scss/main.scss";

import Button from "./components/atoms/Button";
import Paragraph from "./components/atoms/Paragraph";
import Title from "./components/atoms/Title";
import Wrapper from "./components/atoms/Wrapper";

import ButtonGroup from "./components/molecules/ButtonGroup";

export default {
  install(Vue) {
    Vue.component("Button", Button);
    Vue.component("Paragraph", Paragraph);
    Vue.component("Title", Title);
    Vue.component("Wrapper", Wrapper);
    Vue.component("Buttons", ButtonGroup);
  }
};

export { Button, Paragraph, Title, Wrapper, ButtonGroup };
