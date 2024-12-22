import React from 'react'
import { useState } from 'react'
export default function Rock() {
  let [youImage,setYouImage] = useState('');
  let [computerImage,setComputerImage] = useState('');
  let [result,setResult] = useState('');
  let play = function(choice){
    setYouImage(choice);
    let computerChoice = ['rock.png','paper.png','scissor.png'][Math.floor(Math.random()*3)];
    setComputerImage(computerChoice);

    if(choice === computerChoice){
        setResult('Draw');
    }
    else if(choice === 'rock.png' && computerChoice === 'scissor.png' || choice === 'paper.png' && computerChoice === 'rock.png' || choice === 'scissor.png' && computerChoice === 'paper.png'){
        setResult('You win');
    }
    else{
        setResult('You lose');
    }

  }
  return (
    <div className=' text-center'>
        <h1 className='text-center p-5 bg-dark text-white shadow'>Rock paper Scissor Game</h1>
        <h2 className='fw-bold text-primary'>{result}</h2>
        <div className="container">
            <div className="row">
                <div className="col-sm-5">
                    <h2>Computer</h2>
                    <img src={computerImage} alt="" className='img-fluid'/>
                </div>
                <div className="col-sm-2">
                    <h2>Vs</h2>
                </div>
                <div className="col-sm-5">
                    <h2>You</h2>
                    <img src={youImage} alt="" className='img-fluid' />
                </div>
            </div>
        </div>

        <div className="container w-50">
            <div className="row">
                <div className="col-sm-4 p-5">
                    <div className="card rounded shadow" role='button' onClick={()=>{play('rock.png')}}>
                        <img src="rock.png" className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="col-sm-4 p-5">
                    <div className="card rounded shadow" role='button' onClick={()=>{play('paper.png')}}>
                        <img src="paper.png" className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="col-sm-4 p-5">
                    <div className="card rounded shadow" role='button' onClick={()=>{play('scissor.png')}}>
                        <img src="scissor.png" className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
