import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
	const [index, setIndex] = useState(0)
	
	const anecdotes = [
		'If it hurts, do it more frequently',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
	]
	
	const handleChange = () => {
		setIndex(Math.floor(Math.random()*anecdotes.length))
	}
	
	return (
		<div>
			<button onClick = {handleChange}>Press me!!!</button>
			<h1>{anecdotes[index]}</h1>
		</div>
	)
}

export default App;
