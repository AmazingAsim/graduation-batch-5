
import './App.css';
import Products from './components/Products';
function App() {
 
  return (
    <div className="App">
       <Products />
    </div>
  );
}

export default App;



{/* <h1 style={{background:'gray',color:'white'}}>{name}</h1>
<img src="" alt="" />
<hr/>
<button onClick={fire}>click me</button>
<input onChange={getInput} type="text" />
<button onClick={()=>{changeColor('red')}}>red</button>
<button onClick={()=>{changeColor('yellow')}}>yellow</button>
<button onClick={()=>{changeColor('white')}}>white</button> */}

// let name = "Asim"
// let fire = ()=>{alert('hello there')}

// let getInput = (event)=>{console.log(event.target.value)}

// function changeColor(color){
//   document.body.style.backgroundColor = color;
// }