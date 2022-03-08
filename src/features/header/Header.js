import '../../styles/Header.css';
import redditLogo from '../../assets/images/redditlogo.png';

const Header = () => {
  return (
    <header>
      <div className='logo-with-text'>
        <img className='logo' src={redditLogo} alt=''></img>
        <h2 className='logo-text'>RedditMinimal</h2>
      </div>
      <input className='search' placeholder='Search...'/>
      <nav>
        <ul className='navigation'>
          <li>Hot</li>
          <li>New</li>
          <li>Top</li>
          <li>Rising</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;