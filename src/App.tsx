import React, {useState} from 'react';
import './App.css';
import {MapHomeWork} from "./02_MapHomeWork/MapHomeWork";
import {ButtonComp} from "./03_Button/ButtonComp";
import {UseStateEx} from "./04_UseState/UseStateEx";
import {FilterEx} from "./05_Filter/FilterEx";
import {InputEx} from "./06_Input/InputEx";
import {UniversalInput} from "./06_Input/UniversalComInput/UniversalInput";
import {InputButton} from "./06_Input/UniversalComInput/InputButton";

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const button1 = (name: string, age: number) => {
        alert(name + ' ' + age)
    }
    const button2 = (name: string) => {
        alert(name)
    }
    const button3 = () => {
        alert('stupid button')
    }

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    const AddInputMessage = (text: string) => {
        let newMessage = {message: text}
        setMessage([newMessage, ...message])
    }

    // -----------------

    let [inputText, setInputText] = useState('')

    const callBackInputButton = () => {
        AddInputMessage(inputText)
        setInputText('')
    }

    return (
        <div className='App'>
            <MapHomeWork exampleArray={topCars}/>
            <ButtonComp title={'My first'} callBack={() => button1('first', 21)}/>
            <ButtonComp title={'My second'} callBack={() => button2('second')}/>
            <ButtonComp title={'Button'} callBack={button3}/>
            <hr/>
            <UseStateEx />
            <hr/>
            <FilterEx />
            <hr/>
            <InputEx data={message} AddInputMessage={AddInputMessage}/>
            <hr/>
            <UniversalInput value={inputText} onChangeText={setInputText}/>
            <InputButton name={'+'} callBack={callBackInputButton}/>
            {message.map((el, index) => {
                return (<div key={index}>{el.message}</div>)
            })}

        </div>
    );
}

export default App;
