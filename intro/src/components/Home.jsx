export default function Home(props){
    return(
      <div>
        <h1>hello Home</h1>
        <h1>count : {props.count}</h1>
        <button onClick={props.increaseCount}>increase count</button>
      </div>
    )
  }
  
 