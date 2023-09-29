import React, { useState, useEffect } from 'react'
import './App.css';
import { data as explorer } from './data/data';
import Folder from './components/folder';

function App() {
	const [explorerData, setExplorerData] = useState(explorer);
	return (
		<div className="App">
			<Folder explorer={explorerData} />
		</div>
	);
}

export default App;
