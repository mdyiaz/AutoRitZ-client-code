import React from 'react';

const ConfirmationModal = ({title, closeModal, modalData, successAction, successButtonName}) => {
    return (
        <div>
            {/* The button to open modal */}
{/* <label htmlFor="confirmation-modal" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn">Delete</label>
      
      <button onClick={closeModal} className='btn btn-outline'>Cancel</button>


    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmationModal;