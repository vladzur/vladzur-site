<template>
  <v-container>
    <v-tabs v-model="tabs">
      <v-tab>Base 64 Encoder</v-tab>
      <v-tab>Base 64 Decoder</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card>
          <v-card-title>
            Base 64 encoder
          </v-card-title>
          <v-card-text>
            <v-textarea
              v-model="textInput"
              outlined
            />
            <v-textarea
              v-model="base64Output"
              outlined
              filled
              readonly
            />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <v-card-title>
            Base 64 decoder
          </v-card-title>
          <v-card-text>
            <v-textarea
              v-model="base64Input"
              outlined
            />
            <v-textarea
              v-model="textOutput"
              outlined
              filled
              readonly
            />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  data: () => (
    {
      textInput: '',
      base64Input: '',
      tabs: null
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
