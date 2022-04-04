import React from "react";
import style from './ButtonComp.module.css'

type ButtonPropsType = {
    title: string
    callBack: ()=> void
}

export const ButtonComp = (props: ButtonPropsType) => {

    const onClickHandler = () => {
      props.callBack()
    }
    
    return (
        <button className={style.button} onClick={onClickHandler}>{props.title}</button>
    )
}