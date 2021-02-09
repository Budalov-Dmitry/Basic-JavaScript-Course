
var event, ok, turncount = 0,turn1 = {},turn2 = {},turn3 = {},turn4 = {};


event = gamePlay(works.a00,works.a1,works.a2,works.a3,works.a4,works.a5,works.a0);
turn1 = {
    question:works.a00,
    answer:event,
    correctAnswer:works.a2
};

switch (event) {
    case true: 
    alert("Ответ верный.\n следующий вопрос")
    event = gamePlay(works.b00,works.b1,works.b2,works.b3,works.b4,works.b5,works.b0);
    turn2 = {
        question: works.b00,
        answer: event,
        correctAnswer:works.b3
        };
        switch (event) {
            case true: 
            alert("Ответ верный.\n следующий вопрос")
            event = gamePlay(works.c00,works.c1,works.c2,works.c3,works.c4,works.c5,works.c0);
            turn3 = {
                question:works.c00,
                answer:event,
                correctAnswer:works.c3
            };
            switch (event) {
                case true: 
                alert("Ответ верный.\n следующий вопрос");
                event = gamePlay(works.d00,works.d1,works.d2,works.d3,works.d4,works.d5,works.d0);
                turn4 = {
                    question:works.d00,
                    answer:event,
                    correctAnswer:works.d2
                };
                switch (event) {
                    case true:
                        alert("вы победили");
                        break;
                    case false: 
                        alert("неверный ответ.Вы проиграли")
                        break;
                    default:
                        alert('Ошибка');
                }
                break;
                case false: 
                    alert("неверный ответ.Вы проиграли")
                    break;
                default:
                    alert('Ошибка');
            }
            break;
            case false: 
                alert("неверный ответ.Вы проиграли")
                break;
            default:
                alert('Ошибка');
        }
        break;
    case false: 
        alert("неверный ответ.Вы проиграли")
        break;
    default:
        alert('Ошибка');
       
}
alert('Спасибо за игру');

var answerLog = [turn1, turn2, turn3, turn4];
logOutput(answerLog)

//------------------------------------------
function isAnswer(q, event, correctAnswer) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    } else if (event == correctAnswer){
        return true;
    }
    
}

function gamePlay (quest, variant1, variant2, variant3, variant4, correctAnswer, answerSum) {
    var event = 0, ok;
    do {
        ok = false;
        event = +prompt(quest + variant1 + variant2 + variant3 + variant4 + '-1 - Выход из игры');
       
        if (event == -1) {
            break;
        }
    } while (ok);
    ok = isAnswer(answerSum, event, correctAnswer);
    if (ok){
        return true
    } else {
        return false
    }
}
function logOutput (array) {
    for (item of array) {
        if (item.answer == true) {
            console.log(item.question + "\n" + item.correctAnswer)
        }
    }
}