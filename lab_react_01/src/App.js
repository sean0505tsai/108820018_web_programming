import './App.css';
import Title from './components/title';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';


function App() {
	return (
		<div className="App">
			<Title />
			<Layout />
			<header className="App-header">
				<p>
					Hello World
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

function Layout() {
	const { collapseSidebar } = useProSidebar();

	return (
		<div style={{ display: 'flex', height: '100%' }}>
			<Sidebar>
				<Menu>
					<MenuItem> Documentation</MenuItem>
					<MenuItem> Calendar</MenuItem>
					<MenuItem> E-commerce</MenuItem>
				</Menu>
			</Sidebar>
			<main>
				<button onClick={() => collapseSidebar()}>Collapse</button>
			</main>
		</div>
	);
}

export default App;