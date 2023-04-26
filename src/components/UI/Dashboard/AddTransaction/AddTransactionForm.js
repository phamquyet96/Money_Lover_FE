import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from "formik";
import * as Yup from "yup";
import {myAxios} from "../../../config/axios";
import {useDispatch, useSelector} from "react-redux";
import {transactionActions} from "../../../../feature/transactionSlice";
import {changeCurrentWallet, changeWallets} from "../../../../feature/walletSlice";


function AddTransactionForm(){
    const time = useSelector(state => state.time)
    const myWallet = useSelector(state => state.currentWallet)
    const myWallets = useSelector(state => state.wallets)
    const dispatch = useDispatch()

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
            let payload = {
                date: values.date,
                money: values.money,
                note: values.note,
                walletId: values.walletId,
                subcategoryId: +values.subcategoryId.split(' ')[1]
            }
            myAxios.post('/transaction',payload)
                .then( async res=>{
                    if(values.walletId === myWallet.id){
                        let wallet = (await myAxios.get(`/wallet/info/${myWallet.id}`)).data
                        let transactions = (await myAxios.get(`/transaction/${myWallet.id}`, {
                            params: {
                                year: time.name === 'Last Month' || time.name === 'This Month' || time.name === 'Future' ? time.value.format('MM/YYYY').split('/')[1] : time.name.split('/')[1],
                                month: time.name === 'Last Month' || time.name === 'This Month' || time.name === 'Future' ? time.value.format('MM/YYYY').split('/')[0] : time.name.split('/')[0]
                            }
                        })).data
                        dispatch(changeCurrentWallet(wallet))
                        dispatch(transactionActions.getTrans(transactions))
                        dispatch(changeWallets({
                            walletInfo: wallet,
                            walletId: myWallet.id,
                        }))
                    }
                })
                .catch(err => {
                    console.log(err)
                })
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
                                        className="w-full border-none p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none text-black"
                                        id=""
                                    >
                                                <option value="">Demo</option>
                                                <option value="">Test</option>
                                    </select>
                                </div>
                                <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                                    <p className="mb-2 font-light text-gray-700">Category</p>
                                    <select
                                        type="text"
                                        name='subcategoryId' {...formik.getFieldProps('subcategoryId')}
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
                                            name="money" {...formik.getFieldProps('money')}
                                        className="w-full h-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none text-black"
                                        id=""
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
                                        name="note" {...formik.getFieldProps('note')}
                                        className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none text-black"
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

