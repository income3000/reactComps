import { useState } from "react"


export default function (Todo){


	const [item, setItem] = useState([])
	const [newItem, setNewItem] = useState("")

	function addItem(){
		if (!newItem){
			
			return;
		}
		const item = {
			id:Math.floor(Math.random() * 1000),
			value: newItem
		}
		setItem(oldList => [...oldList, item]);
		setNewItem("")

		console.log(item.value)
	}
	function DeleteItem(id){
		const newArray = item.filter(item => item.id !== id);
		setItem(newArray)
	}

	return(
		<div className="todo">
			<h1>todo list</h1>
			<input
			 type="text"
			 placeholder="add new item"
			 value={newItem}
			 onChange={e => setNewItem(e.target.value)}
			 />

			 <button onClick={() => addItem()}>add</button>
			 <ul>
				{item.map(item => {
				 return(
						<li key={item.id}>{item.value}<button onClick={() => DeleteItem(item.id)}>✂︎</button></li>
					)
					})}
			 </ul>
		</div>
	)
}