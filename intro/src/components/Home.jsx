export default function Home(props){
    return(
      <div>
        <h1>hello Home</h1>
         <h2>{props.u.name}</h2>
         <h2>{props.u.age}</h2>
      </div>
    )
  }
  
 