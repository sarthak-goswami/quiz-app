import React from 'react'
import { useState } from 'react';

function Questions() {
    const question = [
        {
    q: "What is the SI unit of electric current?",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    ans: 2
    },
    {
        q: "Which law states that the current through a conductor is directly proportional to the voltage across it?",
        options: ["Ohm's Law", "Kirchhoff’s Current Law", "Faraday's Law", "Lenz's Law"],
        ans: 0
    },
    {
        q: "Power in an electrical circuit is given by which formula?",
        options: ["V + I", "V / I", "V × I", "V² / R"],
        ans: 2
    },
    {
        q: "Which instrument is used to measure electric current?",
        options: ["Voltmeter", "Ammeter", "Ohmmeter", "Wattmeter"],
        ans: 1
    },
    {
        q: "In a purely resistive AC circuit, the current is:",
        options: ["Ahead of voltage", "Behind the voltage", "In phase with voltage", "Zero"],
        ans: 2
    },
    {
        q: "Kirchhoff’s Voltage Law (KVL) is based on:",
        options: ["Law of conservation of energy", "Law of conservation of mass", "Coulomb’s law", "Ohm’s law"],
        ans: 0
    },
    {
        q: "Which of the following is a passive element?",
        options: ["Battery", "Diode", "Resistor", "Transistor"],
        ans: 2
    },
    {
        q: "A capacitor blocks:",
        options: ["DC only", "AC only", "Both DC and AC", "Neither"],
        ans: 0
    },
    {
        q: "In an RLC circuit at resonance, the:",
        options: ["Resistance is maximum", "Current is minimum", "Impedance is minimum", "Voltage is maximum"],
        ans: 2
    },
    {
        q: "Which material is commonly used as the core in transformers?",
        options: ["Aluminum", "Copper", "Silicon steel", "Plastic"],
        ans: 2
    }
    ]
    
    let [score ,setScore] = useState(0);
    
    let i= 0;
    const [input,setinput] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const clickNext = () => {
        if(currentQuestion < question.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
        
        else {
            document.querySelector('#container').innerHTML='<h1>Quiz Over!</h1><h2>Your final score is: ' + score +' out of '+question.length+ '</h2>';
            if(score == question.lenght ){
                document.querySelector('#container').innerHTML +='<h2>congats you scored perfect</h2>';
            }else if(score >= question.length/2){
                document.querySelector('#container').innerHTML +='<h2>you have passed the quiz </h>'
            }else{
                document.querySelector('#container').innerHTML +='<h2>better luck next time</h>'
            }
            return;
        }
        console.log(question[currentQuestion].q);
    }
    const checkAns =()=>{
        
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

    <div id="container" className='justify-center items-center flex flex-col h-screen'>
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
