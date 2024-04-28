<template>
<div class="container">
    <appHeader></appHeader>



<div class="row">
    <app-servers></app-servers>
    <app-server-details></app-server-details>

</div>

<hr>
<Footer></Footer>



</div>
</template>

<script>
import Header from "./components/Common/Header"
import Footer from "./components/Common/Footer"
import Servers from "./components/Server/Servers"
import ServerDetails from "./components/Server/ServerDetails"



export default {
    components:{
        appHeader:Header,
        Footer,
        "app-servers": Servers,
        "app-server-details":ServerDetails
    }
  
}
</script>

<style>

</style>
