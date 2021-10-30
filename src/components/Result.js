import { React } from 'react';
import { Link } from 'react-router-dom';

function Result(props) {
	return (
		<>
			<div>
				<h2>You Scored:</h2>
				<h2>
					{props.score} / {props.questions.length}
				</h2>
				{props.userCorrectedAnswer.map((question) => {
					return (
						<div key={props.userCorrectedAnswer.indexOf(question)}>
							<div className='question-container'>
								<p>
									{props.userCorrectedAnswer.indexOf(question) + 1}/ {question.question}
								</p>
								<p>
									
									-Your answer is:
									<span className={question.is_correct}>
										
										{question.is_correct}
									</span>
								</p>
							</div>
						</div>
					);
				})}
				<div>
					<Link to='/'>
						<button className='general-button'> PLAY AGAIN? </button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Result;
