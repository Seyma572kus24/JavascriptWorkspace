//? Beden kitle indeksi uygulaması

let kilo=Number(prompt("Lütfen kilonuzu giriniz: "));
let boy =Number(prompt("Lütfen boyunuzu m cinsinden giriniz: "));

let sonuc=kilo/(boy**2);

if(sonuc<18.5){
    console.log("İdeal kilonun altındasınız."+ sonuc);
}
else if(sonuc>=18.5 && sonuc<=24.9){
    console.log("İdeal kilodasınız." + sonuc);
}
else if(sonuc>=25 && sonuc<=29.9){
    console.log("ideal kilonun üstündesiniz." +  sonuc);
}
else if(sonuc>=30 && sonuc<=39.9){
    console.log("obezsiniz."+ sonuc);
}
else if(sonuc>=40){
    console.log("morbid obezsiniz."+ sonuc);
}