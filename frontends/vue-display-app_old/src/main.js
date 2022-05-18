/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */

'use strict'

import { createApp } from 'vue'
import App from './App.vue'

// Theming framework
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'

// Global event bus
import mitt from 'mitt'
const emitter = mitt()

// Amplify imports
import Amplify from 'aws-amplify'

// Phone number handling
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

const app = createApp(App).use(  VuesticPlugin,{
  components: {
    VaChip: {
      outline: true,
      rounded: false,
      size: 'large',
      color: '#000'
    },
    VaCard:{
      stripe: false,
      stripeColor:"black",
      square: false
    },
    VaButton:{
      color:"#08c18a"
    },

    VaButtoGroup:{
      color:"#08c18a"
    }
  },
}).use(VueTelInput)
app.config.globalProperties.emitter = emitter

/* ===================================================
                      CONFIGURATION
    You must add your own values here! See the tutorial
    in the GitHub repo for more information. @jbesw
   =================================================== */

app.config.globalProperties.$appLogo = 'https://assets.serverlesscoffee.com/images/serverlesspresso-large.png'

// ** Backend config **
app.config.globalProperties.$appName = 'Validator'
app.config.globalProperties.$adminApp = true

// set config manually
app.config.globalProperties.$APIurl = UIstate.APIurl || ''
app.config.globalProperties.$ordersAPIurl = 'https://f8fy3bvhme.execute-api.us-east-1.amazonaws.com/Prod/'
app.config.globalProperties.$APIconfigURL = 'https://czndvyvbud.execute-api.us-east-1.amazonaws.com/Prod/'
app.config.globalProperties.$ConfigEndpoint = 'https://czndvyvbud.execute-api.us-east-1.amazonaws.com/Prod/'


// -- Amplify Auth
app.config.globalProperties.$region = 'us-east-1'
app.config.globalProperties.$userPoolId = 'us-east-1_asI3QEpp7'
app.config.globalProperties.$userPoolWebClientId = '32dhdaaii7hcidrkdhu8ufii9h'

try {
  Amplify.configure({
    Auth: {
      region: this.$region,
      identityPoolRegion: this.$region,
      userPoolId: this.$userPoolId,
      userPoolWebClientId: this.$userPoolWebClientId,
      mandatorySignIn: false,
      authenticationFlowType: 'CUSTOM_AUTH',
    }
  })
} catch (err) {
  console.error('Error: ', err)
}
// --


// Are global vars initialized?
app.config.globalProperties.$init = false

// Only init if settings are provided
if (app.config.globalProperties.$APIurl === '' ||
    app.config.globalProperties.$region === '' ||
    app.config.globalProperties.$ordersAPIurl === '' ||
    app.config.globalProperties.$c === '' ||
    app.config.globalProperties.$poolId === '' ||
    app.config.globalProperties.$ConfigEndpoint === '' ||
    app.config.globalProperties.$host === '') {

    app.config.globalProperties.$init = true
 }

app.mount('#app')