import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import Layout from './components/sidebar';

import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
	return (
		// <ProSidebarProvider>
		<div className="App">
			<Title />
			{/* <Layout/> */}
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
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
		// </ProSidebarProvider>
	);
}

export default App;
