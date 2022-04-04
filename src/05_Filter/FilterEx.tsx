import React, {useState} from "react";
import style from './FilterEx.module.css'

type FilterType = 'All' | 'Dollars' | 'RUBLS'


export const FilterEx = () => {

    const money = [
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ]

    let[value, setValue]=useState<FilterType>('All')

    let currentMoneyFiltered = money
    if(value === 'Dollars') {
        currentMoneyFiltered = money.filter( el => el.banknots === 'Dollars')
    }
    if(value === 'RUBLS'){
        currentMoneyFiltered = money.filter( el => el.banknots === 'RUBLS')
    }

    const OnClickFilterHandler = (type: FilterType) => {
        setValue(type)
    }

    return (
        <>
            <ul>
                {currentMoneyFiltered.map((ob, index) => {
                   return (
                       <li key={index}>
                        <span>{ob.banknots} </span>
                        <span>{ob.value} </span>
                        <span>{ob.number}</span>
                    </li>
                   )
                })}
            </ul>
            <button className={style.filterButton}  onClick={()=>{OnClickFilterHandler('All')}}>All</button>
            <button className={style.filterButton}  onClick={()=>{OnClickFilterHandler('Dollars')}}>Dollars</button>
            <button className={style.filterButton}  onClick={()=>{OnClickFilterHandler('RUBLS')}}>RUBLS</button>
        </>
    )
}