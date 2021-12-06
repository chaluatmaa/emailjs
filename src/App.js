import emailjs from "emailjs-com";
import "./App.css";

function App() {
	function sendMail(e) {
		e.preventDefault();

		emailjs
			.sendForm(`<SERVICE_ID>`, `<TEMPLATE_ID>`, e.target, `<USER_ID>`)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	return (
		<div className="App">
			<h1>Email JS</h1>
			<form onSubmit={sendMail}>
				<div
					style={{ display: "flex", flexDirection: "column", margin: "20px " }}
				>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" />
				</div>
				<div
					style={{ display: "flex", flexDirection: "column", margin: "20px " }}
				>
					<label htmlFor="email">Email</label>
					<input type="text" name="email" />
				</div>
				<div
					style={{ display: "flex", flexDirection: "column", margin: "20px " }}
				>
					<label htmlFor="message">Message</label>
					<textarea type="text" name="message" />
				</div>
				<div>
					<button type="submit">Send Message</button>
				</div>
			</form>
		</div>
	);
}

export default App;
