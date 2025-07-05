import React from 'react'
import { useState } from 'react';

function Questions() {
    const question = [{
        q:"What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        ans:0
    },{q:"Which gas is most abundant in Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
        ans:0
    },{q:"What is the powerhouse of the cell?", 
        options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
        ans:0
    },{q:"What part of the cell contains the genetic material?",
        options: ["Nucleus", "Cytoplasm", "Cell Membrane", "Mitochondria"],
        ans:0
    },{q:"What is the process by which plants make their own food?", 
        options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"]
        ,ans:0
    },{q:"What is the largest organ in the human body?",        
        options: ["Skin", "Liver", "Heart", "Lungs"],
        ans:0
    }]
    
    let [score ,setScore] = useState(0);
    
    let i= 0;
    const [input,setinput] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const clickNext = () => {
        if(currentQuestion < question.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
        
        else {
            setCurrentQuestion(0);
        }
        console.log(question[currentQuestion].q);
    }
    const checkAns =()=>{
        
        console.log(input)
        clickNext();
        if(input == question[currentQuestion].ans){
            setScore(score + 1);
            return 1;
        }
        else{
            return 0;
        }
    }
    

    
  return (

    <div className='justify-center items-center flex flex-col h-screen'>
        <h1 className='text-2xl font-bold'>Score: {score}</h1>
        <div className='flex flex-col gap-1 justify-center items-start bg-slate-200 rounded-lg p-5'>
       <h1>Q:  {question[currentQuestion].q}</h1>
       <button className='options bg-blue-300 rounded p-1 hover:bg-blue-200' onClick={()=>{setinput(0)}}>a {question[currentQuestion].options[0]}</button>
       <button className='options bg-blue-300 rounded p-1 hover:bg-blue-200' onClick={()=>{setinput(1)}}>b {question[currentQuestion].options[1]}</button>
       <button className='options bg-blue-300 rounded p-1 hover:bg-blue-200' onClick={()=>{setinput(2)}}>c {question[currentQuestion].options[2]}</button>
       <button className='options bg-blue-300 rounded p-1 hover:bg-blue-200' onClick={()=>{setinput(3)}}>d {question[currentQuestion].options[3]}</button>
       <button className='btn bg-amber-400 hover:bg-amber-200 p-1.5 rounded-3xl' onClick={checkAns}>check answer</button>
       </div>
       <button className='btn bg-amber-800 px-2 rounded-2xl focus:bg-amber-600' onClick={clickNext}>next</button>
    </div>
  )
}

export default Questions
