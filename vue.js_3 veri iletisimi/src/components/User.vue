<template>
  <div class="container">
    <h1>Parent Component(User)</h1>
    <p>Burasi parent component yani herseyin impüort edildigi component :)</p>
    
    <button @click="changeName">Adimi Degistir</button>

    <!-- childdan parenta gelen veri -->
    <p>Child componentinden gelen Veri : {{ childData }}</p>
   
<!-- childdan parenta gelen yasin degisip tekrar diger childa gitmesi.. -->
    <p >Kullanici Yasinin Parentda da degistigini gosterme: {{ age }}</p>
    
    <hr />
    <div class="row">
      <!-- <app-user-detail :name="title"></app-user-detail> -->
      <!-- childdan parenta gelen veriyi yakalam icin... -->
      <!-- <app-user-detail :age="age" @data="childData='Developer'"  ></app-user-detail> -->
      <app-user-detail :age="age" @data="childData= $event" :name="title"  ></app-user-detail>
      <app-user-edit :age="age" @ageWasEdited="age =$event"></app-user-edit>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
  data:function(){
    return{
      title:"Özlem",
      childData:"",
      // childdan childa veri akisi icin tanimladigimiz veri
      age: 25
    }
  },
  methods:{
    changeName(){
     
        this.title="Murat"
      
    }
  }
};
</script>

<style>
div.container {
  margin-top: 30px;
  padding: 20px 40px;
  background-color: #6a8d99;
  border: 1px solid #666;
}

div.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
