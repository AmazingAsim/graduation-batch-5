import React from 'react'
import { useState,useRef } from 'react'
export default function Coin() {
    let [imgUrl,setImgUrl] = useState('heads.png');
    let [flipCount,setFlipCount] = useState(0);
    let [headsCount,setHeadsCount] = useState(0);
    let [tailsCount,setTailsCount] = useState(0);
    let coinRef = useRef();

    function flipTheCoin() {
        setFlipCount(flipCount+1);
        let random = Math.random();
        if(random<0.5){
            setImgUrl('heads.png'); 
            setHeadsCount(headsCount+1);
        }
        if(random>0.5){
            setImgUrl('tails.png'); 
            setTailsCount(tailsCount+1);
        }
        console.log(coinRef.current);
        coinRef.current.style.display = 'none';
        setTimeout(function(){
        coinRef.current.style.display = 'inline';
        },0.0001);
    }
  return (
    <div className=' text-center'>
        <h1 className='text-center p-5 bg-dark text-white shadow'>Flip The Coin</h1>
        <img ref={coinRef} id='coinImage' className=' rounded-circle' src={imgUrl} alt="" />
         <br />
        <button onClick={flipTheCoin} className='btn btn-dark my-5 px-5 py-2' >Flip</button>
        <hr />
        <h2>Number of Flips : {flipCount}</h2>
        <h2>Number of Heads : {headsCount}</h2>
        <h2>Number of Tails : {tailsCount}</h2>
    </div>
  )
}
