import React from 'react'
import { useState } from 'react';
import '../pages/styles/modal.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ReactComponent as Cancel } from "./../assets/svg/cancel.svg";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: "545px",
  width: "40%",
  fontFamily: "DM Sans",
  // bgcolor: 'background.paper',
  // bgcolor: '#F5F5F5',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
};

const ModalScreen = ({open,handleClose,handleOpen}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose()
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='modal'>
            <div className="modalContainer">
              <div className='container'>
                <h2 className='modalHeader' id="modal-modal-title">Get notified when we launch</h2>
                <form className='modalForm' onSubmit={handleSubmit}>
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text"/>
                  <label htmlFor="email">Email Address</label>
                  <input type="text"/>
                  <button type='submit'>Join Waitlist</button>
                </form>
              </div>
            </div>
            <div className='modalCancel' onClick={handleClose}>
              <Cancel />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalScreen