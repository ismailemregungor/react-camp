import { useState } from "react";

function App() {
	const [name, setName] = useState("Ömer");
	const [age, setAge] = useState(29);
	const [friends, setFriends] = useState(["İsmail", "Emre"]);
	const [address, setAddress] = useState({ title: "Istanbul", zip: 34756 });

	return (
		<div className="App">
			<h1>Merhaba {name}!</h1>
			<h2>{age}</h2>

			<button onClick={() => setName("İsmail")}>Change name</button>
			<button onClick={() => setAge(23)}>Change age</button>

			<hr />
			<br></br>

			<h2>Friends</h2>
			{friends.map((friend, index) => (
				<div key={index}>{friend}</div>
			))}

			<br />

			<button onClick={() => setFriends([...friends, "Sude"])}>
				add new friend
			</button>

			<hr />
			<br></br>

			<h2>Address</h2>
			<div>
				{address.title} {address.zip}
			</div>

			<br />

			<button
				onClick={() => setAddress({ ...address, zip: 44444, title: "Ankara" })}
			>
				change the address
			</button>
		</div>
	);
}

export default App;
