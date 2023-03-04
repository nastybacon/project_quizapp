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
let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3'); // Variable für "grünen" Ton
let AUDIO_FAIL = new Audio('audio/fail.mp3'); // Variable für "roten" Ton

function init() {
    document.getElementById('all-questions').innerHTML = questions.length; /** "Länge" der Fragen */
    showQuestion();
};
function showQuestion() {
    if (currentQuestion >= questions.length) { /** wenn der Wert der aktuellen Frage größer als die Menge der Fragen ist, dann */
        // Show End Screen
        document.getElementById('endScreen').style = ''; // sichtbar machen
        document.getElementById('questionBody').style = 'display: none'; // ausblenden

        document.getElementById('amount-of-guestions').innerHTML = questions.length; // gesamte Menge der Fragen
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions; // gesamte Menge der richtigen Antworten
        document.getElementById('header-image').src = 'img/cup.jpg'; // Bild beim Ergebnis ersetzten
    } else { // wenn nicht, dann Frage anzeigen

        let percent = (currentQuestion + 1) / questions.length; // ausrechnen wie viel Prozent eine Frage aktuell hat + (0+1) für die erste Frage
        percent = Math.round(percent * 100); // % anzeigen + runden (nicht 0.25, sondern 25)

        document.getElementById('progress-bar').innerHTML = `${percent}%`; // % mit Zahl*100 als Variable anzeigen 
        document.getElementById('progress-bar').style = `width: ${percent}%`; // die Prozentzahl auch für den blauen Balken verändern        
        
        console.log('Fortschritt', percent);

        let question = questions[currentQuestion]; /** wir machen einen Container und holen das erste Element aus dem Array raus */
       
        document.getElementById('question-number').innerHTML = currentQuestion + 1; /** die Nummer (0+1) der aktuellen Frage anzeigen  */
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}
function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection); /** Selected answer is answer_2 */
    let selectedQuestionNumber = selection.slice(-1); /** .slice(-1) ist der letzte Buchstabe von selection (=answer_3) */
    console.log('SelectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']); /** Current question is 3 */
    let idOfRightAnswer = `answer_${question['right_answer']}`; /** ID der richtigen Antwort */
    
    if (selectedQuestionNumber == question['right_answer']) { /** wenn selected question = richtige Antwort, dann */
        document.getElementById(selection).parentNode.classList.add('bg-success'); /** .parentNode für "Überklasse" | Bootstrap Klasse für grüne Buttons hinzugefügt */
        AUDIO_SUCCESS.play(); // abspielen des Souns bei RICHTIG
        rightQuestions++; // bei richtiger Antwort 0+1 | bei -- wird es um 1 verringert
   
    } else { /** wenn nicht, dann */

        console.log('Falsche Antwort!!!'); /** falsche Antwort */
        document.getElementById(selection).parentNode.classList.add('bg-danger'); /** Bootstrap Klasse für rote Buttons hinzugefügt */
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); /** die richtige Antwort gleichzeitig anzeigen */
        AUDIO_FAIL.play(); // abspielen des Sounds bei Falsch
    }
    document.getElementById('next-button').disabled = false; /** .disabled = false -> Button bei Eingabe "freischalten" */
}
function nextQuestion() { /** Funktion für den "Nächste Frage" Button */
    currentQuestion++; /** wir erhöhen unsere Variable von 0 auf 1 */
    document.getElementById('next-button').disabled = true; /** .disabled = true -> Button bei nächster Frage wieder deaktivieren */
    resetAnswerButtons() /** Funktion zum resetten der Buttons aufrufen */
    showQuestion(); /** die funktion für die nächste Variable anzeigen */
}
function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger'); /** die Klassen danger und success entfernen bei nächster Frage */
    document.getElementById('answer_1').parentNode.classList.remove('bg-success'); /** 8 mal für 4 Anworten */
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){ // Funktion für den "Neustart" Button
    document.getElementById('header-image').src = 'img/school.jpg'; // das esrte Bild wieder aufrufen
    document.getElementById('questionBody').style = '';  // questionBody wieder anzeigen
    document.getElementById('endScreen').style = 'display: none'; // Endscreen ausblenden
    rightQuestions = 0; // die richtigen Antworten auf 0 setzen
    currentQuestion = 0; // die aktuelle Frage auf 0 setzen
    init(); // die komplette Funktion wieder aufrufen
    
}