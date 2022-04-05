import React from "react";

type InputButtonPropsType = {
    name: string
    callBack: () => void
}

export const InputButton = (props: InputButtonPropsType) => {

    const onClickInputButtonHandler = () => {
        props.callBack()
    }

    return (
            <button onClick={onClickInputButtonHandler}>{props.name}</button>
    )
}