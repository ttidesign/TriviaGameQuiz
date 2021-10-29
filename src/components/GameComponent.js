import { React, useState, useEffect } from 'react';


function GameComponent() {
//assign questions variable for storing questions from api    
const [questions, setQuestions] = useState([])
//assign score variable to store core
const [score, setScore] = useState()
//variable to check if game start
const [gameStart, setGameStart] = useState(false)


//function to fetch questions from api
const fetchQuestionsAPI = async () => {
const url =
	'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
    fetch(url)
    .then((res)=>res.json())
    //if api return array then set gameStart to true
    .then((data)=> {setQuestions(data); setGameStart(true) ;console.log(data)})
    //checking if questions return correctly
    //if there's error then log it
    .catch(error =>console.log(error))
}
//check if questions return
console.log(questions)
useEffect(() => {
	fetchQuestionsAPI();
	// eslint-disable-next-line
},[])

	return (
		<>
			<div>
                {/* if gameStart is true then render questions */}
                {gameStart && (
                    <div>
                        {questions.results.map((question)=> {
                            return(
                                <div>
                                    <p>{question.question}</p>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
		</>
	);
}

export default GameComponent