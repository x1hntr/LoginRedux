const initialState = {
    userName: null,
    password: null
  }
export default (state = initialState , action) =>{
    
    switch(action.type){
        case 'SAVE':
            return action.payload;
        default:
            return state;
    }

}