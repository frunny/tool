import Head from "next/head";
import { useState } from "react";

import Navbar from "./components/Navbar"


export default function App() {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input_text: textInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setTextInput("");
  }	
	
  return (		
    <div className="app">
			<Navbar />
			
		<h1>Welcome</h1>
    
			<div className="input-form">
				<form onSubmit={onSubmit}>
					<input className="w-52 md:w-60 lg:w-96"
						type="text"
						name="input_text"
						placeholder="Enter some text"
						value={textInput}
						onChange={(e) => setTextInput(e.target.value)}
					/>
					<input type="submit" value="Request" />
				</form>
				<div>{result}</div>		
			</div>
		</div>
  )
}
