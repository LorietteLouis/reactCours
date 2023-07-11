
import './App.css';
import CreateJob from './CreateJob';
import CreateOtherJob from './CreateOtherJob';
import ListCoworkings from './ListCoworkings';

function App() {
  return (
    <div className="exerciceCreate">
      <CreateJob/>
      <CreateOtherJob/>
      <ListCoworkings/>
    </div>
  );
}

export default App;
