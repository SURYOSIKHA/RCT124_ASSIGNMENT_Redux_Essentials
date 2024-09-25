const initialstate=[]

const todoReducer=(state=initialstate, action)=>{
    switch(action.type){
        case "addtodo":
            return [...state, action.payload]
        case "update":
            return state.map((todoobj) =>{
                return todoobj.id == action.payload ? {...todoobj, status:!todoobj.status}:todoobj
            })
        case "delete":
            return state.filter((todoobj)=>todoobj.id != action.payload)
        default:
            return state
    }
}
export default todoReducer