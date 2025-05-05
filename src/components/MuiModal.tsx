import React, { useState } from 'react';
import { Box, Typography, Modal, Snackbar, Button, IconButton } from '@mui/material';
import { IoMdClose } from "react-icons/io";

const MuiModal = () => {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);

  const handleOpenToast = () => setToast(true);
  const handleCloseToast = () => setToast(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const action = (
    <>
      <Button
        variant="text"
        color="inherit"
        size="small"
        onClick={handleCloseToast}
        className="!text-red-500 hover:!text-red-600 font-medium"
      >
        UNDO
      </Button>


      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseToast}
      >
        <IoMdClose fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          className="rounded-xl shadow-md px-6 py-2"
        >
          Open Modal
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(to right, #f8fafc, #e2e8f0)',
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            maxWidth: 500,
            width: '90%',
            outline: 'none',
            textAlign: 'center',
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            Welcome to the Modal
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="body1"
            sx={{ color: 'text.secondary', mb: 3 }}
          >
            This is a simple practice modal using MUI and Tailwind CSS.
          </Typography>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="error"
            className="rounded px-4 py-1"
          >
            Close Modal
          </Button>
        </Box>
      </Modal>

      {/* Snackbar Section */}
      <h1 className="text-center text-2xl font-semibold mt-10">Snackbar (Toast) Practice</h1>
      <div className="mt-4 flex justify-center">
        <Button
          variant="contained"
          color="success"
          onClick={handleOpenToast}
          className="rounded-xl px-6 py-2"
        >
          Open Snackbar
        </Button>
      </div>

      <Snackbar
        open={toast}
        autoHideDuration={6000}
        onClose={handleCloseToast}
        message="Practice Toast or Snackbar"
        action={action}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        ContentProps={{
          sx: {
            backgroundColor: '#ffffff',
            color: '#000000',
            border: '1px solid #ccc',
            boxShadow: 3,
            px: 2,
          },
        }}
      />
    </>
  );
};

export default MuiModal;
