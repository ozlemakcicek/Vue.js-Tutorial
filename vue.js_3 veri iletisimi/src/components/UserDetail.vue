<template>
    <div class="wcol-md-6">
        <h3>Child Component 1</h3>
        <p>Ben User.vue isimli parent Componentin icerisindeki bir Child componentim</p>
    <p>Kullanici Adi: {{ name }} </p>
    <p>Kullanici AdiTersten: {{ switchName() }} </p>
    <!-- parentdan gelen veriyi yazdirmak icin -->
    <p>Kullanici yasi: {{ age }}</p>
    <!-- child dan parenta veri gondermek icin... -->
    <button @click="sendToParent">Veriyi Parent'a gönder</button>
    </div>

</template>

<script>
import { eventBus } from '../main';

export default{
    // props:['name'],
    props:{
        // name:[String, Array]
        name:{
            type:String,
            // required:true,
            default:"videosinif.com"
        },
        age:String
    },
    methods:{
        switchName(){
            return this.name.split("").reverse().join("")
        },
        sendToParent(){
            this.$emit("data", "FullStack")
        }
        
        },
        created(){
            eventBus.$on("ageWasEdited", (age)=>{
                this.age=age
            })
    }
}
</script>

<style scoped>

div{
background-color: lightcoral;
padding: 20px;
border: 1px solid #666;
display: inline-block;
}
</style>