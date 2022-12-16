import './App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Routes, Route, Outlet, Link, useSearchParams, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path = "search" element={<Search/>} />
          <Route path = "*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Title/>
      <MySidebar/>
      <Outlet/>
    </div>
  );
}

function MySidebar() {
  return (
    <div id='header'>
      <Sidebar>
        <Menu>
          <MenuItem routerLink={<Link to ='/home'/>}>Home</MenuItem>
          <MenuItem routerLink={<Link to ='/search'/>}>Search</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

function Title() {
	return(
		<nav className = "bg-dark navbar-dark navbar">
			<div className="row col-12 d-flex justify-content-center text-white">
				<h3>Welcome to NTUT Web Programming</h3>
			</div>
		</nav>
	)
}

function Home() {
  return (
    <div>
      <h2>This is the homepage.</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate('/search')
  };

  return (
    <div>
      <h2>Your search term: {searchParams.get('q')}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input name='q'/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
