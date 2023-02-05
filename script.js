"strict mode";

//Declaration of the locations and variables::
const quizPage = document.querySelector(".quiz-box");
const home = document.querySelector(".home");
const pnc = document.querySelector("#pnc");
const pbb = document.querySelector("#pbb");
const poa = document.querySelector("#poa");
const pl = document.querySelector("#pl");
const optionList = document.querySelector(".option-list");
const queText = document.querySelector("#queText");
const options = document.querySelectorAll(".options");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");
let footer = document.querySelector(".foot-quiz");
const result = document.querySelector(".result-page");
const next = document.getElementById("next");
let timeCount = document.getElementById("timer");
let timeLine = document.getElementById("time-line");
let topicName = document.getElementById("topicName");

//Result page Locations::
let scoredMarks = document.getElementById("scored-marks");
let resultName = document.getElementById("result-name");
let timeTaken = document.getElementById("time-taken");
let correctAns = document.getElementById("correct-ans");
let wrongAns = document.getElementById("wrong-ans");
let percentage = document.getElementById("percentage");

//Answer Options::
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const goHome = document.getElementById("go-to-home");
const startAgain = document.getElementById("start-again");
let timeOverText = document.querySelector(".timeOver-text");
let totalAttempt = document.getElementById("total-que-attempted");
let body = document.body;
let shuffledQuetions, indexOfQuestion;
let marks = 0;
indexOfQuestion = 0;
let num = 1;
let nameOfUser;
let count;
let timeValue = 300;
// let timeValue = 274;
let arr = [];

//Submitting the form::
let usernamebtn = document.getElementById("user-name-btn");
let showName = document.getElementById("showName");
let inptext = document.getElementById("inp-text");
function submitForm(event) {
  showName.innerHTML = "Hello " + inptext.value + " !";
  //session storage
  event.preventDefault();
  nameOfUser = document.forms["welcome-form"]["name"].value;
  sessionStorage.setItem("name", nameOfUser);
  let x = String(nameOfUser);
  nameOfUser = x.trim(); //Triming the input and then checking for the conditions so that someone can not just provide space and proceed
  if (nameOfUser != "") {
    optionList.classList.remove("hide");
  } else {
    alert("Enter The Name To Proceed");
  }
}

// question timer
let queTimer = function (timeVlaue) {
  count = setInterval(Timer, 1000);
  // 300 sec is 1000 millisecond ; 274 millisecond is converted to 1 minute 300 sec.
  function Timer() {
    if (timeValue < 10) {
      timeCount.textContent = "0" + timeValue;
      timeValue--;
    } else if (timeValue > 0) {
      timeCount.textContent = timeValue;
      timeValue--;
    }

    if (timeValue < 0) {
      clearInterval(count);
      timeCount.textContent = "00";
      timeOverText.innerHTML = " OOPS!! Your Time is Over";
      showResult();
      body.classList.add("wrong");
    }
  }
};

