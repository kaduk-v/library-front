<script setup lang="ts">
import { email, required, minLength } from '@vuelidate/validators'
import { reactive, computed, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import logo from '@/assets/img/lib-logo.png'

const initialState = {
  email: '',
  password: ''
}

const state = reactive({
  ...initialState
})

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(5) }
}

const v$ = useVuelidate(rules, state)
const visible = ref(false)
const passwordIcon = computed(() => visible.value ? 'mdi-eye' : 'mdi-eye-off')

const login = () => {
  // Handle the login logic here
  console.log(`Email: ${email}, Password: ${password}`)
}

</script>

<template>
  <v-container class="fill-height">
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" sm="6" md="4" lg="4">

        <v-card class="pa-4">
          <v-card-title>
            <v-img
              class="mx-auto my-6"
              max-width="228"
              :src="logo"
            ></v-img>
          </v-card-title>
          <v-card-text>

            <form @submit.prevent>
              <v-text-field
                v-model="state.email"
                :error-messages="v$.email.$errors.map(e => e.$message)"
                append-inner-icon="mdi-email-outline"
                label="E-mail"
                placeholder="Email address"
                required
                variant="solo"
                @blur="v$.email.$touch"
                @input="v$.email.$touch"
              ></v-text-field>

              <v-text-field
                v-model="state.password"
                :error-messages="v$.password.$errors.map(e => e.$message)"
                :append-inner-icon="passwordIcon"
                :type="visible ? 'text' : 'password'"
                label="Password"
                placeholder="Enter your password"
                required
                variant="solo"
                @blur="v$.password.$touch"
                @input="v$.password.$touch"
                @click:append-inner="visible = !visible"
              ></v-text-field>
            </form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" class="me-4" variant="flat" @click="v$.$validate">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped lang="sass">
.fill-height
  min-height: 100vh
</style>
