import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

import IconButton from "@mui/material/IconButton";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

import Grid from "@mui/material/Grid";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Email from "@mui/icons-material/Email";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Delete from "@mui/icons-material/Delete";
import ExitToApp from "@mui/icons-material/ExitToApp";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";



const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #0000",
    boxShadow: 0,

    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const logout = () => {
        localStorage.removeItem("token-info");
        handleClose(false);
    };

    return (
        <div>
            <IconButton onClick={handleOpen} style={{ color: "black" }}>
                <PeopleOutlinedIcon />
                <h3 style={{ fontSize: "16px", marginLeft: "10px" }}>Account</h3>
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div
                        style={{
                            backgroundColor: "white",
                            //   padding: "50px",
                            //   borderRadius: "40px",
                            outline: "none",
                        }}
                    >
                        <Grid container alignItems="center">
                            <Grid item xs={4} style={{ textAlign: "left" }}>
                                <IconButton onClick={handleClose}>
                                    <CancelSharpIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={4} style={{ textAlign: "center" }}>
                                <h2>Account Information</h2>
                            </Grid>
                            <Grid item xs={4} style={{ textAlign: "right" }}>
                                <Button
                                    variant="text"
                                    color="success"
                                    startIcon={<ExitToApp />}
                                    onClickCapture={logout}
                                    href="/auth/logout"
                                >
                                    Logout
                                </Button>
                            </Grid>
                        </Grid>
                        <br />
                        <TextField
                            label="Name"
                            fullWidth
                            InputProps={{ startAdornment: <AccountCircle /> }}
                        />
                        <br />
                        <br />
                        <TextField
                            label="Email"
                            fullWidth
                            InputProps={{ startAdornment: <Email /> }}
                        />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginTop: "20px",
                            }}
                        >
                            <Button variant="text" color="inherit" endIcon={<Delete />}>
                                Delete
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}