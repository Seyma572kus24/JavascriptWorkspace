// Document write ile çıktı verme

// document.writeln("Hello World");


// console log metodu ile çıktı verme

// console.log("Hello Word ");
// console.clear();

// Alert (uyarı) popup ile çıktı verme

// alert("Merhaba");

// ? Veri Tipleri

// let isim= "şeyma";
// console.log(isim);
// console.log(typeof isim) //? typeof hangi tipte olduğunu söyler

// let sayi1=10;
// let sayi2=30
// console.log(sayi1);
// console.log(sayi1+sayi2);

// let stringDegişken="Yaşınız : "
// let yas=25

// console.log(stringDegişken+yas)
//--------Object Veritipi
// let insan ={
//     isim: "Şeyma",
//     soyisim:"Akkuş",
//     yas:25

// }
//?dizi
// let rakamlar=[1,2,3,4,5,6,7];
// console.log(typeof rakamlar);

// //? fonksiyon
// let func= function(){
//     console.log("Merhaba");
// }

// func();

//--------Aritmetik operatörler---
/* 
? +,-,*,/,%,++,--,**

*/
// let not1=60
// let not2=70

// console.log(not1+not2);
// console.log("notunuz :"+(not1+not2))

// ?Diyolog kutuları---
//? - Alert
//? - Prompt
//? - Comfirm

// console.log(window);

// alert("İşleminize devam etmek için önce kydetmelisiniz.");

// //? Prompt() kullanıcıdan değer alabiliyoruz. promplar string olarak döner



// let isim=prompt("İsminizi giriniz:")
// console.log(isim);

// //? comfirm true veya false cevap döndürür.

// let sonuc=confirm("Silmek isteğinize emin misiniz");
// console.log(sonuc);


//? ------KOŞUL Yapıları-------

//? if-else

//let not=65;

// if(not>50){
//     console.log("Geçtiniz , notunuz : "+ not);
// }else{
//     console.log("kaldınız , notunuz :"+not);
// }

// let yas= Number(prompt("yaşınızı giriniz : "));
// console.log(typeof yas);
// let para= Number(prompt("bütçeniz :"));

// if(yas>=18 && para>= 3000){
//     alert("ehliyet sınavına katılabilirsiniz.");
// }else{
//     alert("ehliyet sınavına katılamazsınız. ")
// }

//? Çoklu if lullanımı
let ad=prompt("Lütfen bir isim giriniz : ");
let tckn=Number(prompt("Lütfen 11 haneli tc nisi giriniz : "));

konrolEt(ad,tckn);
konrolEt2(ad,tckn);

function konrolEt(ad , tckn){
     if(ad!= ad){
        if(tckn.length == 11){
            console.log("isim ve tc girildi.")

        }else{
             alert("Lütfen tc nizi 11 karakter olarak giriniz.")
             console.log("Lütfen tc nizi 11 karakter olarak giriniz.")
        }  

     }else{
        alert("Lütfen isin alanını boş bırakmayınız!!!");
        console.log("Lütfen isin alanını boş bırakmayınız!!!");
     }

}


function konrolEt2(ad,tckn){
   if(ad==""){
      console.log("Lütfen isim alnını boş bırakmayın.!!!");
      return;
   }
   if(tckn.length!=11){
      console.log("Lütfen tc nizi 11 karakter olarak giriniz.");
      return; 
   }
   console.log("isim ve tcniz problemsiz girildi")
}