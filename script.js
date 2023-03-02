let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    }, 
    {
        "question": "Was bedeutet das HTML Tag <b>",
        "answer_1": "Link",
        "answer_2": "Text Kursiv",
        "answer_3": "Text Fett",
        "answer_4": "Abstand",
        "right_answer": 3
    }, 
    {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right_answer": 4
    }, 
    {
        "question": "Was bedeutet das HTML Tag <br>",
        "answer_1": "Link",
        "answer_2": "Text Fett",
        "answer_3": "Abstand",
        "answer_4": "Farbe",
        "right_answer": 3
    }
];

let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;

   showQuestion();
   
};

function showQuestion(){
    let question = questions[currentQuestion];

document.getElementById('questiontext').innerHTML = question['question'];
document.getElementById('answer_1').innerHTML = question['answer_1'];
document.getElementById('answer_2').innerHTML = question['answer_2'];
document.getElementById('answer_3').innerHTML = question['answer_3'];
document.getElementById('answer_4').innerHTML = question['answer_4'];

}