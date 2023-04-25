import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from "formik";
import * as Yup from "yup";


function AddTransactionForm(){

    const formik = useFormik({
        initialValues: {
            walletId: '',
            subcategoryId: '',
            money: '',
            date: new Date(),
            note: ''
        },
        validationSchema: Yup.object({
            walletId: Yup.number().required("Required"),
            money: Yup.number().required("Required"),
            note: Yup.string().nullable()
        }),
        onSubmit: values => {

        },
    });

    const date = new Date()
    const [startDate, setStartDate] = useState(new Date());
    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col max-w-2xl mx-auto">
                        <div className="flex flex-col px-6 py-5 bg-gray-50">
                            <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                                <div className="w-full sm:w-1/2">
                                    <p className="mb-2 font-light text-gray-700">Wallet</p>
                                    <select
                                        type="text"
                                        name="walletId"
                                        {...formik.getFieldProps('walletId')}
                                        className="w-full border-none p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                        id=""
                                    >


                                                <option value="">Demo</option>


                                    </select>
                                </div>
                                <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                                    <p className="mb-2 font-light text-gray-700">Category</p>
                                    <select
                                        type="text"
                                        name='subcategoryId' {...formik.getFieldProps('subcategoryId')}
                                        className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                        id=""
                                    >
                                        <option aria-label="None" value="" />
                                    </select>
                                </div>
                                <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                                    <p className="mb-2 font-light text-gray-700">Amount</p>
                                    <input
                                        type="text"
                                            name="money" {...formik.getFieldProps('money')}
                                        className="w-full h-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                        id=""
                                    />
                                </div>
                            </div>
                            <div className="flex items-center mt-5 mb-3 space-x-4">
                                <div className="w-full sm:w-1/2">
                                    <p className="mb-2 font-light text-gray-700">Date</p>
                                    <DatePicker className="w-full p-5 bg-white" selected={startDate}
                                                onChange={(date) => setStartDate(date)}/>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <p className="mb-2 font-light text-gray-700">Note</p>
                                    <input
                                        type="text"
                                        name="note" {...formik.getFieldProps('note')}
                                        className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                        id=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex flex-row items-center justify-end p-5 space-x-3 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
                        >
                            <button className="px-8 py-2 text-white font-semibold bg-green-500 rounded">
                                Cancel
                            </button>
                            <button className="px-8 py-2 text-white font-semibold bg-blue-500 rounded">
                                Save
                            </button>
                        </div>
                    </div>
            </form>
        </>
    )

}
export default AddTransactionForm;

