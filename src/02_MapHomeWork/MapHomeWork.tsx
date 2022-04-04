import React from "react"
import style from './MapHomeWork.module.css'

type MapHomeWorkPropsType = {
    exampleArray: Array<topCarsPropsType>
}

type topCarsPropsType = {
    manufacturer: string
    model: string
}

export const MapHomeWork = (props: MapHomeWorkPropsType) => {
    return (
        <>
            <table className={style.tb}>
                <thead>
                <tr className={style.tr}>
                    <th className={style.th}>№</th>
                    <th className={style.th}>Manufacturer</th>
                    <th className={style.th}>Model</th>
                </tr>
                </thead>
                <tbody>
                {props.exampleArray.map( (u:topCarsPropsType, index: number=0) => {
                    return <tr key={index}>
                        <td className={`${style.td} ${style.tn}`}>{index+1}</td>
                        <td className={style.td}>{u.manufacturer}</td>
                        <td className={style.td}>{u.model}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </>
    )
}