import React, { useState } from 'react'
import { BiCheckCircle } from 'react-icons/bi';
import { CloseButton } from 'react-bootstrap';

const FooterTab = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleBankModal = () => {
    setShowBankModal(!showBankModal);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handlePop = () => {
    setShowSuccess(!showSuccess)
  }

  const handleClosePop = () => {
    setShowSuccess(!showSuccess)
  }

  return (
    <div className='container' id='footertab'>
        <div className='footerOne'>
        <h5>Net Total: $0.00</h5>
        <p>Paid Amount:</p>
        <input type="text" placeholder='0.00'/>
        </div>
        <div className='footerTwo'>
            <button onClick={handleShowModal}> POS</button>
            <button>Cash</button>
            <button onClick={handleBankModal}>Bank Transfer</button>
        </div>
      {showModal && <div className="receipt-modal">
    <h3>Add Receipt Number:</h3>
    <label htmlFor="">Receipt No:</label>
    <input type="text" placeholder='2015475200' required/>
    <button className='addNew' onClick={handlePop}>Confirm Payment</button>
      </div>}
      {showBankModal && <div className="bank-modal">
    <h3>Add Bank Name:</h3>
    <label htmlFor="">Bank Name:</label>
    <input type="text" placeholder='Globus' required/>
    <button className='addNew' onClick={handlePop}>Confirm Payment</button>
      </div>}
     {showSuccess && <div className="bank-modal success-pop">
      <p className='setClose' onClick={handleClosePop}><CloseButton/></p>
        <BiCheckCircle fontSize={80} />
    <h3>Success!</h3>
   <p>Do you want to print?</p>
    <button className='addNew'>No</button>
    <button className='addNew'>Yes</button>
      </div>}
    </div>
  )
}

export default FooterTab