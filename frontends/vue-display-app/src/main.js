import { createApp } from "vue";
import App from "./App.vue";

// Theming framework
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";

// Global event bus
import mitt from "mitt";
const emitter = mitt();

// Amplify imports
import "@aws-amplify/ui-vue/styles.css";

// Phone number handling
import VueTelInput from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";

const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.config.globalProperties.$appLogo =
  "https://assets.serverlesscoffee.com/images/serverlesspresso-large.png";
app.config.globalProperties.$appName = "Validator";
app.config.globalProperties.$adminApp = true;

app.config.globalProperties.$userPoolId = "us-east-1_asI3QEpp7";
app.config.globalProperties.$userPoolWebClientId = "32dhdaaii7hcidrkdhu8ufii9h";
app.config.globalProperties.$region = "us-east-1";
app.config.globalProperties.$APIGWEndpointConfigService =
  "https://czndvyvbud.execute-api.us-east-1.amazonaws.com/Prod/";
app.config.globalProperties.$APIGWEndpointValidatorService =
  "https://jo5tcyq4v0.execute-api.us-east-1.amazonaws.com/Prod/";
app.config.globalProperties.$ConfigTable = "serverlesspresso-config-table";
app.config.globalProperties.$CoreEventBusName = "Serverlesspresso";
app.config.globalProperties.$IotEndpointAddress =
  "arnl8mn7pfxoi.iot.us-east-1.amazonaws.com";
app.config.globalProperties.$OrderManagerEndpoint =
  "https://f8fy3bvhme.execute-api.us-east-1.amazonaws.com/Prod/";
app.config.globalProperties.$UserPoolID = "us-east-1_asI3QEpp7";



app.use(VueTelInput);
app.use(createVuestic());
app.mount("#app");
