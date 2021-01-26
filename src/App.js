import './App.css';
import {BasicTable} from './components/BasicTable';
import {TableSearchFilter} from './components/TableSearchFilter';

function App() {
  return (
    <div className="App">
      <TableSearchFilter/>
        <BasicTable/>
    </div>
  );
}

export default App;