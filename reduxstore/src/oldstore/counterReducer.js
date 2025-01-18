

const initialState = {
    count: 0
}

const couterReducer = (state=initialState,action)=>{
    switch(action.type){
        case "set_count":
            return {...state,count:action.payload}
        case 'Increment':
            return {...state,count:state.count+1}
        case 'Decrement':
            return {...state,count:state.count-1}
        default:
            return state
    }
}

export default couterReducer;