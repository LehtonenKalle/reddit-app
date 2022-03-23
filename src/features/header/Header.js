import '../../styles/Header.css';
import pageLogo from '../../assets/images/page-logo-small.jpg';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './searchBar/SearchBar';

const Header = () => {
  let navigate = useNavigate();
  return (
    <header>
      <div className='logo-with-text'>
        <input type='image' className='logo' src={pageLogo} alt='' 
          onClick={() => navigate('/')} 
        />
      </div>
      <SearchBar />
      <nav className='navigation'>
        <ul>
          <li><Link to='/hot'>Hot</Link></li>
          <li><Link to='/new'>New</Link></li>
          <li><Link to='/top'>Top</Link></li>
          <li><Link to='/rising'>Rising</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;