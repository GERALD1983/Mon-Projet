<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="text-white d-flex justify-content-around">
        <b-form-group
          class="largInput"
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="largInput"
          id="input-group-2"
          label="Your Name:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="text-white d-flex justify-content-around">
        <b-form-group
          class="largInput"
          id="input-group-4"
          label="Message:"
          label-for="input-4"
        >
          <b-form-textarea
            id="input-4"
            v-model="form.message"
            type="text-area"
            placeholder="Enter Message"
            required
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          class="largInput"
          id="input-group-5"
          label="Your Phone:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="form.tel"
            placeholder="Enter phone"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="d-flex justify-content-around">
        <b-button class="colorSubmit" type="submit">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
    <b-card class="mt-3 displayNone" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "formulaire",
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: "",
        tel: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";
      this.form.tel = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
