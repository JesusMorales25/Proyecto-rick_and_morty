import { ADD_FAVORITE,DELETE_FAVORITE } from "./actionTypes"

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites,payload]
            }
        
        case DELETE_FAVORITE:
            const newList = state.myFavorites.filter((character) => character.id !==payload)
            return {
                ...state,
                myFavorites: newList
            }
            
    
        default:
            return {...state};
    }
}

export default reducer