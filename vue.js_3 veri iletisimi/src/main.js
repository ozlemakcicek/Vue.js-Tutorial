import Vue from 'vue'
import App from './App.vue'

// 3. bir veri iletisim methodu event Bus.olusturup degiskene atayip export ediyoruz

// export const eventBus= new Vue()
// eventBus icinde method yazip istenilen componentte kullanmak.hatta data da yazabiliriz ama bu sefer data direkt obje olmali
export const eventBus= new Vue({
  data:{

  },
  methods:{
    changeAge (age){
    this.$emit("ageWasEdited",age)
  }}
})


new Vue({
  el: '#app',
  render: h => h(App)
})
