<template>
  <v-card>
    <v-card-title>
      Base 64 encoder
    </v-card-title>
    <v-card-text>
      <v-textarea outlined v-model="textInput" />
      <p>
        {{ textOutput }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      textInput: ''
    }
  },
  computed: {
    textOutput () {
      const encoded = Buffer.from(this.textInput)
      const base64 = encoded.toString('base64')
      return base64
    }
  }
}
</script>
