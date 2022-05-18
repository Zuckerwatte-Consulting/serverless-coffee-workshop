<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

import { Amplify } from "aws-amplify";
import ComponentWrapper from "./components/ComponentWrapper.vue";

Amplify.configure({
  Auth: {
    region: "us-east-1",
    identityPoolRegion: "us-east-1",
    userPoolId: "us-east-1_asI3QEpp7",
    userPoolWebClientId: "32dhdaaii7hcidrkdhu8ufii9h",
    mandatorySignIn: false,
  },
});
</script>

<template>
  <div>
    <authenticator :login-mechanisms="['email']">
      <ComponentWrapper />
    </authenticator>
  </div>
</template>
