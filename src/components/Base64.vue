<template>
<v-container>
  <v-card>
    <v-card-title>
      Base 64 encoder
    </v-card-title>
    <v-card-text>
      <v-textarea outlined v-model="textInput" />
      <p>
        {{ base64Output }}
      </p>
    </v-card-text>
  </v-card>
  <v-card>
    <v-card-title>
      Base 64 decoder
    </v-card-title>
    <v-card-text>
      <v-textarea outlined v-model="base64Input" />
      <p>
        {{ textOutput }}
      </p>
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
export default {
  data: () => (
    {
      textInput: '',
      base64Input: ''
    }
  ),
  computed: {
    base64Output () {
      const encoded = Buffer.from(this.textInput)
      const base64 = encoded.toString('base64')
      return base64
    },
    textOutput () {
      const encoded = Buffer.from(this.base64Input, 'base64')
      const decoded = encoded.toString()
      return decoded
    }
  }
}
</script>
