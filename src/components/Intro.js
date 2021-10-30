import { React } from 'react';
import { Link } from 'react-router-dom';

function Intro() {
	return (
		<>
			<div>
				<h1 className='title'>Welcome to the Trivia Challenge!</h1>
				<p className='intro-text'>
					You will be presented with 10 True or False questions.
				</p>
				<p className='intro-text'> Can you score 100%? </p>
			</div>

			<Link to='/game'>
				{' '}
				<button className='general-button'> BEGIN </button>{' '}
			</Link>
		</>
	);
}

export default Intro;
