const initialstate = 0

const counterReducer =(state = initialstate, action) =>{
    switch(action.type){
        case "inc":
            return state + 1
        case "dec":
            return state - 1
        default:
            return state
    }
}

export default counterReducer