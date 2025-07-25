// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Styles/styles.css'
import { ChangeData, SetChurchData   } from './Store/slices/churchs';



export function App() {

    const { Name, Information } = useSelector(state => state.DataChurch);

    const dispatch = useDispatch(); 

    return (
        <div>
            <h3>{ Name }</h3>
            <p>{Information}</p>
            <button type='button' onClick={() => dispatch(ChangeData())}>Change Data</button>
            <button type='button' onClick={() => dispatch(SetChurchData({ Name:'Name Z', Information:'Information Z' }))}>Set Data</button>
            
        </div>
    )
}
