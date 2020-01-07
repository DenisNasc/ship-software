import React from 'react'
import InputBaliza from '../../components/inputBaliza'
import { useDispatch, useSelector } from 'react-redux'

const TableBaliza = ({ ownBalizaPosition }) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    return (
        <>
        <table>
            <caption children={`Baliza ${ownBalizaPosition}`}/>
            <thead>
                <tr>
                    <th children='Cota'/>
                    <th children='CL'/>
                    <th children='CT'/>
                    <th children='CV'/>
                </tr>
            </thead>

            <tbody>
                {state[ownBalizaPosition]['cotas'].map((e,i) => <InputBaliza cotaNumber={i+1} ownBalizaPosition={ownBalizaPosition} ownCotaPosition={i} key={e.id} />)}
            </tbody>
        </table>

        <button onClick={() => {dispatch({ownBalizaPosition: ownBalizaPosition, type:'ADD_TABLE_BALIZA'}) }} children='Adicionar Baliza' />
        <button onClick={() => {dispatch({ownBalizaPosition: ownBalizaPosition, type:'DELETE_TABLE_BALIZA'}) }} children='Remover Baliza' />
        </>
    )
}

export default TableBaliza