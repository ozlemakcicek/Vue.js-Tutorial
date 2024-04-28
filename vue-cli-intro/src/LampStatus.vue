<template>
    
<div>
<p>Lamaba Durumu: {{ status }}</p>
<hr>
<button @click="openLamp">Lambayi ac</button>

</div>
</template>


<script>

export default{
    data:function(){
        return{
            status:"Kapali"
        }
    },

    // ES6 dan kaynakli uzunca function yazmaya gerek yok.() yeter bunun fonksiyon oldugunu belirtmek icin.
    methods:{
        openLamp(){
            this.status="Acik"

        }
    }
}
</script>