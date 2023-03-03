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

function init() {
    document.getElementById('all-questions').innerHTML = questions.length; /** "Länge" der Fragen */

    showQuestion();

};

function showQuestion() {
    let question = questions[currentQuestion]; /** wir machen einen Container und holen das erste Element aus dem Array raus */

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection); /** Selected answer is answer_2 */
    let selectedQuestionNumber = selection.slice(-1); /** .slice(-1) ist der letzte Buchstabe von selection (=answer_3) */
    console.log('SelectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']); /** Current question is 3 */

    let idOfRightAnswer = `answer_${question['right_answer']}`;
    /** ID der richtigen Antwort */

    if (selectedQuestionNumber == question['right_answer']) { /** wenn selected question = richtige Antwort, dann */
        console.log('Richtige Antwort!'); /** richtige Antwort */
        document.getElementById(selection).parentNode.classList.add('bg-success'); /** .parentNode für "Überklasse" | Bootstrap Klasse für grüne Buttons hinzugefügt */
    } else { /** wenn nicht, dann */
        console.log('Falsche Antwort!!!'); /** falsche Antwort */
        document.getElementById(selection).parentNode.classList.add('bg-danger'); /** Bootstrap Klasse für rote Buttons hinzugefügt */
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); /** die richtige Antwort gleichzeitig anzeigen */
    }
}