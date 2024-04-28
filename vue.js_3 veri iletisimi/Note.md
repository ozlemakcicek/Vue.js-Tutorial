# parent dan child a bilgi gondermek icin; props propertisi

-- User icindeki butona tiklayinca userDetail componentindeki name i Userdaki ile degistirsin. Bunu yapmak icin script tarafinda export default icinde props propertisini kullanacagiz. props bir array alir ve disaridan alinacak herseyi bunun icinde yazariz.string ise string olarak tanimlariz.

-- ve gonderecek parenti da hazirliyoruz.hangi componente gidecekse onun tagina gidip name=" istenilen isim" seklinde gonderiyorz. Eger methods ile degistirmek istedigimiz ismi gondermek istersek o zaman da :name="title" diyerek bind islemi yapiyoruz. Boylece parent comp. de butona tiklayinca changeName methodumuz calisir ve child componentte deki p taginin icerigi de degismis olur.

-- burda onemli olan tag icinde bind ettigin, child comp. de props ile aldigin ve yine child icinde p taginda yazdirdigin seyin ayni isimde olmasi.

# ------------- veri turu harici baska bir type da deger tanimlamak istersek --------------------


#  props ile number veya Array de gonderebiliriz o zaman bazi hatalar alabilirz props:[name] dedigimizde.buna engel olmak icin;props icini obje yapip, name i Array yapariz ve Typelari orda belirtebiliriz.Hatta daha guzeli name i de object yapip, type seklinde belirtebiliirz.required ve default da kullanbiliirz.ikisi beraber kullnailmaz aslinda. eger default olarak bir deger gonderiyorsan, parentda component tagi icinde bisey gondermene de gerek yok.



# ------------ child dan parent a veri gondermek --------------

# bunun icin custom  event isimli bir özellikten faydalanacagiz. vue js bize emit(yaymak) diye bir method sunar.$emit() diye yazilir. this den sonra gelen $ lar ya vue instnce in kullnadigi ya property yi ya da methodu belirtir.icine hem gonderip, diger tarafta yakalanacak veri, daha dogrusu event adi , hemde  o datanin degerini yazariz.ve karsilayacagimiz yerde parentda  de component tagi icinde yazarken, bunu bir event olarak algilariz ve @ ile bind ederiz eventleri. child dan gonderdigimiz bu  veriyi alsin istiyoruz @data ="alacagi data verisinin adi" ve  $event eklemek zorundayiz.ve boylece gonderileni almis olur. 

# emit fonksiyonu bir bilesenin events lerini disariya(ust bilesene) iletmek icin kullanilir.Ana bilesen, alt bilesenin icinde gerceklesen bir olayi(event) dinlemek ve uygun sekilde tepki vermek istiyorsa, alt bilesen bu olayi ust bilesene iletmek zorundadir.Bunun icin kullanilir.z.B. bir butona tiklama olayini iceren bir alt bilesenimizin, bu tiklama olayini ust bilesene iletmesini isteyelim.Alt bilesenin icindekibutona tiklandiginda emit kullanarak bu olayi ust bilesene iletebiliriz.ust bilesen alt bilesendeki bu olayi dinleyerek uygun islemleri yapabiliriz.


# $refs nedir: resmi bir html attributu, vue js attributu degildir.sadece bir attribute ve vue js tarafindan taninir.native html tagi icinde ref="" ile bir isim ver ve bu html tagini js alaninda, methodlar icinde veya disarida ulasilabilir yaptin.yani; daha cok tag icine bir event ekleyip ona da bir method tayin ediyorduk ama ref ile, bunu yapmak yerine istedigim yerde js alaninda html tagimi kullanip degisiklik yapabilirim.
# z.B. native html de buttona arttir ismini verelim ve bunun icinde ref yazarak, js alaninda da bu butona $refs ile ulasip adini innerText ini azalt diye degistireblrz.

# $mount() bir methoddur.olusturulan instance a bir template i baglamayi saglar.instance tarafinda yazilir ve icerisine baglamak istedigimiz templatin id veya class ismini alir. Neden ihtixyac duyariz? html sablonumuz hazir degil veya biryerden cekiyorsak bu yapiyi, instance i olusturtup sonra template hazir olunca mount ederiz. 3 yolla template ve instance i birlestirebiliriz.1- el ile 2- $mount() ile 3- document.getElementById(). appendChild(nereye ekleyeceksen ismi.$el).3. pek kullanilmaz.


