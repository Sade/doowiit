const choiceList = [
    'African',
    'Burger King',
    'Dock\'s café',
    'Dragon Wok',
    'Hippopotamus',
    'Kebab',
    'Lebanon',
    'Mc Donald',
    'Mushi Mushi',
    'Naturalia',
    'Subway',
    'Sushi / Japanese',
    'Thaï',
    'Bakery',
];

const getChoice = function () {
    return choiceList[Math.floor(Math.random() * choiceList.length)];
};

const chooseAction = function (e) {
    e.preventDefault();
    const container = document.querySelector('.results');
    container.textContent = getChoice();
    e.currentTarget.style.display = 'none';
};

document.querySelector('.chooseButton').addEventListener('click', chooseAction)
