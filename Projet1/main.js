//ACTION
const BUY_PHONE = 'BUY_PHONE';
function buyPhone(){
    return{
        type: BUY_PHONE
    }
}
// Reducer
/* (prevState, action)=> newState */

const initialState = {
    phone: 5
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PHONE:
            return{
                ...state, //...state : copie du state
                phones: state.phones - 1
            }

    default: return state
    }
}
//Ajout CDN => Création store
const store = Redux.createStore(reducer)
const availablePhones = document.getElementById('count');
availablePhones.innerHTML = store.getState().phones;
