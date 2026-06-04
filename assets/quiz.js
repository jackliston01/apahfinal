// x = doomer(-) / optimist(+), y = logic(-) / emotion(+)

const qbank = {
  "What do you think society will be like in a 100 years and why?": {
    1: "Things will probably look a lot worse because of problems like climate change, violent wars, and inequality will have caught up with us",
    2: "Things might get worse, and theres a good chance it won't ever get better",
    3: "It will probably be better, albeit hard, because humans always find a way to adapt",
    4: "Way better because of technology and cooperation that will solve the big problems we face today",
    5: { x: 1.0, y: 0.1 }
  },
  "You studied really hard for a test and still failed. What do you take away from it?": {
    1: "I'm just not good at tests.",
    2: "It kind of sucks. I probably owuldn't have done much better even if I studied more.",
    3: "It sucks, but I will figure out what went wrong and do better next time",
    4: "Every failure is good in the long run. This will just help me do better in the future. ",
    5: { x: 0.9, y: 0.2 }
  },
  "You are playing a semi-random board game and you are losing semi-badly halfway through. What do you do?": {
    1: "Check out and give up. It's basically over",
    2: "Try a little bit longer until there is an extremely low chance you could win.",
    3: "Keep playing for the fun of it and hope something changes",
    4: "Get even more into it. The feeling of winning after a comeback would be amazing.",
    5: { x: 0.7, y: 0.8 }
  },
  "Your friend comes to you upset about something and wants your  opinion. What do you do?": {
    1: "Make a clear pro and cons list. Really analyze the situation",
    2: "Ask some questions and then help.",
    3: "Listen and understand how they feel before I say anything",
    4: "Don't try to solve the problem but prioritze that your friend feels less anxious.",
    5: { x: 0.1, y: 0.95 }
  },
  "Looking at history, how would you describe human progress?": {
    1: "We solve one problem and create three more. Nothing is really getting better. ",
    2: "We make some progress, but we keep repeating the same mistakes over and over",
    3: "Overall we are trending in the right direction, even if it is slow and not always linear",
    4: "Humanity is  doing better than ever and the future looks really good",
    5: { x: 0.85, y: 0.15 }
  }
};


const numbers = [1, 2, 3, 4, 5];
for (let i = numbers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}

const four = [1, 2, 3, 4];
const letters = ["a", "b", "c", "d"];

function scramble() {
  for (let i = four.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [four[i], four[j]] = [four[j], four[i]];
  }
}

console.log(numbers);

aqbank = Object.keys(qbank);

for (let i = 0; i < 5; i++) {
  scramble();
  const question = document.createElement("div");
  const quiz = document.getElementById("quiz");
  question.setAttribute("class", "question");
  question.setAttribute("id", (i + 1));
  question.innerHTML = (`<label>${i + 1}. ${(aqbank[(numbers[i] - 1)])}</label>`);
  question.innerHTML += ("<br>");
  for (let k = 0; k < 4; k++) {
    question.innerHTML += (` <input type="radio" onchange=update(${i + 1}) name="${(i + 1)}" value='{"val": ${four[k]}, "mag": ${JSON.stringify(qbank[aqbank[numbers[i] - 1]][(5)])}}' >${letters[k]}. ${qbank[aqbank[numbers[i] - 1]][(four[k])]} <br></br>`);
  }
  quiz.appendChild(question);
}


function update(num) {
  const answer = document.querySelector(`input[name="${num}"]:checked`).value;
  console.log(answer);
  localStorage.setItem(num, (JSON.stringify(answer)));
}

function seeresults() {
  cont = true;
  for (let i = 1; i < 6; i++) {
    if (!localStorage.getItem(i)) {
      cont = false;
      alert(`You need to answer all questions. Question ${i} is blank.`);
      break;
    }
  }
  if (cont) {
    window.location.href = 'results.html';
  }
}