-bunu degilde statik olarak alsin dersek; component tagi icinde @datanin karsisina ya bir method yazariz, veya datadaki bir degeri degistireblrz.mesela burda statik olarak datadaki bir degeri degistirmek istedik ve tanimlamayi bos biraktik.verisini ise component tagi icinde props icinde tanimladigimiz event icinde bu veriyi yazip karsisina da degisecek degeri yazmaliyiz. tabi birde bunu p tagi icinde cagirmaliiyz.

#  ----------------- child dan child a verio gonderme ------------------

- mesela child2 componentindeki butona basinca child1 componentindeki bir veriyi degistirelim.direkt yapilamaiyor.childdan parenta, ordan da diger parenta gonderiyoruz veriyi.önce parent component icinde bir data tanimlamasi yapmaliyiz.sonra bunu yine burda component taginda props olarak gosterelim yani gonderelim. sonra da 1.child componentte props propertisi icinde karsilayalim bunu. ve istedigin bir tag acarak yazdir. 

-- simdi asil isimize yani diger childdaki butona tiklayinca ilk childdaki veriyi degistirme isine.parenttan component taginda  props olarak gonderelim veriyi.ikinci childda  butonu olusturalim ve props olarak degistirmek istedigimiz veri adini export default icinde yazalim. buton icinde de click eventini yazip veriyi degistirelim.yalniz bu sekilde biz ikinci childdaki veriyi degistirirz.butona basinca birinci child uzerinde de degisiklik yapabilmek icin ise; ki bunu parent uzerinden yapacagiz.oyleyse once child 2 den parenta bu degisikligi gonderelim.$emit kullaniyorduk burda. ve parent da da $event kullanarak al.

-- parent uzerinde degistigini gormek icinde bir p icinde gosterebilirsin bunu


#  ------------ 3.bir veri iletisim methodu event Bus -----------------------

- merkezi olarka veri akisini saglar.bunu main js de yapiyoruz.new Vue dan once(daha sonra tanimlarsak kullanammayiz) yeni bir Vue instance olusturup bir degiskene atamalyiz.olusturup degiskene atayip export ediyoruz ve kullanacagimiz yerde de  {} icinde import edecegiz(cunku const ile bir degiskene atamistik bunu mainde).z.B. UserEdit sayfamizda kullanalim. ve methods lar icinde bunu kullanalim.childdan parenta gonderme gibi bir islem buda aslinda o yuzden $emit kullanacagiz ama burda User.vue ya giden bisey yok.dogrudan UserDetailse gidecek.simdi orda okuyalim.yine methods seviyesinde bir tanimlama yapacagiz.LiveCycle hook u olarak created() methodunu kullanacagiz.

# eventBus ile veriyi gondermek icin $emit kullaniyoruz, eventBus ile gonderilmis veriyi almak icinde created() Lifecycle kullaniyoruz.ve icinde $on methodu ile bunu okuyoruz.

- fakat bu sekilde child larin ikisi de degisti ama parentdaki degisken degismez.bu cok daha kolay bir yontem.kucuk projelerde uygun ama buyuk projelerde bu kafa karistirici olabilir birden cok eventBus olursa. iste bunun icin baska bir stage management kutuphanesi var. Vuex isimli bir Vue js kutuphanesi.


# ---------------- EventBus ile iletisimi birlestirmek --------------------

# eventBus ile emit ile event yaysaydik ve bunlari cok fazla componentte kullanmak zorunda kalsaydik cok fazla yerde ayni kodlari yazmak zorunda kalacaktik ve kod dupplication olacakti.buna engel olmak icin merkezi bir yerde toplayabiliriz. ve her componentin import etme sarti ile kullanabilmesini saglariz. eventBus icinde mainde bir methods yazabiliriz.yine emit kullaniriz. kullanacagimiz yerde ise;direkt eventBus.method adi yazariz.

# hatta data da yazabiliriz ama bu sefer data direkt obje olmali.cunku burasi bir single file template degil, direkt bir javascript alani.Vue instance olusturduk burda, bu nedenle de data obje olmali.burda default ayarlar, configurasyonlar tanimlanabilir ve componentlerde import edilerek kullnailabilir.



