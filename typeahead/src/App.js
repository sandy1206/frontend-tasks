import './App.css';
import * as React from 'react';
const SEARCH_API = 'https://dummyjson.com/products/search?q=';

function App() {

	const [data, setData] = React.useState();
	const [selection, setSelection] = React.useState();

	const onChange = (e) => {
		if (e.target.value) {
			fetch(`${SEARCH_API}${e.target.value}`).then(res => {
				return res.json()
			}).then((res) => {
				let prodList = res.products.map(product => {
					return product.brand
				})
				setData(prodList);
			}).catch((err) => {
				console.log(err);
			});
		}
		e.preventDefault();
	}

	const handleSelection = (selection => {
		if (selection) {
			setSelection(selection);
		}
	})
	return (
		<div className="App">
			<div className='input-container' >
				<input onChange={onChange} />
			</div>
			<div className='suggestions-container'>
				{data && <div className='list-container'>
					<ul>
						{
							data.map(d => {
								return <li key={d} onClick={() => handleSelection(d)}>{d}</li>
							})
						}
					</ul>
				</div>}
			</div>
			<div className='selected-container'>
				<h3>{selection || ''}</h3>
			</div>
		</div>
	);
}

export default App;
