import React ,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
//initial state
const initialState={
    transactions:[
        {id:1,text:'Flower',amount:-20},
        {id:2,text:'Book',amount:-10},
        {id:3,text:'Computer',amount:-20},
        {id:1,text:'Notebook',amount:20},
        {id:1,text:'Airpods',amount:120},
    ]
}
//create comtext
export const GlobalContext=createContext(initialState);

//etiketler app.js children olcak
export const GlobalProvider =({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialState);
function deleteTransaction(id){
    dispatch({
type:'DELETE_TRANSACTION',
payload:id
    });
}
function addTransaction(transaction){
    dispatch({
type:'ADD_TRANSACTION',
payload:transaction
    });
}

    return (<GlobalContext.Provider value={{
        //values get transactınos
        transactions:state.transactions,deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}