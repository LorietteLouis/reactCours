
import './App.css';
import CreateJob from './CreateJob';
import CreateOtherJob from './CreateOtherJob';
import ListCoworkings from './ListCoworkings';
import ListCoworkingsOptimized from './ListCoworkingsOptimized';
import SendText from './SendText';

function App() {
  const coworkings = [
    {
      id: 1,
      name: "Coworking 1",
      address: "Bordeaux",
      phone: "06.15.75.48.12",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Coworking 2",
      address: "Merignac",
      phone: "06.37.25.09.11",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Coworking 3",
      address: "Bordeaux",
      phone: "06.15.51.33.64",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Coworking 4",
      address: "Eysines",
      phone: "06.35.23.32.34",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Coworking 5",
      address: "Lormont",
      phone: "06.36.19.17.58",
      img: "https://picsum.photos/200/300",
    },
  ];

 

  return (
    <div className="exerciceCreate">
      <CreateJob/>
      <CreateOtherJob/>
      <ListCoworkings coworkings ={coworkings} />
      <ListCoworkingsOptimized coworkings ={coworkings}/>
      <SendText/>
    </div>
  );
}

export default App;
