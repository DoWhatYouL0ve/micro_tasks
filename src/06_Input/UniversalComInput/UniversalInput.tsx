import React, {ChangeEvent} from "react";

type UniversalInputPropsType = {
    value: string
    onChangeText: (inputText: string) => void
}

export const UniversalInput = (props: UniversalInputPropsType) => {
    
    const onChangeTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeText(e.currentTarget.value)
    }
    
    return (
        <input value={props.value} onChange={onChangeTextHandler}/>
    )
}