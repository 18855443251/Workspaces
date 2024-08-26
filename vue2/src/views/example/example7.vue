<template>
  <div>
    <div>
      <md-field class="mt10">
        <md-field-item
          title="预约网点"
          v-model="bookingLocation"
          placeholder="请选择"
          v-validate="'required'"
          name="预约网点"
        />
      </md-field>
      <div @click="test">测试</div>
    </div>
  </div>
</template>

<script>
import { FieldItem, Field, } from "mand-mobile";
export default {
  name: "home",
  components: {
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
  },
  data() {
    return {
      bookingLocation: "",
    };
  },
  mounted() {},
  methods: {
    test() {
      this.$validator.validateAll().then((result) => {
        console.log(result,'好好')
      });
    },
  },
};
</script>

<style scoped></style>
