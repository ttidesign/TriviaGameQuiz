import {React} from 'react'
import {Link} from 'react-router-dom'

function Result (props) {
    return (
			<>
				<div>
					<p>You Scored:</p>
					<p>{props.score} / {props.questions.length} </p>
                    {props.userCorrectedAnswer.map((question) => {
                        return (
                            <div key={props.userCorrectedAnswer.indexOf(question)} >
                                <div>
                                    <p>
                                        {question.question}
                                    </p>
                                    <p> Your answer is: {question.is_correct}</p>
                                </div>

                            </div>
                        )
                    })}
                                <div> 
                                    <Link to='/'> 
                                    <button> Play Again? </button>
                                    </Link>
                                </div>
				</div>
			</>
		);
}

export default Result