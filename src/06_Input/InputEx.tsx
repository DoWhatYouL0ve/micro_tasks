import React, {ChangeEvent, useState} from "react";
import style from './InputEx.module.css'

type MessageArrayType = {
    message: string
}

type InputExPropsType = {
    data: Array<MessageArrayType>
    AddInputMessage: (title: string) => void
}

export const InputEx = (props: InputExPropsType) => {

    let [text, setText] = useState('')

    const AddMessage = (text: string) => {
        props.AddInputMessage(text)
        setText('')
    }

    const TemporaryInputText = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value)
    }

    return (
        <div className={style.inputExWrapper}>
            <div>
                <input type="text" value={text} onChange={TemporaryInputText}/>
                <button onClick={()=>AddMessage(text)}>+</button>
            </div>
            {props.data.map((el, index) => {
                return (<div key={index}>{el.message}</div>)
            })}
        </div>
    )
}