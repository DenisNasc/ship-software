import { combineReducers } from 'redux'

const initialState = [
    {
        id: Math.random(),
        cotas: [
            {
                id:Math.random(),
                x: '',
                y: '',
                z: ''
            }
        ]
    }
]

const rootReducer = (state = initialState, action) => {
    const newState = [...state]
    const {ownBalizaPosition, type, ownCotaPosition} = action
    
    switch (type) {
        case 'ADD_TABLE_BALIZA':
            const newBaliza = {
                id: Math.random(),
                cotas: [
                    {
                        id: Math.random(),
                        x: '',
                        y: '',
                        z: ''
                    }
                ]
            }

            newState.splice(ownBalizaPosition+1, 0, newBaliza)

            return newState

        case 'DELETE_TABLE_BALIZA':
            if (state.length > 1) newState.splice(ownBalizaPosition, 1)

            return newState
    
        case 'ADD_COTA':
            const newCota = {
                id: Math.random(),
                x:'',
                y:'',
                z:''
            }

            newState[ownBalizaPosition]['cotas'].splice(ownCotaPosition+1, 0, newCota)    

            return newState

        case 'DELETE_COTA':
            if (state[ownBalizaPosition]['cotas'].length > 1) newState[ownBalizaPosition]['cotas'].splice(ownCotaPosition, 1)    

            return newState

        case 'SET_COTA_VALUE':
            const { cotaType, cotaValue } = action

            newState[ownBalizaPosition]['cotas'][ownCotaPosition] = {
                ...newState[ownBalizaPosition]['cotas'][ownCotaPosition], [cotaType]:cotaValue 
            }

            return newState

        default:
            return state
    }
}

export default rootReducer