import './App.css';
import React, {useState} from 'react';
import animalData from './data.json';
import Card from './components/Card';

function App() {

  const [animals,setAnimals] = useState(animalData)

  const handleSortByLife = () => {
    const SortByLife = [...animals].sort((a,b) => a.lifeExpectancy -b.lifeExpectancy)
    setAnimals(SortByLife)
  }

  const handleFilterDogs = () => {
    const filteredAnimals = animalData.filter(elem => elem.type === "dog")
    setAnimals(filteredAnimals)
  }


  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      <button className='action-btn' onClick={handleSortByLife}>Sort by life expectancy</button>
      <button className='action-btn' onClick={handleFilterDogs}>Only the dogs</button>
      {animals.map(elem => {
        return <Card key={elem._id} animal={elem}/>
      })}
    </div>
  );
}

export default App;
