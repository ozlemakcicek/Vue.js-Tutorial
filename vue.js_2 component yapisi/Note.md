# Eger  componnets tag ismimizde arada - kullanmayacaksak, camelCase yazacaksak o zaman "" icinde yazmaya gerek yok.ama tag olarak yazarken bazi durumlarda - li hali kalabilir.

# bir diger ES6 özelligi ise; eger component tag ismini importdaki ile ayni vermek istersen ikinci kez yazmaya gerek yok.Footer:Footer demeye gerek yok yani.Bir tane yazman yeterli

# style kodunda ise soyle bir ayrinti var.mesela burda App.vue da server ile alakali componentler ayni div altinda, ve biz style larini ayri ayri vermemize ragmen, App de hangisi ustte ise onun style ni aliyor.Biz bunu istemiyorz.Iste buna engel olmak icin; style tagi icine scoped demeliyiz
