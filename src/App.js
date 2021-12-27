import './App.scss';
import { Books } from './components/books';
import { Users } from './components/users';
import { withLoading } from './hocs/withLoading';

const WithLoadingBooks = withLoading(Books, 'Loading books...');
const WithLoadingUsers = withLoading(Users, 'Loading users...');

function App() {
  return (
    <div className="App">
		<WithLoadingBooks/>
		<WithLoadingUsers/>
    </div>
  );
}

export default App;