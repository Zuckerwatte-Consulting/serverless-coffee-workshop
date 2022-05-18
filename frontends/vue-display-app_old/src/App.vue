<template>
  <Wrapper />
</template>

<script>
/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */


'use strict'

import Wrapper from "@/Wrapper"

export default {
  name: "App",
  components: {
    Wrapper,
  },
  mounted() {
    console.log('Mounting App.vue: ', this.$init)
  }
}
</script>
