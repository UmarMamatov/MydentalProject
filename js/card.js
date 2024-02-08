const cards = document.querySelector('.cards')
let user = "https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg"
let photo = 'https://aesthetikadentalstudio.co.uk/wp-content/uploads/2017/06/download-4.jpeg'
const fetchZ = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=30')
    const data = await response.json();
    data.forEach((info)=>{
        let {title, body}=info
        const infoCard = document.createElement("div");
        infoCard.setAttribute("class","infoCard")
        infoCard.innerHTML= `
            <img class="img_card" src="${photo} ? ${photo}: ${user}" alt="${photo}">
            <h5>${title}</h5>
            <p>${body}</p> 
            
        `
        cards.append(infoCard)
    })
}
fetchZ();
