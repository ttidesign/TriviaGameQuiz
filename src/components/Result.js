import {React} from 'react'

function Result (props) {
    console.log(props.score, props.userCorrectedAnswer)
    return (
			<>
				<div>
					<p>You Scored:</p>
					<p>{props.score} / {props.questions.length} </p>
				</div>
			</>
		);
}

export default Result