//Function running the Quiz app::
function startPncQuiz() {
  //timer starts
  queTimer(timeValue);
  topicName.innerHTML = "Pipes and Cisterns";
  home.classList.add("hide");
  quizPage.classList.remove("hide");
  showPncQuestion(pncQueDB);
  ans1.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (pncQueDB[shuffledQuetions].ans == "ans1") {
      answer1.classList.add("correct");
      body.classList.add("correct");
      marks++;
      scoredMarks.innerHTML = marks;
    } else {
      answer1.classList.add("wrong");
      body.classList.add("wrong");
      if (pncQueDB[shuffledQuetions].ans == "ans2") {
        answer2.classList.add("correct");
      } else if (pncQueDB[shuffledQuetions].ans == "ans3") {
        answer3.classList.add("correct");
      } else if (pncQueDB[shuffledQuetions].ans == "ans4") {
        answer4.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  ans2.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (pncQueDB[shuffledQuetions].ans == "ans2") {
      marks++;
      scoredMarks.innerHTML = marks;
      answer2.classList.add("correct");

      body.classList.add("correct");
    } else {
      answer2.classList.add("wrong");
      body.classList.add("wrong");
      if (pncQueDB[shuffledQuetions].ans == "ans1") {
        answer1.classList.add("correct");
      } else if (pncQueDB[shuffledQuetions].ans == "ans3") {
        answer3.classList.add("correct");
      } else if (pncQueDB[shuffledQuetions].ans == "ans4") {
        answer4.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  ans3.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (pncQueDB[shuffledQuetions].ans == "ans3") {
      answer3.classList.add("correct");
      marks++;
      scoredMarks.innerHTML = marks;
      body.classList.add("correct");
    } else {
      answer3.classList.add("wrong");
      body.classList.add("wrong");
      if (pncQueDB[shuffledQuetions].ans == "ans2") {
        answer2.classList.add("correct");
      } else if (pncQueDB[shuffledQuetions].ans == "ans1") {
        answer1.classList.add("correct");
      } else if (pncQueDB[shuffledQuetions].ans == "ans4") {
        answer4.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  ans4.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (pncQueDB[shuffledQuetions].ans == "ans4") {
      answer4.classList.add("correct");
      marks++;
      scoredMarks.innerHTML = marks;
      body.classList.add("correct");
    } else {
      answer4.classList.add("wrong");
      body.classList.add("wrong");
      if (pncQueDB[shuffledQuetions].ans == "ans2") {
        answer2.classList.add("correct");
      } else if (pncQueDB[shuffledQuetions].ans == "ans3") {
        answer3.classList.add("correct");
      } else if (pncQueDB[shuffledQuetions].ans == "ans1") {
        answer1.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });

  next.addEventListener("click", function () {
    if (indexOfQuestion < pncQueDB.length - 1) {
      indexOfQuestion++;
      num++;
      showPncQuestion();
    } else {
      showResult();
    }
  });
  startAgain.addEventListener("click", function playAgain() {
    arr = [];
    indexOfQuestion = 0;
    marks = 0;
    scoredMarks.innerHTML = marks;
    indexOfQuestion = 0;
    num = 1;
    timeOverText.innerHTML = "";
    result.classList.add("hide");
    quizPage.classList.remove("hide");
    clearInterval(count);
    timeValue = 300;
    queTimer(timeValue);
    showPncQuestion();
  });
}

function startPbbQuiz() {
  queTimer(timeValue);
  topicName.innerHTML = "Probablity";
  home.classList.add("hide");
  quizPage.classList.remove("hide");
  showPbbQuestion(pbbQueDB);
  ans1.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (pbbQueDB[shuffledQuetions].ans == "ans1") {
      answer1.classList.add("correct");
      body.classList.add("correct");
      marks++;
      scoredMarks.innerHTML = marks;
    } else {
      answer1.classList.add("wrong");
      body.classList.add("wrong");
      if (pbbQueDB[shuffledQuetions].ans == "ans2") {
        answer2.classList.add("correct");
      } else if (pbbQueDB[shuffledQuetions].ans == "ans3") {
        answer3.classList.add("correct");
      } else if (pbbQueDB[shuffledQuetions].ans == "ans4") {
        answer4.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  ans2.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (pbbQueDB[shuffledQuetions].ans == "ans2") {
      marks++;
      scoredMarks.innerHTML = marks;
      answer2.classList.add("correct");
      body.classList.add("correct");
    } else {
      answer2.classList.add("wrong");
      body.classList.add("wrong");
      if (pbbQueDB[shuffledQuetions].ans == "ans1") {
        answer1.classList.add("correct");
      } else if (pbbQueDB[shuffledQuetions].ans == "ans3") {
        answer3.classList.add("correct");
      } else if (pbbQueDB[shuffledQuetions].ans == "ans4") {
        answer4.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  ans3.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (pbbQueDB[shuffledQuetions].ans == "ans3") {
      answer3.classList.add("correct");
      body.classList.add("correct");
      marks++;
      scoredMarks.innerHTML = marks;
    } else {
      answer3.classList.add("wrong");
      body.classList.add("wrong");
      if (pbbQueDB[shuffledQuetions].ans == "ans2") {
        answer2.classList.add("correct");
      } else if (pbbQueDB[shuffledQuetions].ans == "ans1") {
        answer1.classList.add("correct");
      } else if (pbbQueDB[shuffledQuetions].ans == "ans4") {
        answer4.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  ans4.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (pbbQueDB[shuffledQuetions].ans == "ans4") {
      answer4.classList.add("correct");
      body.classList.add("correct");
      marks++;
      scoredMarks.innerHTML = marks;
    } else {
      answer4.classList.add("wrong");
      body.classList.add("wrong");
      if (pbbQueDB[shuffledQuetions].ans == "ans2") {
        answer2.classList.add("correct");
      } else if (pbbQueDB[shuffledQuetions].ans == "ans3") {
        answer3.classList.add("correct");
      } else if (pbbQueDB[shuffledQuetions].ans == "ans1") {
        answer1.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  next.addEventListener("click", function () {
    if (indexOfQuestion < pbbQueDB.length - 1) {
      indexOfQuestion++;
      num++;
      showPbbQuestion();
    } else {
      showResult();
    }
  });
  startAgain.addEventListener("click", function playAgain() {
    arr = [];
    indexOfQuestion = 0;
    marks = 0;
    scoredMarks.innerHTML = marks;
    indexOfQuestion = 0;
    num = 1;
    timeOverText.innerHTML = "";
    result.classList.add("hide");
    quizPage.classList.remove("hide");
    clearInterval(count);
    timeValue = 300;
    // timeValue = 274;
    queTimer(timeValue);
    showPbbQuestion();
  });
}

function startPoaQuiz() {
  queTimer(timeValue);
  topicName.innerHTML = "Problems on Ages";
  home.classList.add("hide");
  quizPage.classList.remove("hide");
  showPoaQuestion(poaQueDB);
  ans1.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (poaQueDB[shuffledQuetions].ans == "ans1") {
      answer1.classList.add("correct");
      body.classList.add("correct");
      marks++;
      scoredMarks.innerHTML = marks;
    } else {
      answer1.classList.add("wrong");
      body.classList.add("wrong");
      if (poaQueDB[shuffledQuetions].ans == "ans2") {
        answer2.classList.add("correct");
      } else if (poaQueDB[shuffledQuetions].ans == "ans3") {
        answer3.classList.add("correct");
      } else if (poaQueDB[shuffledQuetions].ans == "ans4") {
        answer4.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  ans2.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (poaQueDB[shuffledQuetions].ans == "ans2") {
      marks++;
      scoredMarks.innerHTML = marks;
      answer2.classList.add("correct");
      body.classList.add("correct");
    } else {
      answer2.classList.add("wrong");
      body.classList.add("wrong");
      if (poaQueDB[shuffledQuetions].ans == "ans1") {
        answer1.classList.add("correct");
      } else if (poaQueDB[shuffledQuetions].ans == "ans3") {
        answer3.classList.add("correct");
      } else if (poaQueDB[shuffledQuetions].ans == "ans4") {
        answer4.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  ans3.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (poaQueDB[shuffledQuetions].ans == "ans3") {
      answer3.classList.add("correct");
      body.classList.add("correct");
      marks++;
      scoredMarks.innerHTML = marks;
    } else {
      answer3.classList.add("wrong");
      body.classList.add("wrong");
      if (poaQueDB[shuffledQuetions].ans == "ans2") {
        answer2.classList.add("correct");
      } else if (poaQueDB[shuffledQuetions].ans == "ans1") {
        answer1.classList.add("correct");
      } else if (poaQueDB[shuffledQuetions].ans == "ans4") {
        answer4.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  ans4.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (poaQueDB[shuffledQuetions].ans == "ans4") {
      answer4.classList.add("correct");
      body.classList.add("correct");
      marks++;
      scoredMarks.innerHTML = marks;
    } else {
      answer4.classList.add("wrong");
      body.classList.add("wrong");
      if (poaQueDB[shuffledQuetions].ans == "ans2") {
        answer2.classList.add("correct");
      } else if (poaQueDB[shuffledQuetions].ans == "ans3") {
        answer3.classList.add("correct");
      } else if (poaQueDB[shuffledQuetions].ans == "ans1") {
        answer1.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  next.addEventListener("click", function () {
    if (indexOfQuestion < poaQueDB.length - 1) {
      indexOfQuestion++;
      num++;
      showPoaQuestion();
    } else {
      showResult();
    }
  });
  startAgain.addEventListener("click", function playAgain() {
    arr = [];
    indexOfQuestion = 0;
    marks = 0;
    scoredMarks.innerHTML = marks;
    indexOfQuestion = 0;
    num = 1;
    timeOverText.innerHTML = "";
    result.classList.add("hide");
    quizPage.classList.remove("hide");
    clearInterval(count);
    timeValue = 300;
    queTimer(timeValue);
    showPoaQuestion();
  });
}

function startPlQuiz() {
  queTimer(timeValue);
  topicName.innerHTML = "Profit and Loss";
  home.classList.add("hide");
  quizPage.classList.remove("hide");
  showPlQuestion(plQueDB);
  ans1.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (plQueDB[shuffledQuetions].ans == "ans1") {
      answer1.classList.add("correct");
      body.classList.add("correct");
      marks++;
      scoredMarks.innerHTML = marks;
    } else {
      answer1.classList.add("wrong");
      body.classList.add("wrong");
      if (plQueDB[shuffledQuetions].ans == "ans2") {
        answer2.classList.add("correct");
      } else if (plQueDB[shuffledQuetions].ans == "ans3") {
        answer3.classList.add("correct");
      } else if (plQueDB[shuffledQuetions].ans == "ans4") {
        answer4.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  ans2.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (plQueDB[shuffledQuetions].ans == "ans2") {
      marks++;
      scoredMarks.innerHTML = marks;
      answer2.classList.add("correct");
      body.classList.add("correct");
    } else {
      answer2.classList.add("wrong");
      body.classList.add("wrong");
      if (plQueDB[shuffledQuetions].ans == "ans1") {
        answer1.classList.add("correct");
      } else if (plQueDB[shuffledQuetions].ans == "ans3") {
        answer3.classList.add("correct");
      } else if (plQueDB[shuffledQuetions].ans == "ans4") {
        answer4.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  ans3.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (plQueDB[shuffledQuetions].ans == "ans3") {
      answer3.classList.add("correct");
      body.classList.add("correct");
      marks++;
      scoredMarks.innerHTML = marks;
    } else {
      answer3.classList.add("wrong");
      body.classList.add("wrong");
      if (plQueDB[shuffledQuetions].ans == "ans2") {
        answer2.classList.add("correct");
      } else if (plQueDB[shuffledQuetions].ans == "ans1") {
        answer1.classList.add("correct");
      } else if (plQueDB[shuffledQuetions].ans == "ans4") {
        answer4.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  ans4.addEventListener("click", function () {
    answer1.classList.add("pointer-events");
    answer2.classList.add("pointer-events");
    answer3.classList.add("pointer-events");
    answer4.classList.add("pointer-events");
    if (plQueDB[shuffledQuetions].ans == "ans4") {
      answer4.classList.add("correct");
      marks++;
      scoredMarks.innerHTML = marks;
      body.classList.add("correct");
    } else {
      answer4.classList.add("wrong");
      body.classList.add("wrong");
      if (plQueDB[shuffledQuetions].ans == "ans2") {
        answer2.classList.add("correct");
      } else if (plQueDB[shuffledQuetions].ans == "ans3") {
        answer3.classList.add("correct");
      } else if (plQueDB[shuffledQuetions].ans == "ans1") {
        answer1.classList.add("correct");
      }
    }
    footer.classList.remove("hide");
  });
  next.addEventListener("click", function () {
    if (indexOfQuestion < plQueDB.length - 1) {
      indexOfQuestion++;
      num++;

      showPlQuestion();
    } else {
      showResult();
    }
  });
  startAgain.addEventListener("click", function playAgain() {
    arr = [];

    indexOfQuestion = 0;
    marks = 0;
    scoredMarks.innerHTML = marks;
    indexOfQuestion = 0;
    num = 1;
    timeOverText.innerHTML = "";
    result.classList.add("hide");
    quizPage.classList.remove("hide");
    clearInterval(count);
    timeValue = 300;
    // timeValue = 274;
    queTimer(timeValue);
    showPlQuestion();
  });
}

function showPncQuestion() {
  answer1.classList.remove("pointer-events");
  answer2.classList.remove("pointer-events");
  answer3.classList.remove("pointer-events");
  answer4.classList.remove("pointer-events");
  body.classList.remove("wrong");
  body.classList.remove("correct");
  answer1.classList.remove("correct");
  answer1.classList.remove("wrong");
  answer2.classList.remove("correct");
  answer2.classList.remove("wrong");
  answer3.classList.remove("correct");
  answer3.classList.remove("wrong");
  answer4.classList.remove("correct");
  answer4.classList.remove("wrong");
  footer.classList.add("hide");

  // for shuffling the questions  random question:

  shuffledQuetions = Math.floor(
    Math.random() * (pncQueDB.length - (0 + 1) + 1)
  );

  if (!arr.includes(shuffledQuetions)) {
    arr.push(shuffledQuetions);

    //changing the questions:
    queText.innerHTML = "Q" + num + "." + pncQueDB[shuffledQuetions].question;

    //changing the answers::
    ans1.innerHTML = pncQueDB[shuffledQuetions].a;
    ans2.innerHTML = pncQueDB[shuffledQuetions].b;
    ans3.innerHTML = pncQueDB[shuffledQuetions].c;
    ans4.innerHTML = pncQueDB[shuffledQuetions].d;
  } else {
    showPncQuestion();
  }
}

function showPbbQuestion() {
  answer1.classList.remove("pointer-events");
  answer2.classList.remove("pointer-events");
  answer3.classList.remove("pointer-events");
  answer4.classList.remove("pointer-events");
  body.classList.remove("wrong");
  body.classList.remove("correct");
  answer1.classList.remove("correct");
  answer1.classList.remove("wrong");
  answer2.classList.remove("correct");
  answer2.classList.remove("wrong");
  answer3.classList.remove("correct");
  answer3.classList.remove("wrong");
  answer4.classList.remove("correct");
  answer4.classList.remove("wrong");
  footer.classList.add("hide");
  // for shuffling the questions:
  shuffledQuetions = Math.floor(
    Math.random() * (pbbQueDB.length - (0 + 1) + 1)
  );

  if (!arr.includes(shuffledQuetions)) {
    arr.push(shuffledQuetions);

    //changing the questions:
    queText.innerHTML = "Q" + num + "." + pbbQueDB[shuffledQuetions].question;

    //changing the answers::
    ans1.innerText = pbbQueDB[shuffledQuetions].a;
    ans2.innerText = pbbQueDB[shuffledQuetions].b;
    ans3.innerText = pbbQueDB[shuffledQuetions].c;
    ans4.innerText = pbbQueDB[shuffledQuetions].d;
  } else {
    showPbbQuestion();
  }
}

function showPoaQuestion() {
  answer1.classList.remove("pointer-events");
  answer2.classList.remove("pointer-events");
  answer3.classList.remove("pointer-events");
  answer4.classList.remove("pointer-events");
  body.classList.remove("wrong");
  body.classList.remove("correct");
  answer1.classList.remove("correct");
  answer1.classList.remove("wrong");
  answer2.classList.remove("correct");
  answer2.classList.remove("wrong");
  answer3.classList.remove("correct");
  answer3.classList.remove("wrong");
  answer4.classList.remove("correct");
  answer4.classList.remove("wrong");
  footer.classList.add("hide");
  // for shuffling the questions:
  shuffledQuetions = Math.floor(Math.random() * (poaQueDB.length - (0 + 1) + 1));
  //changing the questions:
  queText.innerHTML = "Q" + num + "." + poaQueDB[shuffledQuetions].question;

  if (!arr.includes(shuffledQuetions)) {
    arr.push(shuffledQuetions);

    //changing the answers::
    ans1.innerText = poaQueDB[shuffledQuetions].a;
    ans2.innerText = poaQueDB[shuffledQuetions].b;
    ans3.innerText = poaQueDB[shuffledQuetions].c;
    ans4.innerText = poaQueDB[shuffledQuetions].d;
  } else {
    showPoaQuestion();
  }
}

function showPlQuestion() {
  answer1.classList.remove("pointer-events");
  answer2.classList.remove("pointer-events");
  answer3.classList.remove("pointer-events");
  answer4.classList.remove("pointer-events");
  body.classList.remove("wrong");
  body.classList.remove("correct");
  answer1.classList.remove("correct");
  answer1.classList.remove("wrong");
  answer2.classList.remove("correct");
  answer2.classList.remove("wrong");
  answer3.classList.remove("correct");
  answer3.classList.remove("wrong");
  answer4.classList.remove("correct");
  answer4.classList.remove("wrong");
  footer.classList.add("hide");
  // for shuffling the questions:
  shuffledQuetions = Math.floor(
    Math.random() * (plQueDB.length - (0 + 1) + 1)
  );
  //changing the questions:
  queText.innerHTML = "Q" + num + "." + plQueDB[shuffledQuetions].question;

  if (!arr.includes(shuffledQuetions)) {
    arr.push(shuffledQuetions);

    //changing the answers::
    ans1.innerText = plQueDB[shuffledQuetions].a;
    ans2.innerText = plQueDB[shuffledQuetions].b;
    ans3.innerText = plQueDB[shuffledQuetions].c;
    ans4.innerText = plQueDB[shuffledQuetions].d;
  } else {
    showPlQuestion();
  }
}

// Gettimg value of userName from Session Storage::
sessionStorage.getItem("name", nameOfUser);

function showResult() {
  clearInterval(count);

  if (marks >= 7) {
    timeOverText.innerHTML = "Hey You were Awesome!!";
    resultName.innerHTML = nameOfUser;
    timeTaken.innerHTML = `${300 - timer.innerHTML} seconds`;
    totalAttempt.innerHTML = `${indexOfQuestion + 1}`;
    correctAns.innerHTML = `${marks}`;
    wrongAns.innerHTML = `${10 - marks}`;
    percentage.innerText = `${marks * 10}%`;
    quizPage.classList.add("hide");
    result.classList.remove("hide");
    body.classList.remove("wrong");
    body.classList.remove("correct");
    body.classList.add("correct");
  } else {
    resultName.innerHTML = nameOfUser;
    timeTaken.innerHTML = `${300 - timer.innerHTML} seconds`;
    totalAttempt.innerHTML = `${indexOfQuestion + 1}`;
    correctAns.innerHTML = `${marks}`;
    wrongAns.innerHTML = `${10 - marks}`;
    percentage.innerText = `${marks * 10}%`;
    quizPage.classList.add("hide");
    result.classList.remove("hide");
    body.classList.remove("wrong");
    body.classList.remove("correct");
  }
  console.log(count);
  console.log(queTimer);
}

function myHome() {
  sessionStorage.clear();
  document.location.reload(true);
}
