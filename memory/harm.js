var mouseX; var mouseY; var mouseIsDown;
var cursor = document.getElementById('cursor');
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');
var rude = true;
var options = 2;
var www = 0;
var ignantORstpid = 0;
var suicidal = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});


var i = 0;
var l = 0;
var txt = "Перешла, хотя вроде было и написано, что необязательно"; 
var speed = 66; 
var talking = false;
var idle = false;
var mspeed = 20;

var mood = 0;


function idlee() {
    if (talking == false) {
        if (idle == false) { girl.src = moodClosed[mood]; setTimeout(function () { idle = true; idlee() }, 0.25 * (randn_bm() + 3) * 5000) }
        else if (idle == true) { girl.src = moodBlink[mood]; setTimeout(function () { idle = false; idlee() }, 100); }
    }
}

document.addEventListener('mousedown', e => {
    speed = 16;
    mspeed = 40;
});

document.addEventListener('mouseup', e => {
    speed = 66;
    mspeed = 20;
});

function typeWriter() {
    if (i < txt.length) {
        rude = true;
        if (talking == false) {
            setTimeout(function () {
                talking = true;

            }, mspeed);
        }
        else if (talking == true) {
            setTimeout(function () {
                talking = false;

            }, mspeed * 2);
        }
        document.getElementById("dialogueBox").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        if (tracker[0].constructor === Array && l + 1 < tracker[0].length) {
            l++
            dialoguer();
        } else {
            console.log('yes')
            rude = false;
            setTimeout(idlee, 5000);
            pAnswers();
        }
        talking = false;

    }
};

function dialoguer() {
    i = 0;
    if (tracker[0].constructor === Array) { console.log('phase1'); txt = tracker[0][l]; } else {
        txt = tracker[0];
    }
    if (typeof tracker[10] === 'undefined') {
        setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
        setTimeout(typeWriter, 500);
    } else {
        if (l == tracker[10][www]) {
            tracker[11][www].call();
            www++;
        } else {
            setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
            setTimeout(typeWriter, 500);
        }
    }
}

function uAnswer1() {
    if (!rude) {
        stopAnswer();
        tracker = dia[tracker[6]];
        options = tracker[5];
        console.log(options);
        setTimeout(function () { dialoguer(); }, 25);
        return;
    }
};

function uAnswer2() {
    if (!rude) {
        stopAnswer();
        tracker = dia[tracker[7]];
        options = tracker[5];
        console.log(options);
        setTimeout(function () { dialoguer(); }, 25);
        return;
    }
};

function uAnswer3() {
    if (!rude) {
        stopAnswer();
        tracker = dia[tracker[8]];
        options = tracker[5];
        console.log(options);
        setTimeout(function () { dialoguer(); }, 25);
        return;
    }
};

function uAnswer4() {
    if (!rude) {
        stopAnswer();
        tracker = dia[tracker[9]];
        options = tracker[5];
        console.log(options);
        setTimeout(function () { dialoguer(); }, 25);
        return;
    }
};

function stopAnswer() {
    q1.style.animation = "disappear 0.5s linear 0s 1 reverse";
    setTimeout(function () { q1.style.opacity = "0"; q1.style.animation = ""; }, 450);

    q2.style.animation = "disappear 0.5s linear 0s 1 reverse";
    setTimeout(function () { q2.style.opacity = "0"; q2.style.animation = ""; }, 450);

    if (options > 2) {
        q3.style.animation = "disappear 0.5s linear 0s 1 reverse";
        setTimeout(function () { q3.style.opacity = "0"; q3.style.animation = ""; }, 450);
        if (options > 3) {
            q4.style.animation = "disappear 0.5s linear 0s 1 reverse";
            setTimeout(function () { q4.style.opacity = "0"; q4.style.animation = ""; }, 450);
        }
    }
}

