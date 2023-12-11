import './actualbalance.styles.css'

import React from 'react'

const ActualBalance = () => {
    return (
        <section className="wrapper">
            <div className="paddings flexColStart b-container">
                <div>YOUR BALANCE</div>
                <div>$ 300</div>
            </div>
            <div className="flexStart block ">
                <div className=" flexColStart positive">
                   <div>INCOME</div>
                   <div>$600</div>
                </div>
                <div className=" flexColStart negative">
                <div>EXPENSE</div>
                <div>$300</div>
                </div>
            </div>


        </section>
    )
}

export default ActualBalance
