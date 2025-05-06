//? switch case uygulaması

let yeniSatir="\r\n";
let metin = "1-Pazartesi"+yeniSatir+"2-salı"+yeniSatir
+"3-Çarşamba"+yeniSatir+"4-Perşembe"+yeniSatir+"5-Cuma"+yeniSatir
+"6-Cumartesi"+yeniSatir+"7-Pazar";

let deger = prompt("Lütfen Gün seçimi yapınız : ");

switch(deger){
    case "1":
        console.log("Pazartesi günü");
        break;
    case"2":
    console.log("Salı günü");
    break;
    case"3":
    console.log("Çarşamba günü");
    break;
    case"4":
    console.log("Perşembe günü");
    break;
    case"5":
    console.log("Cuma günü");
    break;
    case"6":
    console.log("Cumartesi günü");
    break;
    case"7":
    console.log("Pazar günü");
    break;
    default:
        console.log("Lütfen geçerli bir gün seçiniz");
     break;
}
