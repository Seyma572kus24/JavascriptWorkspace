/*
1-Bakiye görüntüle
2-Para yatırma
3-Para çekme
4-Çıkış
*/

let yeniSatir="\r\n"
let bakiye=1000;

let metin="1-Bakiye görüntüleme"+yeniSatir+"2-Para yatırma"+yeniSatir+
"3-Para çekme"+yeniSatir+"4-Çıkış"+yeniSatir+
"Lütfen bir değer seçiniz: ";

let secim=prompt(metin);

switch(secim){
    case "1":
        console.log("Bakiyeniz: "+bakiye);
        break;
        case "2":

            let yatirma= Number(prompt("Lütfen yatıracağınız tutarı giriniz: "));
            bakiye=bakiye+yatirma;
            alert("Güncel bakiye : "+bakiye);
           break;
           case "3":
            let cekme= Number(prompt("Lütfen çekeceğiniz tutarı giriniz : "));
            if(cekme<bakiye){
                bakiye=bakiye-cekme;
                alert("Kalan bakiye : "+bakiye);
            }else{
                alert("Bakiyenizden fazla para çekemezsiniz!"+yeniSatir+"Bakiyeniz :"+bakiye+
                    " "+yeniSatir+"Çekilecek Tutar : "+cekme);
            }
            break;
            case "4":
                alert("Çıkış yapılıyor...");
                break;
             default:
                alert("Lütfen geçerli bir değer giriniz!");
                break;

}