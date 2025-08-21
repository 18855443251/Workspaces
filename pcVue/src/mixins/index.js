import common from "./common"
import number from "./number"
export default {
  methods: {
    ...common,
    ...number,
    goBack() {
      this.$router.back();
    }
  }
}
