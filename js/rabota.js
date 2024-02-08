const wrapper = document.querySelector('.wrapper-second')
let dataObj;
let defaultPhoto = "https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg"

const request = new XMLHttpRequest();
request.open('GET', '../data/rabota.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.addEventListener("load", () => {
    let dataObj = JSON.parse(request.response);
    console.log(dataObj.name)
    dataObj.forEach((person)=>{
        const {name,  age, photo, gender}= person
        const personCard = document.createElement("div")
        personCard.setAttribute("class","personCard")
        personCard.innerHTML=`
            <div class="userPhoto">
            <img src="${photo || defaultPhoto}" alt="${name}" >
            </div>
            <h2>${name}</h2>
            
        `
        wrapper.append(personCard)
    })
})







