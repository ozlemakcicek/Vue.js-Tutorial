<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>Ben User.vue icindeki bir baska Child Componentim</p>
    <p>Kullanici Yasi:{{ age }}</p>
    <!-- <button @click="age=30">Yas bilgisini degistir</button> -->
    <button @click="changeAge">Yas bilgisini degistir</button>
  </div>
</template>

<script>
// mainde global tanimladigimiz 3. veri akis methodunu import edelim
import { eventBus } from "../main";
// child1 deki age verisini degistirmek icin once bunu props olarak alalim ve ustte de buton olusturup ona basilinca degsitirelim
export default {
  props: ["age"],
  methods: {
    changeAge() {
      this.age = 30;
      //this.$emit("ageWasEdited", this.age)
      // eventBus.$emit("ageWasEdited", this.age)
      // mainde emit ile methodu yayip istenilen yerde kullanmak
      eventBus.changeAge(this.age);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgoldenrodyellow;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
