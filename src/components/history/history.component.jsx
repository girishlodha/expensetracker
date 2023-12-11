import React from 'react'
import './history.styles.css'
import { useContext } from 'react'
import { BalanceContext } from '../../contexts/balance.context'
const History = () => {
    const { currentHistory } = useContext(BalanceContext)
    return (

        <section className="h-wrapper">
            <div className="paddings flexColStart h-container">
                <span className='primaryText'>History</span>
                {
                    currentHistory.map((value, index) => (
                    <div key={index} className='amtthing-container flexStart'>
                      <span>{value.text}</span>
                      <span>{value.bal}</span>
                    </div>
                  ))
                }

            </div>
        </section>
    )
}

export default History
