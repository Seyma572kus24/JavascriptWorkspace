//? Benzin İstasyonu Uygulaması

/*
1-Dizel :24.53
2-Benzin:22.25
3-lpg   :11.1

Gelen mÜsteriden alacağınız bilgiler:
1-Yakıt Tipi
2-Yüklenecek yakıt litresi
*/

let dizel =24.53;
let benzin=22.25;
let lpg   =11.1;

const yeniSatir="\r\n";

const yakitTipi="1.Dizel"+yeniSatir+"2.Benzin"+yeniSatir+"3.LPG"+yeniSatir+"Yakıt türünü seçiniz : "
let yakit =prompt(yakitTipi);
let yakitLitresi= Number(prompt("Yakıt litresini giriniz: "));
let bakiye=Number(prompt("Bakiyenizi giriniz : "))

if(yakit==1){
    let odenecekTutar=dizel*yakitLitresi;
    if(odenecekTutar<bakiye){
        bakiye=bakiye-odenecekTutar;
        alert("İşlem başarılı"+yeniSatir+ "Kalan bakiye : "+bakiye)
    }else{
        alert("Bakiyeniz yeterli değil"+yeniSatir+
            "Ödenecek Tutar : "+odenecekTutar+yeniSatir+
            "Bakiye : "+bakiye+yeniSatir+
            "Eksik tutar : "+(odenecekTutar-bakiye));
    }

}else if(yakit==2){let odenecekTutar=benzin*yakitLitresi;
    if(odenecekTutar<bakiye){
        bakiye=bakiye-odenecekTutar;
        alert("İşlem başarılı"+yeniSatir+ "Kalan bakiye : "+bakiye)
    }else{
        alert("Bakiyeniz yeterli değil"+yeniSatir+
            "Ödenecek Tutar : "+odenecekTutar+yeniSatir+
            "Bakiye : "+bakiye+yeniSatir+
            "Eksik tutar : "+(odenecekTutar-bakiye));
    }
    
}else if(yakit==3){
    let odenecekTutar=lpg*yakitLitresi;
    if(odenecekTutar<bakiye){
        bakiye=bakiye-odenecekTutar;
        alert("İşlem başarılı"+yeniSatir+ "Kalan bakiye : "+bakiye)
    }else{
        alert("Bakiyeniz yeterli değil"+yeniSatir+
            "Ödenecek Tutar : "+odenecekTutar+yeniSatir+
            "Bakiye : "+bakiye+yeniSatir+
            "Eksik tutar : "+(odenecekTutar-bakiye));
    }
}else{
    alert("Lütfen geçerli bir yakıt türü seçiniz!");
}