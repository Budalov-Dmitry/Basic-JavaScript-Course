//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok, turncount = 0,turn1 = {},turn2 = {},turn3 = {},turn4 = {},turn5 = {},turn6 = {},turn7 = {};


event = gamePlay(works.a00,works.a1,works.a2,works.a0);
turn1 = {
    turncount:++turncount,
    answer:event
};

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
    event = gamePlay(works.b00,works.b1,works.b2,works.b0);
    turn2 = {
        turncount:++turncount,
        answer:event
    };
       
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            event = gamePlay(works.d00,works.d1,works.d2,works.d0);
            turn3 = {
                turncount:++turncount,
                answer:event
            };
              

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
            event = gamePlay(works.d00,works.d1,works.d2,works.d0);
            turn4 = {
                turncount:++turncount,
                answer:event
            };
               

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
    event = gamePlay(works.c00,works.c1,works.c2,works.c0);
    turn5 = {
        turncount:++turncount,
        answer:event
    };
       
        switch (event) {
            case 1: // Второе действие
            event = gamePlay(works.d00,works.d1,works.d2,works.d0);
            turn6 = {
                turncount:++turncount,
                answer:event
            };
                
                break;
            case 2: // Второе действие
            event = gamePlay(works.d00,works.d1,works.d2,works.d0);
            turn7 = {
                turncount:++turncount,
                answer:event
            };
               
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
do {
    var n = +prompt("введите номер хода, или -1 для выхода");
    if (n == turn1.turncount ) {
        console.log(works.a00);
        if (turn1.answer == 1) {
            console.log(works.a1)
        } else { console.log(works.a2) }
    }
    if ( n == turn2.turncount) {
        console.log(works.b00);
        if (turn1.answer == 1) {
            console.log(works.b1)
        } else { console.log(works.b2) }
    }
    if (n == turn3.turncount ) {
        console.log(works.d00);
        if (turn1.answer == 1) {
            console.log(works.d1)
        } else { console.log(works.d2) }
    }
    if (n == turn4.turncount ) {
        console.log(works.d00);
        if (turn1.answer == 1) {
            console.log(works.d1)
        } else { console.log(works.d2) }
    }
    if (n == turn5.turncount ) {
        console.log(works.c00);
        if (turn1.answer == 1) {
            console.log(works.c1)
        } else { console.log(works.c2) }
    }
    if (n == turn6.turncount ) {
        console.log(works.d00);
        if (turn1.answer == 1) {
            console.log(works.d1)
        } else { console.log(works.d2) }
    }
    if (n == turn7.turncount ) {
        console.log(works.d00);
        if (turn1.answer == 1) {
            console.log(works.d1)
        } else { console.log(works.d2) }
    }
} while (n != -1)
    

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

function gamePlay (quest,variant1,variant2,answerSum) {
    var event, ok;
    do {
        ok = false;
        event = +prompt(quest + variant1 + variant2 + '-1 - Выход из игры');
       
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(answerSum, event);
        }
    } while (!ok);
    return event
}

