import { createContext, useState  , useEffect} from "react";


const addToHistory= (currentHistory,transactionToAdd)=>{
    return [...currentHistory, transactionToAdd]

}
const giveBalance = (currentBalance,transactionToAdd)=>{
    if(transactionToAdd.bal>0){
        currentBalance = currentBalance+transactionToAdd.bal
    }
    else{
        currentBalance = currentBalance-transactionToAdd.bal
    }
    return currentBalance
}
//actual value
export const BalanceContext = createContext({
    currentHistory:[],
    addTransaction: ()=> {},
    currentBalance:0 , 
    //setCurrentBalance:()=>{}
});


export const BalanceProvider = ({children}) =>{
    const [currentHistory,setCurrentHistory] =  useState([]);
    const [currentBalance,setCurrentBalance] =  useState(0);
    console.log(currentHistory)
    const addTransaction=(transactionToAdd)=>{
        console.log(1);
        setCurrentHistory(addToHistory(currentHistory,transactionToAdd));
        setCurrentBalance(giveBalance(currentBalance,transactionToAdd))
    }
    
    const value = {addTransaction , currentHistory ,currentBalance };
    
    return <BalanceContext.Provider value = {value} >{children}</BalanceContext.Provider>
}
