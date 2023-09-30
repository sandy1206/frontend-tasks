import * as React from 'react';
import './App.css';

function App() {

	const [productList, setProductList] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [page, setPage] = React.useState(1);

	async function fetchData() {
		setIsLoading(true);
		setError(null);

		try{
			const promise = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}&select=title,price`);
			const data = await promise.json();
			setProductList(prevProducts => [...prevProducts, ...data.products]);
			setPage(prevPage => prevPage + 1);
		} catch(error){
			setError(error);
		}finally{
			setIsLoading(false);
		}
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	const handleScroll = () => {
		if (Math.round(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight) {
			return;
		}
		fetchData();
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isLoading]);

	return (
		<div>
			<ul>
				{productList.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
			{isLoading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
		</div>
	);
}

export default App;
