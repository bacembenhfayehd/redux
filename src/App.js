import { useDispatch, useSelector } from "react-redux";


function App() {
  
  const m = useSelector( state => state.Fir.x);
  const y = useSelector( state => state.Sec.z);
  const n = useDispatch();
  return (
    <div className="App">
      <button onClick={() => n({type :'plus'})}>+</button>
      <button  onClick={() => n({type :'moins'})}>-</button>
      <button onClick={() => n({type :'Yes'})}>yes</button>
      <button  onClick={() => n({type :'No'})}>no</button>
      {m}<br></br>
      {y}
    </div>
  );
}

export default App;
