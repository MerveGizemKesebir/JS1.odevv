
// Kullanıcı Bilgisi Alma


let myName = document.querySelector("#myName");
let userName = prompt("Lutfen adinizi giriniz");
myName.innerHTML = `${userName}`;





// Sayaç

function showTime() {

    const tarih = new Date();

    let gun = tarih.getDate();
    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();



    gun = checkTime(gun);
    saat = checkTime(saat);
    dakika = checkTime(dakika);
    saniye = checkTime(saniye);
    myClock.innerHTML =  `${tarih}`;
    setTimeout(showTime, 1000);
    
  }
  
  
  
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }
  showTime()
   



