import {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";

function AddTransactionForm(){
    const [startDate, setStartDate] = useState(new Date());
    const time = useSelector(state => state.time)
    const myWallet = useSelector(state => state.wallet.currentWallet)
    const dispatch = useDispatch()

    useEffect(() => {

    }, [])


    return(
        <>
            <Formik
                initialValues={{ walletId: '',
                    subcategoryId: '',
                    money: '',
                    date: new Date(),
                    note: ''}}
                onSubmit={(values, { setSubmitting }) => {
                    let payload = {...values, subcategoryId: +values.subcategoryId.split(' ')[1]}
                    console.log(payload,12)
                }}
            >
                {
                    formik=>(
                        <form onSubmit={() => {formik.handleSubmit()}}>
                            <div className="flex flex-col max-w-2xl mx-auto">
                                <div className="flex flex-col px-6 py-5 bg-gray-50">
                                    <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                                        <div className="w-full sm:w-1/2">
                                            <p className="mb-2 font-light text-gray-700">Wallet</p>
                                            <select onChange={formik.handleChange}
                                                    name="walletId"
                                                    className="w-full border-none p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none text-black"
                                            >
                                                <option defaultChecked value={myWallet.id}>{myWallet.name}</option>
                                            </select>
                                        </div>
                                        <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                                            <p className="mb-2 font-light text-gray-700">Category</p>
                                            <select onChange={formik.handleChange}
                                                    name='subcategoryId'
                                                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none text-black"
                                                    id=""
                                            >
                                                <option value="" >Income</option>
                                                <option value="" >Expense</option>

                                            </select>
                                        </div>
                                        <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                                            <p className="mb-2 font-light text-gray-700">Amount</p>
                                            <input
                                                type="text"
                                                name="money" onChange={formik.handleChange}
                                                className="w-full h-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none text-black"

                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5 mb-3 space-x-4">
                                        <div className="w-full sm:w-1/2">
                                            <p className="mb-2 font-light text-gray-700">Date</p>
                                            <DatePicker className="w-full p-5 bg-white text-black" selected={startDate}
                                                        onChange={(date) => setStartDate(date)} dateFormat="yyyy/MM/dd"/>
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                            <p className="mb-2 font-light text-gray-700">Note</p>
                                            <input
                                                type="text"
                                                name="note"
                                                onChange={formik.handleChange}
                                                className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none text-black"
                                                id=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-row items-center justify-end p-5 space-x-3 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
                                >
                                    <button type="button" className="px-8 py-2 text-white font-semibold bg-green-500 rounded">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-8 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-400 rounded">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    )
                }
            </Formik>
        </>
    )

}
export default AddTransactionForm;

