import React,{useState} from 'react'
import './App.css'

const App = () => {

    const questions = [
        {
            questionText: 'Столица США?',
            answerOptions: [
                {answerText: 'Бостон', isCorrect: false},
                {answerText: 'Вашингтон', isCorrect: true},
                {answerText: 'Нью-Йорк', isCorrect: false},
                {answerText: 'Лос-Анджелес', isCorrect: true},
            ]
        },
        {
            questionText: 'О чем говорит тэг <p align="right"> … </p>?',
            answerOptions: [
                {answerText: 'Текст, заключенный в тэг, будет расположен с правой части страницы', isCorrect: false},
                {answerText: 'Текст, заключенный в тэг, будет расположен по центру страницы', isCorrect: true},
                {answerText: 'Текст, заключенный в тэг, будет расположен по левому краю страницы', isCorrect: false},
            ]
        },
        {
            questionText: 'Какие единицы измерения могут использоваться для атрибута ширины?',
            answerOptions: [
                {answerText: 'Миллиметры и сантиметры', isCorrect: false},
                {answerText: 'Пиксели и %', isCorrect: true},
                {answerText: 'Пиксели и миллиметры', isCorrect: false},
            ]
        },
        {
            questionText: 'Что содержит в себе атрибут href?',
            answerOptions: [
                {answerText: 'URL страницы, на которую произойдет перенаправление', isCorrect: true},
                {answerText: 'Имя страницы, на которую произойдет перенаправление', isCorrect: false},
                {answerText: 'Указание на то, где будет открываться новая страница: в том же или новом окне', isCorrect: false},
            ]
        },
        {
            questionText: 'Укажите тэг, который соответствует элементу списка:',
            answerOptions: [
                {answerText: '<ol>', isCorrect: false},
                {answerText: '<ul>', isCorrect: false},
                {answerText: '<li>', isCorrect: true},
            ]
        },
    ]

const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)
const [showScore, setShowScore] = useState(false)


const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
        setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if ( nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion)
    }else{
        setShowScore(true)
    }
    
}

const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
}






    return (
        <div className='app'>

                


            {
                showScore
                   ?<div className='section__score'>
                        <div>Правильных ответов {score} из {questions.length}</div>
                        <button onClick={refresh} className='refresh__btn'>Попробовать еще раз...</button>
                    </div>
                       : <div className='quizz'>
                            <div className='question__section'>
                                <div className='question__count'>
                                    <span>Вопрос {currentQuestion + 1} </span> / {questions.length}
                                </div>
                                <div className='question__text'>{questions[currentQuestion].questionText}</div>                   
                            </div>
                            <div className='answer__section'>
                                    {questions[currentQuestion].answerOptions.map(item =>(
                                    <button
                                        onClick={() => handleAnswerOptionClick(item.isCorrect)}
                                    >{item.answerText}</button>
                                    )
                                    )}
                            </div> 
                        </div>            
            }





        </div>
    )
}

export default App
