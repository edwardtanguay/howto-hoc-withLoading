import './App.scss';
import { Books } from './components/books';
import { Users } from './components/users';

function App() {
  return (
    <div className="App">
		<Books/>
		<Users/>
    </div>
  );
}

export default App;