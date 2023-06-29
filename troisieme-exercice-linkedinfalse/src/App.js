import Profile from './Profile';
import ExperienceJob from './JobExp';
import Footer from './Footer';
import Header from './Header';
import PostFeed from './Feed';
import './App.css';

function App() {
  return (
    <div className="app">
          <div className='header'>
            <Header/>
          </div>
    <div className = 'main'>
        <div className='profile'>
          <Profile/>
        </div>
        <div className='experience'>
          <ExperienceJob/>
        </div>
    </div>
        <div className='postFeed'>
          <PostFeed/>
        </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
