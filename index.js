import places from './assets/places.json';

const getChoice = function () {
    const place = places[Math.floor(Math.random() * places.length)]
    return `${place.name}\n(${place.type})`;
};

const chooseAction = function (e) {
    e.preventDefault();
    const container = document.querySelector('.results');
    container.textContent = getChoice();
    document.querySelector('body').classList.add('has-result');
};

const resetAction = function (e) {
    e.preventDefault();
    const container = document.querySelector('.results');
    container.textContent = null;
    document.querySelector('body').classList.remove('has-result');
};

document.querySelector('.chooseButton').addEventListener('click', chooseAction);
document.querySelector('.resetButton').addEventListener('click', resetAction);
