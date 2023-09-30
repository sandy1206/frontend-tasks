import * as React from 'react';
import './App.css';

function App() {
	const [isRunning, setIsRunning] = React.useState(false);
	const [time, setTime] = React.useState([0, 0, 0]);
	return (
		<div className="App">
			<span>Countdown Timer</span>
			<div className='countdown-container'>
				<div className='hours'>
					<span>Hours</span>
					{
						!isRunning ? <input type='number' /> : <span>{time[0]}</span>
					}
				</div>

				<div className='minutes'>
					<span>Minutes</span>
					{
						!isRunning ? <input type='number' /> : <span>{time[1]}</span>
					}
				</div>
				<div className='seconds'>
					<span>Seconds</span>
					{
						!isRunning ? <input type='number' /> : <span>{time[2]}</span>
					}
				</div>
			</div>
			<div className='timer-buttons'>
				<button>Start</button>
				<button>Reset</button>
			</div>
		</div>
	);
}

export default App;
