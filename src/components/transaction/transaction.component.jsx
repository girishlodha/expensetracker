import React from 'react'
import './transaction.styles.css'
import { useContext, useState ,useEffect } from 'react'
import { BalanceContext } from '../../contexts/balance.context'


const Transaction = () => {
    const [textInput, setTextInput] = useState('');
    const [dollarInput, setDollarInput] = useState(0);
    const{currentHistory,addTransaction}=  useContext(BalanceContext)
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        //console.log(currentHistory)
        console.log(dollarInput)
        console.log(textInput)
        addTransaction(
            {
                bal:dollarInput,
                text:textInput
            }
        );
        
    }
    useEffect(()=>{
        console.log(currentHistory)
    },[currentHistory])
    return (
        <section className="t-wrapper">
            <div className='secondaryText'>
                Add new Transaction
            </div>
            <form className='flexColStart' onSubmit={onSubmitHandler}>
                <label >Text Input:</label>
                <input type="text"
                id="textInput"
                name="textInput"
                placeholder="Enter text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                required/>
                <br />

                <label >Dollar Input:</label>
                <input  type="number"
                id="dollarInput"
                name="dollarInput"
                placeholder="$"
                value={dollarInput}
                onChange={(e) => setDollarInput(e.target.value)}
                required/>
                <br />

                <button type="submit">Submit</button>
            </form>
        </section>

    )
}

export default Transaction
