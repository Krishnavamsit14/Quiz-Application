var quizdata=[

    {
        question : 'Which framework is related to JS',
        a :'.net',
        b :'.flask',
        c :'.react',
        d :'django',
        correct : 'c'
    },
    {
        question : 'Which is not a programming language',
        a :'HTML',
        b :'python',
        c :'Java',
        d :'JS',
        correct : 'a'
    },
    {
        question : 'Which is not a framework',
        a :'react',
        b :'javascript',
        c :'angular',
        d :'django',
        correct : 'b'
    },
    {
        question : 'css stands for',
        a :'cascading style state',
        b :'cascading style sheet',
        c :'cascading sheet style',
        d :'none',
        correct : 'b'
    }

]

var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')
var submit = document.getElementById('submit')

var current_question = 0
var quiz_score = 0

loadQuiz()

function loadQuiz(){
    deselect()
    question.innerHTML = quizdata[current_question].question
    option_a.innerHTML = quizdata[current_question].a
    option_b.innerHTML = quizdata[current_question].b
    option_c.innerHTML = quizdata[current_question].c
    option_d.innerHTML = quizdata[current_question].d
}
function deselect(){
    answer.forEach(answer=>answer.checked=false);
}

submit.addEventListener('click', ()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked){
            selectedoption = answer.id
        }
    });
    if(selectedoption==quizdata[current_question].correct){
        quiz_score+=1
    }
    current_question+=1
    if(current_question==quizdata.length){
        document.getElementById('quizdiv').innerHTML=`<h1>You have answered ${quiz_score} out of ${quizdata.length} correctly</h1>`
    }
    else{
        loadQuiz()
    }
})