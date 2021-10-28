import { React, useState, useEffect } from 'react';


function GameComponent() {
//assign questions variable for storing questions from api    
const [questions, setQuestions] = useState([])
//assign score variable to store core
const [score, setScore] = useState()


//function to fetch questions from api
const fetchQuestionsAPI = async () => {
const url =
	'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
    fetch(url)
    .then((res)=>res.json())
    .then((data)=> {setQuestions(data) ;console.log(data)})
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
                Game component should show up
            </div>
		</>
	);
}

export default GameComponent