import logo from './logo.svg';
import './App.css';
import Character from "./Character/Character";

function App() {
  return (
    <div>
      <div>
        <Character
            id={'161'}
            name={'Hydrogen-F'}
            status={'Alive'}
            species={'Alien'}
            gender={'Female'}
            image = {'https://rickandmortyapi.com/api/character/avatar/161.jpeg'}
        />
        <Character
            id={'234'}
            name={'Morty Smith'}
            status={'Dead'}
            species={'Human'}
            gender={'Male'}
            image = {'https://rickandmortyapi.com/api/character/avatar/234.jpeg'}
        />
        <Character
            id={'383'}
            name={'Yaarb'}
            status={'Alive'}
            species={'Alien'}
            gender={'Male'}
            image = {'https://rickandmortyapi.com/api/character/avatar/383.jpeg'}
        />
        <Character
            id={'ID - 631'}
            name={'Name - Rick Sanchez'}
            status={'Status - Alive'}
            species={'Species - Human'}
            gender={'Gender - Male'}
            image = {'https://rickandmortyapi.com/api/character/avatar/631.jpeg'}
        />
        <Character
            id={'ID - 420'}
            name={'Name - Plutonian'}
            status={'Status - Alive'}
            species={'Species - Alien'}
            gender={'Gender - Male'}
            image = {'https://rickandmortyapi.com/api/character/avatar/420.jpeg'}
        />
        <Character
            id={'789'}
            name={'Nick'}
            status={'Dead'}
            species={'Human'}
            gender={'Male'}
            image = {'https://rickandmortyapi.com/api/character/avatar/789.jpeg'}
        />

      </div>
    </div>
  );
}

export default App;
