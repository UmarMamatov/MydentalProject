const nameInput =document.querySelector('#name')
const surnameInput =document.querySelector('#surname')
const phoneInput =document.querySelector('#phone')
const gmailInput =document.querySelector('#gmail')
const resultInput =document.querySelector('#input_result')
const btnInput =document.querySelector('#btn-section')


const regExp = /^\+996 [5729]\d{2} \d{2}-\d{2}-\d{2}$/
const regExpN = /^[A-Z]/
const regExpS = /^[A-Z]/

//  const mask = new Imask(phoneInput,()=>{
//     mask: "+{996}(000)00-00-00";
// });
phoneInput.addEventListener('input', (event)=>{
    if (regExp.test(event.target.value)){
        phoneInput.style.borderColor = "green"
    }else {
        phoneInput.style.borderColor = "red"
    }
})
gmailInput.oninput = (event)=>{
    gmailInput.style.borderColor = 'green'
}

nameInput.oninput = (event)=>{
    if (regExpN.test(event.target.value)){
        nameInput.style.borderColor = "green"
    } else{
        nameInput.style.borderColor = "red"
    }
}
surnameInput.oninput = (event)=>{
    if (regExpS.test(event.target.value)){
        surnameInput.style.borderColor = "green"
    } else{
        surnameInput.style.borderColor = "red"
    }
}




const time_alert =document.querySelector('.time_table__alert')
const btnplush =document.querySelector('#btnplush')
const btnplusmin =document.querySelector('#btnplusmin')
const btnminush =document.querySelector('#btnminh')
const btnminmin =document.querySelector('#btnminmin')
let timeTable = [];

var inputHours;
var inputMinutes;

const addToTimeTable = (event) => {
    event.preventDefault();
    inputHours =document.querySelector('#input_hours').value;
    inputMinutes =document.querySelector('#input_minutes').value;
    let res = inputHours + ':' + inputMinutes;
    if(inputHours==="" && inputMinutes==="" || res==='00:00'){
        time_alert.innerHTML = 'Выберите время для записи!';
        time_alert.style.color = 'red';
    }else if(timeTable.includes(res)) {
        time_alert.innerHTML = 'Данное время не свободно! Выберите другое время!';
        time_alert.style.color = 'red';
    } else {
        timeTable.push(res);
        time_alert.innerHTML = `Вы записаны на время ${res}`;
        time_alert.style.color = 'green';
    }

}

btnInput.onclick = (e)=> {
    addToTimeTable(e);
}

let countH = 0;
let countM = 0;
const increaseHour = () => {
    countH++;
    if (countH < 0) {
        countH = 0;
    }
    inputHours = document.getElementById("input_hours").value = String(countH).padStart(2, "0");

}
const decreaseHour = () => {
    countH--;
    if (countH < 0) {
        countH = 0;
    }
    inputHours = document.getElementById("input_hours").value = String(countH).padStart(2, "0");
}


const increaseMin = () => {
    countM++;
    if (countM < 0) {
        countM = 0;
    }
    inputMinutes = document.getElementById("input_minutes").value = String(countM).padStart(2, "0");
}
const decreaseMin = () => {
    countM--;
    if (countM < 0) {
        countM = 0;
    }
    inputMinutes = document.getElementById("input_minutes").value = String(countM).padStart(2, "0");

}



const teethImg = document.querySelector('.teeth_clean__img');
const audio = document.getElementById('audio');

let count = 0;
teethImg.onclick= () => {
    audio.currentTime = 0;
    audio.play();


    setTimeout(() => {
        audio.pause();
    }, 1800);

    count++;
    if(count === 4) {
        count = 1;
    }
    teethImg.src = `../images/teeth${count+1}.jpg`;

}