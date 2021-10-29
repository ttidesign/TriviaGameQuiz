import { React, useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'

function GameComponent() {
	//assign questions variable for storing questions from api
	const [questions, setQuestions] = useState([]);
	//variable to keep track of current question and index
	const [currentQuestion, setCurrentQuestion] = useState(0);
	//assign score variable to store core
	const [score, setScore] = useState(0);
	//variable to check if game start
	const [gameStart, setGameStart] = useState(false);
	const [gameEnd, setGameEnd] = useState(false);

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
			//checking if questions return correctly
			//if there's error then log it
			.catch((error) => console.log(error));
	};

	const handleUserAnswer = (event) => {
		event.preventDefault();
		console.log(event.target.value, currentQuestion);
		if (event.target.value === questions[currentQuestion].correct_answer) {
			setScore(score + 1);
			console.log(score);
		} else {
			console.log('incorrect answer');
		}
		//check if current question is the last question, if not then increase question by 1
		if (currentQuestion + 1 < questions.length) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setGameEnd(true);
		}
	};
	//check if questions return
	//console.log(questions)
	useEffect(() => {
		fetchQuestionsAPI();
		// eslint-disable-next-line
	}, []);
	if (gameEnd) {
		return <Redirect to='/result'/> ;
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
									<div key={currentQuestion}>
										<h3> {questions[currentQuestion].category}</h3>
										<div>
											<p>{questions[currentQuestion].question}</p>
										</div>
										<div>
											<p>
												{currentQuestion} of {questions.length}
											</p>
											<button onClick={handleUserAnswer} value='True'>
												TRUE
											</button>
											<button onClick={handleUserAnswer} value='False'>
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
