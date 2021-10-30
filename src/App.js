import './App.css';
import Intro from './components/Intro';
import GameComponent from './components/GameComponent';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={Intro}></Route>
			<Route
				exact
				path='/game'
				render={(routerProps) => {
					return <GameComponent></GameComponent>;
				}}/>
		</div>
	);
}

export default App;
