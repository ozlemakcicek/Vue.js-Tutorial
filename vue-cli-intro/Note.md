# App.vue dosyasi bizim single file template alanimiz.icerisinde tempalte, script ve style taglarini bulundurur.bunlar sirasi ile, html kodlari, vue.js kodlari ve css kodlari icin ayrilan alanlardir.

# main.js de ise bizim index.html deki id=app olan root yapimizla irtibati el ile kuruyoruz.birde render propertysi var.bu bir h fonksiyonu alir ve bu fonksiyon da icine App.vue yu alir.

# index.html icinde ise root div ve birde script tagi var bu da ana script tagimiz  ve build yapma gorevi var.terminalde npm run build dersek bize dist isimli bir folder olusturacak.onun altinda da build.js dosyasi var.

------------------------------------------------------------COMPONENT YAPISI ----------------------------------------------------------;

# Vue instance tarafinda en yukarida Vue component() diye olusturuyoruz.icerisine 2 parametre alir.1- olusturulacak olan component adi, 2- el haric diger property lerin yazildigi bir obje({icinde yazilir yani hersey}).iste burda data:function(){}seklinde yazilir ve bir deger dpndurur.yani return{ datada olmasi gereken deger} yazilir. html tarafinda ise; bu componentin adini ne verdiysen tag gibi <> icinde yazilir.iste tek bir component olusturduk ama istedigimiz kadar Vue instance olusturup, html tarafinda da bu componenti o instancdaki tanimli elementin icinde cagirabiliriz.


----------------------------------component icinde component olusturmak-------------------------------

# mesela Home.vue componentini, ana root componentimiz olan App.vue icinde gosterelim.Bunun icin once main.js e gidip orda global olarak instancei olusturalim, bir isim verelim ve bu componenti asil yerinden import edelim.import ismimize de alias olarak component adi ile ayni ismi verelim ve bunu da olusturdugumuz componente ikinci bir parametre olarak ekleyelim. sonrada root comp. de bunu tanimlayalim yani tag olarak yazalim

# aslinda global olarak main icinde tanimlamaya cokda gerek yok.direkt app icerisinde yapilabilir

# Home.vue da ise; bir componentteki zorunluluklar olan template ve script kismini olusturalim.template kisminda html taglari yazilir ve bir event verecek isek onu ve methodunu yazariz
# script kismi ise vue.js kismi.hersey export default{} icine yazilir.en onemli sey ise; datanin bir function olmasi.

# iste home componentinde kodlari ve taglari olusturduk.sonra bu sayfayi globalde import edelim ve componenti olusturup icerisine tag ismi ve kullnilacak kodlarin geldigi sayfayi verelim. daha sonra da bu component tagini nerde kullanacaksak template icinde sadece tag olarak yazalim


--------------------  global degilde local olarak componentleri baglarsak;------------------------------

# main de degilde yani direkt kendi olusturdugumuz bir componenti  olusturdugumuz baska bir diger component icinde gostermek icin en onemli sey; globaldeki gibi Vue components yazmak yerine export defaults icinde components yazip kodlari yazip, buraya import ettigin dosyayi bir component tagina ata ve onu da tempalte icinde tag olarak yaz.

# eger birden fazla durumu gostermek istersek v-for kullaniriz ama burda  da template icinde yazacagimiz component tagini bir div icine almaliyiz.cunku birtek deger dondurur ama biz burda mesela 5 tane yazdirmak istioyruz.