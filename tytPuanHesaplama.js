/* 
sorular

1-Türkçe 40   4 puan
2-matematik 40
3-sosyal bilimler 20
4-fen bilimleri 20

---->100 puanı ösym veriyor
---->okul max 60 puan veriyor
*/

let turkceDogru ,turkceYanlis=0;
let matematikDogru ,matematikYanlis=0;
let sosyalDogru,sosyalYanlis=0;
let fenDogru,fenYanlis=0;

let yeniSatir="\r\n";
let mesaj="TYT Puan Hesaplama Uygulamasına Hoşgeldiniz!"
+yeniSatir+"1-Puan Hesapla"+yeniSatir+
"2-Çıkış Yap";

let secim=prompt(mesaj);

switch(secim){
    case "1":
        okulPuani=  Number(prompt("Okul puanızı giriniz : "));
       turkceDogru=Number(prompt("Türkçe doğru sayısını giriniz : ")) 
       turkceYanlis=Number(prompt("Türkçe yanlış sayısını giriniz : "));
       matematikDogru=Number(prompt("Matematik doğru sayısını giriniz : "))
       matematikYanlis=Number(prompt("Matematik yanlış sayısını giriniz : "));
       sosyalDogru=Number(prompt("Sosyal Bilimler doğru sayısını giriniz : "));
       sosyalYanlis=Number(prompt("Sosyal Bilimler yanlış sayısını giriniz : "));
       fenDogru=Number(prompt("Fen Bilimleri doğru sayısını giriniz : "));
       fenYanlis=Number(prompt("Fen Bilimleri yanlış sayısını giriniz : "));

       let dogruSayisi=turkceDogru+matematikDogru+sosyalDogru+fenDogru;
       let yanlisSayisi=turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;
       let kalanPuan=dogruSayisi-(yanlisSayisi/4);
       let puan =(kalanPuan*4)+100+okulPuani;

      alert("tyt puanınız : "+puan);
      break;
      case"2":
      alert("Çıkış Yapıldı");
      break;
      default:
        alert("Hatalı Seçim Yapıldı");
        break;
}
