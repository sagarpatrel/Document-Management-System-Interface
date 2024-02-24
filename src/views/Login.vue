<template>
  <div style="height: 100vh" class="d-flex justify-center align-center">
    <v-card class="" width="450px">
      <v-card-title
        @click="
          $router.push({
            name: 'document',
          })
        "
      >
        Authentication
      </v-card-title>
      <v-container>
        <v-form ref="login">
          <v-row>
            <v-col cols="12" class="py-0">
              <label for="mobile">Mobile Number</label>
              <v-text-field
                :rules="[$rules.phone]"
                type="number"
                v-model="mobile"
                label="Mobile number"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col v-if="show_otp" cols="6">
              <label for="mobile">OTP</label>
              <v-otp-input plain v-model="otp" length="6"></v-otp-input>
            </v-col>
            <v-col cols="12">
              <v-btn
                :loading="loading"
                @click="sendOtp()"
                width="100%"
                color="primary"
                class="white--text text-capitalize"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      mobile: 7898446528,
      otp: null,
      show_otp: false,
      loading: false,
    };
  },

  methods: {
    sendOtp() {
      if (this.$refs.login.validate()) {
        if (!this.otp) {
          this.loading = true;
          this.show_otp = true;
          let data = {};
          const onSuccess = () => {
            this.loading = false;
            this.show_otp = true;
            // this.send_otp_btn = false;
          };
          const onFailure = () => {};
          data["mobile_number"] = this.mobile;
          this.$Axios("post", `${this.$apiUrl.SEND_OTP}`, {
            data,
            onSuccess,
            onFailure,
            isTokenRequired: false,
          });
        } else if (this.otp.length == 6) {
          this.loading = true;
          let data = {};
          const onSuccess = (res) => {
            this.loading = false;
            localStorage.setItem("token", res.data.token);
            this.$router.push("document");
          };
          const onFailure = () => {};
          data["mobile_number"] = this.mobile;
          data["otp"] = this.otp;

          return this.$Axios("post", this.$apiUrl.VALIDATE_OTP, {
            data,
            onSuccess,
            onFailure,
            isTokenRequired: false,
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>