import {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import TransactionService from "../../../../services/transaction.service";
import {walletActions} from "../../../../feature/walletSlice";
import categoryService from "../../../../services/category.service";


let date = new Date()
let dateFormat = date.toISOString().slice(0, 10);

function UpdateTransactionForm({setShow, selectedItem,setShowTransactionModal}) {
    const [startDate, setStartDate] = useState(new Date());
    const [categories, setCategories] = useState([]);
    const [catePick, setCatePick] = useState(0);
    const myWallet = useSelector(state => state.wallet.currentWallet)
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            const res = await categoryService.getAllCategory();
            setCategories(res.data);
        }
        getData();
    }, []);

    const formik = useFormik({
        initialValues: {
            walletId: myWallet.id,
            subcategoryId:categories.id,
            money: selectedItem.money,
            date: selectedItem.date.split("-").join("/"),
            note: `${selectedItem.note}`
        },

        onSubmit: values => {
            TransactionService.updateTransaction(selectedItem.id,values)
                .then((res) => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: res.data.message,
                        showConfirmButton: false,
                        timer: 1500,
                    })
                    dispatch(walletActions.changeCurrentWallet(res.data.wallet))
                    setShowTransactionModal(false)
                    setShow(false)

                })
        }
    })

    const handeChangeDate = (date) => {
        let myDate = new Date(date)
        let data = myDate.toISOString().slice(0, 10);
        setStartDate(date)
        formik.setFieldValue('date', data)
    }

    const handleChangeCategory = (id) => {
        setCatePick(id);
    }

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
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
                                <select onChange={
                                    formik.handleChange
                                }
                                        name='subcategoryId'
                                        className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none text-black"
                                        id=""
                                >
                                    {categories.map((c, index) => (
                                        <optgroup label={c.name} key={c.id}>
                                            {c.subCategories.map(s => (
                                                <option
                                                    value={s.id} key={s.id}>{s.name}
                                                </option>
                                            ))}
                                        </optgroup>
                                    ))}

                                </select>
                            </div>
                            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                                <p className="mb-2 font-light text-gray-700">Amount</p>
                                <input
                                    type="text"
                                    name="money" onChange={formik.handleChange}
                                    className="w-full h-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none text-black"
                                    value={formik.values.money}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-5 mb-3 space-x-4">
                            <div className="w-full sm:w-1/2">
                                <p className="mb-2 font-light text-gray-700">Date</p>
                                <DatePicker className="w-full p-5 bg-white text-black" selected={startDate} value={formik.value?.date}
                                            onChange={(date) => handeChangeDate(date)} dateFormat="yyyy/MM/dd"/>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <p className="mb-2 font-light text-gray-700">Note</p>
                                <input
                                    type="text"
                                    name="note"
                                    onChange={formik.handleChange}
                                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none text-black"
                                    id=""
                                    value={formik.values.note}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-row items-center justify-end p-5 space-x-3 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
                    >
                        <button onClick={() => setShow(false)} type="button"
                                className="px-8 py-2 text-white font-semibold bg-green-500 rounded">
                            Cancel
                        </button>
                        <button type="submit"
                                className="px-8 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-400 rounded">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </>
    )

}

export default UpdateTransactionForm;



