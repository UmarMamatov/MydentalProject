const sliderHeading = document.querySelector('#slider_info__heading');
const sliderText = document.querySelector('#slider_info__text');
const btnPrev = document.querySelector(".slider_info_nav");
const btnNext = document.querySelector(".slider_info_nav1");

let currentIndex = 0;
let intervalId;

const fetchData = async () => {
    try {
        const response = await fetch(`../data/slider.json`);
        const data = await response.json();
        displayItem(data[currentIndex]);

        btnPrev.addEventListener('click', () => navigateSlider(-1, data));
        btnNext.addEventListener('click', () => navigateSlider(1, data));

        startAutoRotation(data);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayItem = (item) => {
    const { name, info } = item;
    sliderHeading.innerHTML = name;
    sliderText.innerHTML = info;
};

const navigateSlider = (direction, data) => {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = data.length - 1;
    } else if (currentIndex >= data.length) {
        currentIndex = 0;
    }

    displayItem(data[currentIndex]);

    resetAutoRotation(data);
};

const startAutoRotation = (data) => {
    intervalId = setInterval(() => {
        navigateSlider(1, data);
    }, 2000);
};

const resetAutoRotation = (data) => {
    clearInterval(intervalId);
    startAutoRotation(data);
};

fetchData();
