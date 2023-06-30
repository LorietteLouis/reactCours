import Profile from './Profile';
import ExperienceJob from './JobExp';
import Footer from './Footer';
import Header from './Header';
import PostFeed from './Feed';
import './App.css';

function App() {
const userInfosFromFakeApi = {
  firstName: "John",
  lastName: "Doe",
  age: 42,
  email: "contact@johndoe.fr",
  phone: "0123456789",
  adress: "1 rue de la Paix",
  city: "Paris",
  zipCode: "75000",
  country: "France",
  job: "Développeur web",
};

  return (
    <>
          <div className='header'>
            <Header userInfosFromFakeApi = {userInfosFromFakeApi}/>
          </div>
    <div className = 'main'>
        <div className='profile'>
          <Profile userInfosFromFakeApi = {userInfosFromFakeApi}/>
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
    </>
  );
}
export default App;
