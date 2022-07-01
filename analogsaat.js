let name1 = prompt("Lütfen isminizi giriniz .")

let content = `Merhaba , ${name1} Hoşgeldin`

let text = document.querySelector("#text1").innerHTML=content

setInterval(dijitalsaat, 1000)
function dijitalsaat() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let date = now.getDate();
    let today = now.getDay()
    let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    let gi = days[today-1]

    hour = (hour<10)? "0"+hour:hour;
    minute = (minute<10)? "0"+minute:minute;
    second = (second<10)? "0"+second:second;

    let zaman = hour+":"+minute+":"+second+" "+gi;
    let saat = document.getElementById("hour").innerHTML=zaman;
}