import './index.css'
import './App.css'
import Counter from './Counter';
import SimpleForm from './SimpleForm';
import Timer from './Timer';
import MouseT from './MouseT';
import Memo from './Memo';

const App = () => {
  return (
    <div > 
      <Counter></Counter>
      <SimpleForm></SimpleForm>
      <Timer></Timer>
      <MouseT render={({ x, y }) => (
        <h1>
          Mouse Position: {x}, {y}
        </h1>
      )}></MouseT>
      <Memo></Memo>
    </div>
  );
}

export default App;
