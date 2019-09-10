 import  * as ActionTypes from  "../ActionType/ActionType"


 export const deleteUser = (index) => ({
    type: ActionTypes.DELETE_USER,
     payload: index
    
 });

 export const addUser=()=>({
    type:ActionTypes.ADD_USER 

 })

 export const EditUser=()=>({
     type:ActionTypes.EDIT_USER
 })
