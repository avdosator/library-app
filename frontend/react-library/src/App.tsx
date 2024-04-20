import './App.css'

function App() {

  return (
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'>Library App</span>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown'
          aria-expanded='false' aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a href="#" className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link'>Search Books</a>
            </li>
          </ul>         
        </div>
      </div>
    </nav>
  )
}

export default App
