// ?Document write ile çıktı verme

// document.writeln("Hello World");


// ?console log metodu ile çıktı verme

// console.log("Hello Word ");
// console.clear();

// ?Alert (uyarı) popup ile çıktı verme

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

// //? Çoklu if lullanımı
// let ad=prompt("Lütfen bir isim giriniz : ");
// let tckn=Number(prompt("Lütfen 11 haneli tc nisi giriniz : "));

// konrolEt(ad,tckn);
// konrolEt2(ad,tckn);

// function konrolEt(ad , tckn){
//      if(ad!= ad){
//         if(tckn.length == 11){
//             console.log("isim ve tc girildi.")

//         }else{
//              alert("Lütfen tc nizi 11 karakter olarak giriniz.")
//              console.log("Lütfen tc nizi 11 karakter olarak giriniz.")
//         }  

//      }else{
//         alert("Lütfen isin alanını boş bırakmayınız!!!");
//         console.log("Lütfen isin alanını boş bırakmayınız!!!");
//      }

// }


// function konrolEt2(ad,tckn){
//    if(ad==""){
//       console.log("Lütfen isim alnını boş bırakmayın.!!!");
//       return;
//    }
//    if(tckn.length!=11){
//       console.log("Lütfen tc nizi 11 karakter olarak giriniz.");
//       return; 
//    }
//    console.log("isim ve tcniz problemsiz girildi")
// }


// //? Switch case ----------

// let sayi=prompt("lütfen bir sayı giriniz : ");

// switch(sayi){
//    case "1":
//       console.log("girilen sayı 1 dir.");
//       break;
//       case "2":
//          console.log("girilen sayı 2 dir.");
//         break;
//         case "3":
//          console.log("girilen sayı 3 dir.");
//          break;
//          case"3":
//          console.log("girilen sayı 3 dir."); 
//          break;
//          case"4":
//          console.log("girilen sayı 4 dir.");
//          break;
//          case"5":
//          console.log("girilen sayı 5 dir.");
//          break;
//          default:
//             console.log("girilen sayı 1 ile 5 arasında değildir.");
//             break;
// }

// //? Tür dönüşümleri

// let a=5;
// let b="5.1";
// let b1=Number("5")
// console.log(a+b); //? toplama yapmaz yan yana yazar

// let c=Number(b);
// console.log(c+a); //?toplama yapar

// // yada
// let d=parseInt(b); //?integer veri tipine dönüştür
// let e=parseFloat(b); //?float veri tipine dönüştür

// let x=String(55);   //?string veri tipine dönüştür
// console.log(typeof x);
// console.log(x)
// let y =(66).toString;  //? string veri tipine dönüştür
// console.log(y) 

// let rakamlar=(1,2,3,4);
// console.log(rakamlar);

// //? For Döngüsü

// for(let i=1; i<=100;i++){
//    console.log(i);
// }

// for(let j=0; j<=10; j=j+2){
//      console.log(j);
// }

// //? While Döngüsü
// let sayac=1;
// while(sayac<=10){
//    console.log(sayac);
//    sayac++;
// }

// let sayac=1;
// while(sayac<=10){
//    if(sayac%2==0){
//       console.log("Çif sayılar : "+sayac )
//    }
//    sayac++;
// }

// let sayac=1
// while(sayac<=10){
   //    if(sayac%2==1){
   //       console.log("Tek Saılar : "+sayac )
   //    }
   //    sayac++;
   // }

//? Do - WHİLE Döngüsü
// let sayac=1;
// do{
//    console.log(sayac);
//    sayac++;
// }while(sayac<=10)

//? Break kullanımı
// 1 den 10 kadar olan sayıları ekrana yazdıralım 8 geldiğinde döngüden çıkalım.
// sayac=1;
// while(sayac<=10){
//    console.log(sayac);
//    if(sayac==8){
//       break;
// }
// sayac++;
// }

//? Continue Kullanımı
// 1 den 10 kadar olan sayıları ekrana yazdıralım 8'i yazma diğerlerini yaz.
// sayac=1;
// while(sayac<=10){
//sayac++
//    if(sayac<=10){
//break;
//}
//    if(sayac==8){
//       continue;
// }
// console.log(sayac);
//}


