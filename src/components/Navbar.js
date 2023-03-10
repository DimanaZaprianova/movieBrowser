
import {useState, useEffect, useRef} from 'react';
import { useNavigate, Link} from "react-router-dom";

const Navbar = ({searchText, setSearchText}) => {
    const [bufferText, setBufferText] = useState("");
    const navigate = useNavigate ();
    
    const updateSearchText = (e) => {
      // navigate('/search');
      setBufferText(e.currentTarget.value);
    };
    
    const inputElement = useRef();

    const realUpdateSearchText =(e) => {
      navigate('/search');
      setSearchText(bufferText);
      setBufferText("");
      e.currentTarget.focus = true;
      inputElement.current.focus();
    };

    useEffect(() => {
      const keyDownHandler = event => {
        console.log('User pressed: ', event.key);
  
        if (event.key === 'Enter') {
          event.preventDefault();
          navigate('/search');
          setSearchText(bufferText);
          setBufferText("");
        }
      };
  
      document.addEventListener('keydown', keyDownHandler);
  
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }, [navigate, bufferText, setSearchText]);
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/"
                tabIndex="-1"
                aria-disabled="true"
              >
                Coming soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              autoFocus = 'true'
              className="form-control me-2 Inputtxt"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={bufferText}
              onChange = {updateSearchText}
              ref={inputElement}          
            />
            <button type="button" onClick = {realUpdateSearchText}  className="btn btn-outline-success" >
              Results
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
