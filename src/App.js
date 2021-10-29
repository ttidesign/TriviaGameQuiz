import './App.css';
import Intro from './components/Intro';
import GameComponent from './components/GameComponent';
import Result from './components/Result';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={Intro}></Route>
			<Route exact path='/game' component={GameComponent}></Route>
			<Route exact path='/result' component={Result}></Route>
			{/* <GameComponent></GameComponent> */}
		</div>
	);
}

export default App;
