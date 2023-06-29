import Header from './Header'
import Footer from './Footer';
import Main from './Main'

function App() {
  return (
    <div className="App">
      <div class="container-header">
        <Header/>
      </div>
      <div class="container-main">
        <Main/>
      </div>
      <div class="container-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
