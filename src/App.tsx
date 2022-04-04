import React from 'react';
import './App.css';
import {MapHomeWork} from "./02_MapHomeWork/MapHomeWork";
import {ButtonComp} from "./03_Button/ButtonComp";

function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'},
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
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

  return (
      <>
        <MapHomeWork exampleArray={topCars}/>
          <ButtonComp title={'My first'} callBack={()=>button1('first', 21)}/>
          <ButtonComp title={'My second'} callBack={()=>button2('second')}/>
          <ButtonComp title={'Button'} callBack={button3}/>
      </>
  );
}

export default App;
