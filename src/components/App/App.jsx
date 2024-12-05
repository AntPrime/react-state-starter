import './App.css';
import { useState } from 'react';
import Clicker2 from '../Clicker2/Clicker2';

function App() {
    const [ name, setName ] = useState( 'ANTHONY' );
    const [ click, setClick ] = useState( 0 );

    const [ names, setNames ] = useState( [] );

    return (
        <div className="App">
            <p>Hello! My name is { name }.</p> 
            5*10 = {5*10} <br />
            <button onClick={()=>{setClick(click + 1)}}>Click me!</button>
            <p>I've clicked the button { click } times.</p>
            <input type='text' placeholder='name' onChange={ ()=>{setName(event.target.value)}}/>
            <button onClick={ () =>{setNames([...names, name ]) }}>Add Name</button>
            <p>{ names }</p>
            <Clicker2 click={ click }/>
        </div>
    );
        // function addName(){
        //     console.log('In addName')
        //     // oldschool: names.push( name )
        //     setNames([...names, name ]);
        // }
    // function updateName( event ){
    //     setName( event.target.value );
    // }
    // function clicker(){
    //     console.log("clicked");
    //     setClick( click + 1 )
    //    }
}

export default App;
