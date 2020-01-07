import React from 'react'
import { useSelector } from 'react-redux'

import TableBaliza from '../../components/tableBaliza'

import generateJSON from '../../utils/functions/generateJSON'

const InputTable = () => {
    const stateStore = useSelector(state => state)

    return (
        <>
            {stateStore.map((e,i) => <TableBaliza ownBalizaPosition={i} key={e.id}/>)}

                
            <button onClick = {() => generateJSON(stateStore)} children='calcular'/>
        </>
    )
}

export default InputTable