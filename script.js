const card = document.querySelector(".flip-card");
function addClass() {
    card.classList.toggle("active");
}
card.addEventListener("click", addClass);

const cardFront = document.querySelector("#card-front");
const cardBack = document.querySelector("#card-back");
const example = document.querySelector(".flip-card-back span");
const answer = document.querySelector(".flip-card-back h1")

let index = 0;

const foreignWords = ['banan', 'dog', 'house', 'network', 'lemon'];
const explanations = ['banan improve mood', 'dog is the best friend people', 'house is place where you can living', 'network is application such as instagram', 'lemon is rich vitamins C'];
const translatedWords = ['банан', 'собака', 'дом', 'сеть', 'лимон'];

function setNewWord(wordIndex) {
    cardFront.textContent = foreignWords[wordIndex];
    example.textContent = explanations[wordIndex];
    answer.textContent = translatedWords[wordIndex];
}
setNewWord(index);

const buttonBack = document.querySelector("#back");
const buttonNext = document.querySelector("#next");

function returnPrevious () {
    if (index == foreignWords.length - 1) {
        buttonNext.setAttribute("disabled", "disabled")
    } else {
        index++;
        setNewWord(index);
        buttonBack.removeAttribute("disabled", "disabled");
    }

};
buttonNext.addEventListener("click", returnPrevious)

function returnNext() {
    if (index == 0) {
        buttonBack.setAttribute("disabled", "disabled");
    } else {
        index--;
        setNewWord(index);
        buttonNext.removeAttribute("disabled", "disabled");
    }

};
buttonBack.addEventListener("click", returnNext)

const currentWord = document.querySelector("#current-word");
const progress = document.querySelector("#words-progress");

function changeNumber() {
    currentWord.textContent = index + 1;
    progress.setAttribute("value", (index + 1) * 20);
}

buttonNext.addEventListener("click", changeNumber);
buttonBack.addEventListener("click", changeNumber);

const test = document.querySelector("#exam");
const examCards = document.querySelector(".card");
const container = document.querySelector(".content");
const containerCard = document.querySelector("#exam-cards");
const mixedWords = foreignWords.concat(translatedWords).sort((a, b) => 0.5 - Math.random());

const examProgress = document.querySelector("#exam-progress");
examProgress.setAttribute("value", "0");
const correctlyAnswered = document.querySelector(".hidden h3")

function startTest() {

    container.querySelector('.study-cards').style.display = "none";
    let studyMode = document.querySelector("#study-mode");
    studyMode.style.display = "none";
    let fragment = new DocumentFragment();


    for (let i = 0; i < mixedWords.length; i++) {

        let element = document.createElement("div");
        fragment.append(element);
        element.classList.add('card');
        containerCard.append(fragment);


        let words = document.createElement("h3");
        fragment.append(words);
        element.append(fragment);
        words.textContent = mixedWords[i];
        
    }

   
    const sidebarMenu = document.querySelector(".sidebar")
    sidebarMenu.append(correctlyAnswered);
    sidebarMenu.append(examProgress);
    const correctPercent = document.querySelector("#correct-percent");
    correctlyAnswered.append(correctPercent);
   
}

test.addEventListener("click", startTest);

const translations = {
    banan: "банан",
    "банан": "banan",
    dog: "собака",
    "собака": "dog",
    house: "дом",
    "дом": "house",
    network: "сеть",
    "сеть" : "network",
    lemon: "лимон",
    "лимон": "lemon"
};

let previousCard = null;
const totalPairCount = 5;
let currentPairCount = 0;

function makeMatch(evt) {

    const card = evt.target.closest(".card");
    
    if (previousCard == null){
        previousCard = card;
        card.classList.add('correct');
    } else {
        const currentCardText = card.querySelector('h3').textContent;
        const previousCardText = previousCard.querySelector('h3').textContent;
        const translation = translations[currentCardText];
          
        if (translation == previousCardText) {
            card.classList.add("fade-out");
            previousCard.classList.add("fade-out");
            previousCard = null;

            currentPairCount++;
            examProgress.setAttribute("value", 20 * currentPairCount);
            correctlyAnswered.textContent= `Правильно отвечено ${20 * currentPairCount}%`;
        
            if(currentPairCount == totalPairCount) {
                setTimeout(() => {
                    alert('Все слова выучены, ты молодец!');
                }, 300);
            }
        } else {
            card.classList.add("wrong");

            setTimeout(() => {
                card.classList.remove("wrong");
                previousCard.classList.remove('correct');
                previousCard = null;
            }, 500);
            
        }
    }
    
}

containerCard.addEventListener("click", makeMatch);

