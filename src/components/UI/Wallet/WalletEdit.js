import React from 'react';
import { Formik, useFormik, Form, Field } from 'formik';
import WalletService from '../../../services/wallet.service';
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';

import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const WalletEdit = () => {

    const { id } = useParams();
    const [data, setData] = useState({
        name: '',
        initialBalance: 0
    });
    useEffect(() => {
        axios.get('http://localhost:8000/api/wallet/info/' + id, { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } })
            .then(res => {
                console.log(res.data);
                setData(res.data)
            })
            .catch(err => console.error(err))
    }, [])


    return (
        <>
            <Formik
                initialValues={
                    data
                }
                enableReinitialize={true}
                onSubmit={(values) => {
                    console.log(values);
                    
                }}
            >
                <Form>
                    <Field name={'initialBalance'} type={'text'} />
                    <Field name={'name'} type={'text'} />
                    <button>Save</button>
                </Form>

            </Formik>

         
        </>
    );
};

export default WalletEdit;