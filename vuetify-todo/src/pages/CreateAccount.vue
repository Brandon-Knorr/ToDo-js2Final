<script>
import Toolbar from "@/components/Toolbar.vue";

export default {
  name: 'CreateAccount',
  components: {Toolbar},
  data() {
    return {
      valid: false,
      firstname: '',
      lastname: '',
      password: '',
      cPassword: '',
      email: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      passwordRules: [
        value => {
          if (value) return true

          return 'Password is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Password must be less than 10 characters.'
        },
      ],
      cPasswordRules: [
        value => {
          if (value === this.password) return true

          return 'Passwords must match.'
        }
      ],
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is required.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    }
  }
};
</script>

<template>
  <Toolbar />


  <v-container class="my-0 py-0 px-6">
    <v-row  class="justify-center mx-5 pa-5">
      <v-card width="500">
        <v-container class="ma-2 pa-2">
          <v-row class=" pa-2 justify-center">
            <div class="text-h5 font-weight-light">Create Account</div>
          </v-row>
        </v-container>
        <v-form v-model="valid" @submit.prevent>
          <v-container>
            <v-row class="align-center d-flex flex-wrap">
              <v-col
                cols="12"
              >

                <v-text-field
                  v-model="firstname"
                  :counter="10"
                  :rules="nameRules"
                  label="First name"
                  required
                ></v-text-field>

              </v-col>

              <v-col
                cols="12"
              >

                <v-text-field
                  v-model="lastname"
                  :counter="10"
                  :rules="nameRules"
                  label="Last name"
                  required
                ></v-text-field>

              </v-col>

              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="password"
                  :counter="10"
                  :rules="passwordRules"
                  label="Password"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
              >

                <v-text-field
                  v-model="cPassword"
                  :counter="10"
                  :rules="cPasswordRules"
                  label="Confirm Password"
                  required
                ></v-text-field>

              </v-col>

              <v-col>
                <v-btn class="mt-2" type="submit" block>Create Account</v-btn>
              </v-col>

            </v-row>
          </v-container>
        </v-form>

      </v-card>
    </v-row>
  </v-container>
</template>

<style>

</style>
