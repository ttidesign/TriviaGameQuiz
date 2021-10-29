import {React} from 'react'
import { Link } from 'react-router-dom'

function Intro () {
    return (
        <>
            <h2>
                Welcome to the Trivia Challenge!
            </h2>
            <h4>
                You will be presented with 10 True or False questions.
            </h4>
            <h4> Can you Score 100%? </h4>

            <Link to='/game'> <button> BEGIN </button> </Link>
        </>
    )
}

export default Intro