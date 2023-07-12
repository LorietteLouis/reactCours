
import './App.css';
import CreateJob from './CreateJob';
import CreateOtherJob from './CreateOtherJob';
import ListCoworkings from './ListCoworkings';
import ListCoworkingsOptimized from './ListCoworkingsOptimized';
import SendText from './SendText';

function App() {

 

  return (
    <div className="exerciceCreate">
      <CreateJob/>
      <CreateOtherJob/>
      <ListCoworkings />
      <ListCoworkingsOptimized/>
      <SendText/>
    </div>
  );
}

export default App;
