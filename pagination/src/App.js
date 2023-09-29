import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

	const [productList, setProductList] = useState();
	const [selectedPage, setSelectedPage] = useState(1);

	const fetchProducts = async () => {
		const res = await fetch('https://dummyjson.com/products');
		const data = await res.json();
		if (data && data.products) {
			setProductList(data.products);
		}
	}
	useEffect(() => {
		fetchProducts();
	}, [])

	const handlePaginationChange = (page) => {
		setSelectedPage(page);
	}

	return (
		<div className="App">
			{
				productList && productList.length && <div className='products'>
					{
						productList.slice(selectedPage * 10 - 10, selectedPage * 10).map(prod => {
							return <span className='product__single' key={prod.id}>
								<img src={prod.thumbnail} alt={prod.title} />
								<span>{prod.title}</span>
							</span>
						})
					}
				</div>
			}
			{
				productList && productList.length > 0 && <div className='pagination'>
					<span>◀</span>
					{[...Array(productList.length / 10)].map((_, i) => {
						return <span
							onClick={() => handlePaginationChange(i + 1)}
							key={i}
							className={selectedPage === i + 1 ? 'selected-page-index' : ''}
						>
							{i + 1}
						</span>
					})}
					<span>▶</span>
				</div>
			}
		</div>
	);
}

export default App;
