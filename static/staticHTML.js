let score = 0;
let questionList;

function getQuestions() {
    let xReq = new XMLHttpRequest();
    xReq.onreadystatechange = displayQuestions;

    xReq.open('GET', '/questionInJSON', true);
    console.log(xReq.readyState);
    xReq.send();
}

function displayQuestions() {
    document.getElementById('restart-btn').innerHTML = 'restart';
    document.getElementById('restart-btn').hidden = false;
    if (this.readyState == 4 && this.status == 200) {
        let questionDiv = document.getElementById('questions-div');
        questionList = JSON.parse(this.responseText);
        let content = '';
        let questionIndex = 1;

        for (q of questionList) {
            content += `<div style='margin-bottom:10px;background-color:#f8edeb;border-radius:8px;padding:5px;'>`;
            content += questionIndex + '. ' + q.stem;
            content += '<br>';

            for (let op = 0; op < q.options.length; op++) {
                let option = `${q.options[op]}`;
                let optionID = `Q${questionIndex}-${q.options[op]}`;
                content += `<input onclick="optionClick(event)" type="radio" size="${questionIndex}" id="${optionID}" name="question${questionIndex}" value="${option}">`;
                content += `<label for="${optionID}">${option}</label><br>`
            }

            content += '</div>';
            questionIndex++;
        }
        content += `<button onclick='displayScore()'>`;
        content += `submit`;
        content += '</button>';
        questionDiv.innerHTML = content;
    }

}

function optionClick(event) {//check the answer and give feedback
    let currentQuesNumber = parseInt(event.target.id.charAt(1));
    let currentQuestion = questionList[currentQuesNumber - 1];
    if (event.target.value == currentQuestion.options[currentQuestion.answerIndex]) {
        score++;
    }
    else {
        alert('try again!');
    }
}

function displayScore() {
    console.log('displayScore() is called')
    document.getElementById('score').innerHTML = 'Your score is ' + score;
}

function restart() {
    socre = 0;
    location.reload();
}





