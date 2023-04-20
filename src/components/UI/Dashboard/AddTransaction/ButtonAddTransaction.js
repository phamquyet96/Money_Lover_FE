import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function ButtonAddTransaction(){

    const date=new Date()
    const [time,setTime]=useState(date)
    const [startDate, setStartDate] = useState(new Date());
    return(
        <>
            <div className="flex justify-center h-screen items-center bg-gray-200 antialiased">
                <div
                    className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
                    <div className="flex flex-col px-6 py-5 bg-gray-50">
                        <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                            <div className="w-full sm:w-1/2">
                                <p className="mb-2 font-light text-gray-700">Wallet</p>
                                <select
                                    type="text"
                                    name=""
                                    className="w-full border-none p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                    id=""
                                >
                                    <option value="0"></option>
                                </select>
                            </div>
                            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                                <p className="mb-2 font-light text-gray-700">Category</p>
                                <select
                                    type="text"
                                    name=""
                                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                    id=""
                                >
                                    <option value="0"></option>
                                </select>
                            </div>
                            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                                <p className="mb-2 font-light text-gray-700">Amount</p>
                                <input
                                    type="text"
                                    name=""
                                    className="w-full h-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                    id=""
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-5 mb-3 space-x-4">
                            <div className="w-full sm:w-1/2">
                                <p className="mb-2 font-light text-gray-700">Date</p>
                                <DatePicker className="w-full p-5 bg-white" selected={startDate} onChange={(date) => setStartDate(date)}/>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <p className="mb-2 font-light text-gray-700">Note</p>
                                <input
                                    type="text"
                                    name=""
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
            </div>
        </>
    )

}
export default ButtonAddTransaction;