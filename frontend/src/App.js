import React from 'react';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import $ from 'jquery';

function App() {
	const [a, setA] = React.useState(0);
	const [b, setB] = React.useState(0);
	const [sum, setSum] = useState();

	function calculateSum(a, b) {
		let res = axios.get(`http://localhost:8080/${a}/${b}`,
			{
				headers: {'Content-Type': 'application/json'}
			})
			.then((response) => {
				setSum(response.data["message"]);
			})
			.catch((error) => {
				throw error;
			})
		console.log(`http://localhost:8080/${a}/${b}`)
	}


	return (
		<div className="App">
			<input className={"Input"} id={"a"} onInput={() => setA($('#a').val())} /> +
			<input className={"Input"} id={"b"} onInput={() => setB($('#b').val())} />
			<button onClick={() => calculateSum(
				a,
				b,
			)}> = </button>
			<span>
				{sum}
			</span>
		</div>
	);
}

export default App;
