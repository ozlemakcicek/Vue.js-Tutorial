<!-- home sayfasinda olusturulan kodlari main de globalde component olusturup App.vue da sadece componenti tag seklinde yazmak icin... -->

<!-- <template>
    
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
</script> -->
<!-- yazilacak olan butun elementler tek bir div icinde tooplanmali-->


<!-- ikinci bir yol: global degilde local olarak component olusturma ve birlestirme.Lampstatusu home icinde gosterelim-->


<template>
<div>
<lamp-status v-for="lamp in 5"></lamp-status>
</div>
</template>


<script>
import LampStatus from "./LampStatus"
export default{

    components:{
        "lamp-status": LampStatus
    }

}

</script>
