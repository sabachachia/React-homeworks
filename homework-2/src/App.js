import items from './constants';
import Card from './components/Card';
import './App.css';


function App() {
  return (
    <main className="container">
        {items.map((item) => (
          <Card props={item} key={item.id}/>
        ))}
    </main>
  );
}

export default App;
