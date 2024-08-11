import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'
import PlaidLink from './PlaidLink'


const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance, user
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart accounts={accounts} />
        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
            Bank Accounts: {totalBanks}
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance
                </p>
                <div className='total-balance-amount flex-center gap-2'>
                    <AnimatedCounter amount={totalCurrentBalance}/>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-2 md:hidden'>
            {user && <PlaidLink user={user} variant='mobile'/>}
        </div>
    </section>
  )
}

export default TotalBalanceBox