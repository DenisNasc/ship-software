import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const InputBaliza = ({ cotaNumber, ownCotaPosition, ownBalizaPosition }) => {
    const cotasValue = useSelector(state => state[ownBalizaPosition]['cotas'][ownCotaPosition])
    const dispatch = useDispatch()

    return (        
        <tr>
            <td> {cotaNumber} </td>
            <td> <input type='text' placeholder='Comprimento Longitudinal' value={cotasValue.z} onChange={e => {dispatch( {type:'SET_COTA_VALUE', ownCotaPosition:ownCotaPosition ,ownBalizaPosition:ownBalizaPosition, cotaType: 'z', cotaValue:e.target.value} )}}/> </td>
            <td> <input type='text' placeholder='Comprimento Transversal' value={cotasValue.x} onChange={e => {dispatch( {type:'SET_COTA_VALUE', ownCotaPosition:ownCotaPosition ,ownBalizaPosition:ownBalizaPosition, cotaType: 'x', cotaValue:e.target.value} )}}/> </td>
            <td> <input type='text' placeholder='Comprimento Vertical' value={cotasValue.y} onChange={e => {dispatch( {type:'SET_COTA_VALUE', ownCotaPosition:ownCotaPosition ,ownBalizaPosition:ownBalizaPosition, cotaType: 'y', cotaValue:e.target.value} )}}/> </td>

            <td> <button onClick={() => { dispatch({ownBalizaPosition: ownBalizaPosition, ownCotaPosition: ownCotaPosition, type: 'ADD_COTA'}) }} children='Adicionar' /> </td>
            <td> <button onClick={() => { dispatch({ownBalizaPosition: ownBalizaPosition, ownCotaPosition: ownCotaPosition, type: 'DELETE_COTA'}) }} children='Remover' /> </td>

        </tr>
    )
}

export default InputBaliza