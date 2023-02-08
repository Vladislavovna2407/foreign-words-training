let card = document.querySelector(".flip-card");
function addClass() {
    card.classList.toggle("active");
}
card.addEventListener("click", addClass);

let cardFront = document.querySelector("#card-front");
let cardBack = document.querySelector("#card-back");
let example = document.querySelector(".flip-card-back span");
let answer = document.querySelector(".flip-card-back h1")

let index = 0; //Math.floor(Math.random() * 5);

let foreignWords = ['banan', 'dog', 'house', 'network', 'lemon'];
let explanation = ['banan improve mood', 'dog is the best friend people', 'house is place where you can living', 'network is application such as instagram', 'lemon is rich vitamins C'];
let translatedWords = ['банан', 'собака', 'дом', 'сеть', 'лимон'];

function setNewWord(wordIndex) {
    cardFront.textContent = foreignWords[wordIndex];
    example.textContent = explanation[wordIndex];
    answer.textContent = translatedWords[wordIndex];
}

setNewWord(index);


let buttonBack = document.querySelector("#back");
let buttonNext = document.querySelector("#next");


buttonNext.addEventListener("click", function () {
    if (index == foreignWords.length - 1) {
        buttonNext.setAttribute("disabled", "disabled")
    } else {
        index++;
        setNewWord(index);
        buttonBack.removeAttribute("disabled", "disabled");
    }

});

buttonBack.addEventListener("click", function () {
    if (index == 0) {
        buttonBack.setAttribute("disabled", "disabled");
    } else {
        index--;
        setNewWord(index);
        buttonNext.removeAttribute("disabled", "disabled");
    }

});

let currentWord = document.querySelector("#current-word");
let progress = document.querySelector("#words-progress");

function changeNumber() {

    if (index == 0) {
        currentWord.textContent = 1;
        progress.setAttribute("value", "20");
    } else if (index == 1) {
        currentWord.textContent = 2;
        progress.setAttribute("value", "40");
    } else if (index == 2) {
        currentWord.textContent = 3;
        progress.setAttribute("value", "60");
    } else if (index == 3) {
        currentWord.textContent = 4;
        progress.setAttribute("value", "80");
    } else if (index == 4) {
        currentWord.textContent = 5;
        progress.setAttribute("value", "100");
    }
}

buttonNext.addEventListener("click", changeNumber);
buttonBack.addEventListener("click", changeNumber);

let words;
let element;

let test = document.querySelector("#exam");
test.addEventListener("click", startTest)

let item = Math.floor(Math.random() * 5);
let examCards = document.querySelector(".card");
let container = document.querySelector(".content");
let containerCard = document.querySelector("#exam-cards");
let mixedWords = foreignWords.concat(translatedWords);
function startTest() {
    container.querySelector('.study-cards').style.display = "none";
    let studyMode = document.querySelector("#study-mode");
    studyMode.style.display = "none";
    let fragment = new DocumentFragment();
    let fragment2 = new DocumentFragment();

    let mixedWords = foreignWords.concat(translatedWords);
    for (let i = 0; i < mixedWords.length; i++) {

        let element = document.createElement("div");
        fragment.append(element);
        element.classList.add('card');
        containerCard.append(fragment);


        let words = document.createElement("h3");
        fragment2.append(words);
        element.append(fragment2);


        words.textContent = mixedWords[i];

    }



    let examProgress = document.querySelector("#exam-progress");
    examProgress.setAttribute("value", "0");

}

test.addEventListener("click", startTest);



function chooseCard(evt) {
    evt.target.closest(".card").classList.add('correct');

    if (evt.target.textContent == mixedWords[0]) {
        evt.target.classList.add("fade-out");
    } else if (evt.target.textContent == mixedWords[1]) {
            evt.target.classList.add("fade-out");
    } else if (evt.target.textContent == mixedWords[2]) {
        evt.target.classList.add("fade-out");
    }else if (evt.target.textContent == mixedWords[3]) {
            evt.target.classList.add("fade-out");
    } else if (evt.target.textContent == mixedWords[3]) {
        evt.target.classList.add("fade-out");
    } else if (evt.target.textContent == mixedWords[4]) {
        evt.target.classList.add("fade-out");
  }
}



containerCard.addEventListener("click", chooseCard);


//const object = {
    //     banan: "банан",
    //     dog: "собака",
    //     house: "дом",
    //     network: "сеть",
    //     lemon: "лимон"
    // }