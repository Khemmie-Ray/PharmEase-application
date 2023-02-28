import React from 'react'

const FooterTab = () => {
  return (
    <div className='container' id='footertab'>
        <div className='footerOne'>
        <h5>Net Total: $0.00</h5>
        <p>Paid Amount:</p>
        <input type="text" placeholder='0.00'/>
        </div>
        <div className='footerTwo'>
            <button>POS</button>
            <button>Cash</button>
            <button>Bank Transfer</button>
        </div>
    </div>
  )
}

export default FooterTab