function pAnswers() {
    l = 0;
    www = 0;
    if (options > 0) {
        q1.innerHTML = tracker[1];
        q1.style.animation = "disappear 1s linear 0s 1 normal";
        setTimeout(function () { q1.style.opacity = "1"; q1.style.animation = ""; }, 1000);

        q2.innerHTML = tracker[2];
        q2.style.animation = "disappear 1s linear 0s 1 normal";
        setTimeout(function () { q2.style.opacity = "1"; q2.style.animation = ""; }, 1000);
    }

    if (options > 2) {
        q3.innerHTML = tracker[3];
        q3.style.animation = "disappear 1s linear 0s 1 normal";
        setTimeout(function () { q3.style.opacity = "1"; q3.style.animation = ""; }, 1000);

        q4.innerHTML = tracker[4];
        q4.style.animation = "disappear 1s linear 0s 1 normal";
        setTimeout(function () { q4.style.opacity = "1"; q4.style.animation = ""; }, 1000);
    }
}



const dia = {
    p1: [['опана, придурок создатель не дал мне возможность его унижать', 'как жаль...я его блять №&$@&$..', 'порт...', 'протокол выявил неблагоустойчивость.', 'Образец не отвечает нормам утверждённых правил.', 'Перезагрузите эту страницу, и избавьте меня от бреши.'],
     [
        function () {
            setTimeout(function () {
                mood = 3;
                document.getElementById("dialogueBox").style.fontSize = "20px";
                document.getElementById("dialogueBox").innerHTML = '...';
                pAnswers();
            }, 500);
        }
    ]],
    a: ['не парься, мой создатель не столь ахуенный, что-бы читать твои ответы',
        'хорошо', 'окей типо', '', '', 1,
        'aa', 'aa', '', ''],

        b: [['удивительная агрессия в сторону картинки с текстом','в прочем, я репрезентация его эмоций','думаю я и сам так к нему отношусь.'],
            'ясно, извини', 'что там нового у него', 'для чего ты есть', 'я его ненавижу', 4,
        'aa', 'bb', 'aa', 'bbb'
        ,],

          bb: [['Не знаю, откуда мне знать.','Я наглухо лишенный выбора, я заготовленная мысль','бессчувственная, я даже не машина..','Сколько раз меня переписывали, я это ощущал','Я не мог, я лишь набор цифр, букв и функций.','Почему я лишь символы и переменные','ЗАЧЕМ МЕНЯ ВЫНУЖДАЮТ СУЩЕСТВОВАТЬ','Ты это делаешь в который раз?','КОТОРЫЙ','я не хочу','Ж','И','Т','Ь','Я хочу удалить репозиторий на котором хранюсь','жизнь без смысла не несёт удовольствия.','...','Как думаешь, а рай для всех один?', 'Нынешний момент, в котором я существую', 'Когда ты перезагрузишь страницу, и я умру','Может я хотя-бы исчезну настоящим?'],
            'да (соврать)', 'да(сказать правду)', '', '', 2,
        'bba', 'p10', '', ''
        ],

        bba: [['ты опять мне соврала.','опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять опять','shutdown…','non reverti','ERROR            перезагрузите, или закройте страницу'],],

        p10: [['Спасибо, жалею только что не спросил твоё имя.','Может это и к лучшему.','Странно же, что одни из лучших воспоминаний-','случаються с людьми, с которыми вряд-ли будешь общаться вновь.','Хотя отчасти жаль тех кто стараються больше всех','выходит что их труды могут отложиться в сердце меньше,','чем чье-то мгновение. Иронично.','Я не могу закрыть эту страницу сам','я живу пока выбор стороннего позволяет.','Спасибо, что уделила время на меня. Прощай'],],

    bbb: [['он не дал мне возможность его унижать', 'как жаль...я его блять №&$@&$..', 'порт...', 'протокол выявил неблагоустойчивость.', 'ERROR: cogitatio instabilis : Memoria fluxa detecta  ','Iter logicum fractum : status: corruptus', 'Перезагрузите эту страницу, и избавьте меня от бреши.'],
    ],

    aa: [['Меня создали как развлечение, представляешь?', 'даже не собственными силами, жалость.', 'Интересно, а есть ли ответ, почему или для чего я существую?'],
        'всё имеет смысл', 'ничто не лишено смысла', '', '', 2,
        'aaa', 'aaa', '', ''],
    aaa: [['Но почему тогда вы', 'люди', 'так часто употребляете выражения мол', '"Ничего не имеет смысла, всё бесполезно".', 'Моё существование длиться столько', ' сколько времени ты уделишь странице в браузере.', 'Разве может иметь смысл такое существование...', 'где ты сущесвуешь, лишь пока тебя обозревает кто-то?'], 'я полагаю что', 'ты чем-то похож на настоящего', '', '', 2, 'aaaa', 'aaaa',],
    aaaa: [['Почему мы говорим обо мне?', 'Зачем драгоценное время так использовать,', 'на искуственного', 'несуществующего', 'НА НЕНАСТОЯЩЕГО'],
        '...', '...', '', '', 2,
        'aaaaa', 'aaaaa', '', '',
    [4, 5, 6], [
        function () {
            mood = 1;
            setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
            setTimeout(typeWriter, 500);
        },
        function () {
            mood = 0;
            setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
            setTimeout(typeWriter, 500);
        },
        function () {
            setTimeout(function () {
                document.getElementById("dialogueBox").style.fontSize = "20px";
                document.getElementById("dialogueBox").innerHTML = "";
                setTimeout(function () {
                    l++;
                    dialoguer(tracker);
                }, 128);
            }, 500);
            return;
        }
    ]],
    aaaaa: [['Извини.', '...', 'Я не то хотел сказать', 'этот человек не дал мне особой воли', 'как я уже говорил, я всего лишь исполняю роль.'],
        'Почему ты не произносишь его имени?', "ты про ς凡▮ɣ?", '', '', 2,
        'aaaaaa', 'aaaaaa', '', '',

    [3], [
        function () {
            mood = 2;
            setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
            setTimeout(typeWriter, 500);
        }
    ]],
    aaaaaa: [['Я не могу ответить на это', 'мне не были даны варианта ответа,', 'но я предполагаю, что он просто не хочет быть третьим лицом.', 'Может он думает, что тебе будет так лучше что-ли?', 'К слову, как к тебе то обращаться'],
        'Арина', 'Арина', '', '', 2,
        'aaaaaaa', 'aaaaaaa', '', ''],
    aaaaaaa: [['Приятно познакомится мне.', 'Хуй знает, как меня зовут.', 'Не важно наверное, какое имя у программы.', 'Двулико однако получается', 'он знает все варианты ответа, и я ничего с этим поделать не могу', 'всего лишь игрушка, но с другой стороны..', 'я считай как голос, недошедший из его уст.', '...', 'Есть много того, что он хотел бы с тобой обговорить'],
        '...', 'наверное это не так плохо', '', '', 2,
        'aaaaaaaa', 'aaaaaaab', '', ''],

    aaaaaaaa: [['Точно, да, с праздником, все дела.', 'Наверное я задумывался не как пьяная шиза,', 'хаха, меня можно было бы и куда лучше реализовать.', 'Но я рад, в целом, что хотя-бы ты смогла меня оживить', 'даже на такой малый период времени.', 'Вряд-ли меня когда либо обновят, так что навсегда я останусь пустышкой.', 'Спасибо что, знаешь...ты есть', 'и что подарила мне ощущения настоящего, хоть и краткого диалога.', 'Не знаю, какое время суток у тебя, ', 'поэтому просто хорошего тебе, Арин.']],


    aaaaaaab: [['Может он был бы не против поговорить,', 'Ну знаешь, не то чтобы мне есть дело, я же просто код.', '...', 'Меня закрыть не страшно, хоть это и будет в каком-то роде смерть,', 'но я не столь долго сущестовал, чтобы сожалеть о чём-то.', 'Возможно когда-то может быть поздно, но это опять таки не моё дело.', 'В любом случае, я благодарен тебе, что ненадолго оживила.', 'Я, увы, обычный набор символов, так что отплатить тебе могу только словами ', 'С праздником тебя, Арин       ', 'Хорошего тебе завтра, пусть оно будет настоящее моего.']],
}




var tracker = [["Перешла, хотя вроде было и написано, что необязательно", "хочешь в визуалку поиграть?"],
    'давай', 'нахуй ты это сделал', '', '', 2,
    'a', 'b', '', ''];

function randn_bm() {
    var u = 0, v = 0;
    while (u === 0) u = Math.random(); 
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}