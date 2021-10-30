import { React, useState, useEffect } from 'react';
import Result from './Result';

function GameComponent() {
	//variable for storing questions from api
	const [questions, setQuestions] = useState([]);
	//variable to keep track of current question and index
	const [currentQuestion, setCurrentQuestion] = useState(0);
	//variable to store core
	const [score, setScore] = useState(0);
	//variable to check if game start
	const [gameStart, setGameStart] = useState(false);
	//variable to end the game
	const [gameEnd, setGameEnd] = useState(false);
    //variable to keep track of corrected answer 
	const [userCorrectedAnswer, setUserCorrectedAnswer] = useState([]);

	//function to fetch questions from api
	const fetchQuestionsAPI = async () => {
		const url =
			'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
		fetch(url)
			.then((res) => res.json())
			//if api return array then set gameStart to true
			.then((data) => {
				setQuestions(data.results);
				setGameStart(true);
			})
			//checking if questions return correctly if there's error then log it
			.catch((error) => console.log(error));
	};

    //function to handle user's response
	const handleUserAnswer = (event) => {
		event.preventDefault();
        //if user answer correct then increase score, push to corrected answer array
		if (event.target.value === questions[currentQuestion].correct_answer) {
			setScore(score + 1);
			setUserCorrectedAnswer((correct) => [
				...correct,
				{
					is_correct: 'Correct',
					question: questions[currentQuestion].question,
				},
			]);
		} else {
			setUserCorrectedAnswer((correct) => [
				...correct,
				{
					is_correct: 'Incorrect',
					question: questions[currentQuestion].question,
				},
			]);
		}
		//check if current question is the last question, if not then increase question by 1
		if (currentQuestion + 1 < questions.length) {
			setCurrentQuestion(currentQuestion + 1);
        //if game is end then navigate to result page    
		} else {
			setGameEnd(true);
		}
	};
    //fetch questions api when page load
	useEffect(() => {
		fetchQuestionsAPI();
		// eslint-disable-next-line
	}, []);
    //if game end then render result page with variable passing down
	if (gameEnd) {
		return <Result score={score} userCorrectedAnswer={userCorrectedAnswer} questions={questions}> </Result>
	} else {
		return (
			<>
				<div>
					{/* if gameStart is true then render questions */}
					{gameStart && (
						<div>
							{/*update map method to render each question at a time */}
							{questions[currentQuestion].incorrect_answers.map(() => {
								return (
									<div key={currentQuestion} >
										<h1 className='title'> {questions[currentQuestion].category}</h1>
										<div className='question-box' >
											<p className='intro-text'>{questions[currentQuestion].question}</p>
										</div>
										<div>
											<p>
												{currentQuestion +1} of {questions.length}
											</p>
											<button className='general-button' onClick={handleUserAnswer} value='True'>
												TRUE
											</button>
											<button className='general-button' onClick={handleUserAnswer} value='False'>
												FALSE
											</button>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>
			</>
		);
	}
}

export default GameComponent;
