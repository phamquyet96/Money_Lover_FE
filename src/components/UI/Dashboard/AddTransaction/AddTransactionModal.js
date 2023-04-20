import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import AddTransactionForm from "./AddTransactionForm";
import {myAxios} from "../../../config/axios";

function ControlledTabs({ handleCLose }) {
    const [key, setKey] = useState('expense');

    const [cates, setCates] = useState([])

    useEffect(() => {
        myAxios.get('/type')
            .then(res => {
                setCates(res.data)
            })
    }, [])

    if (cates.length !== 0) {
        return (
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                justify
            >
                <Tab eventKey="expense" title="Expense">
                    <AddTransactionForm handleClose={handleCLose} data={cates[0]} />
                </Tab>
                <Tab eventKey="income" title="Income">
                    <AddTransactionForm handleClose={handleCLose} data={cates[1]} />
                </Tab>
            </Tabs>
        );
    } else {
        return <p>Loading...</p>
    }
}

export default function AddTransactionModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="contained" color="success" onClick={handleShow}>
                Add Transaction
            </Button>
            <Dialog onClose={handleClose} open={show}>
                <DialogTitle>Add Transaction</DialogTitle>
                <DialogContent>
                    <ControlledTabs handleCLose={handleClose} />
                </DialogContent>
            </Dialog>
        </>
    );
}