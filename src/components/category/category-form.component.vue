<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { minLength, required } from '@vuelidate/validators'
import { reactive } from 'vue'

const initialState = {
  name: ''
}

const state = reactive({
  ...initialState
})

const rules = {
  name: { required, minLength: minLength(5) }
}

const v$ = useVuelidate(rules, state)

function clear() {
  v$.value.$reset()

  for (const [ key, value ] of Object.entries(initialState)) {
    state[key] = value
  }
}
</script>

<template>
  <v-container>
    <form>
      <v-text-field
        v-model="state.name"
        :counter="10"
        :error-messages="v$.name.$errors.map(e => e.$message)"
        label="Name"
        required
        @blur="v$.name.$touch"
        @input="v$.name.$touch"
      />

      <v-btn class="me-4" @click="v$.$validate">
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>

  </v-container>
</template>

<style scoped>

</style>
