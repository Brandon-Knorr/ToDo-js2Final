<script>
import Toolbar from "@/components/Toolbar.vue";

export default {
  components: {Toolbar},
  data() {
    return {
      valid: false,
      firstname: '',
      lastname: '',
      password: '',
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
    }
  }
}
</script>

<template>

  <Toolbar />

  <v-container class=" pa-6">
    <v-row  class="justify-center ma-5 pa-6">
      <v-card width="500">
        <v-container class="ma-2 pa-2">
          <v-row class=" pa-2 justify-center">
            <div class="text-h5 font-weight-light">Login</div>
          </v-row>
        </v-container>
        <v-form class="ma-1 pa-2" v-model="valid">
          <v-container>
            <v-row class="align-center justify-center d-flex flex-wrap">
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
                  v-model="password"
                  :counter="10"
                  :rules="nameRules"
                  label="Password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-col>
              <v-btn class="mt-2" type="submit" block>Login</v-btn>
            </v-col>
          </v-container>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<style>

</style>
