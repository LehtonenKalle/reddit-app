import '../../styles/Header.css';
import redditLogo from '../../assets/images/redditlogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='logo-with-text'>
        <img className='logo' src={redditLogo} alt=''></img>
        <h2 className='logo-text'>RedditMinimal</h2>
      </div>
      <input className='search' placeholder='Search...'/>
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