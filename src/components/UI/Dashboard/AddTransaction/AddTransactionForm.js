// import {useState} from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import {useDispatch, useSelector} from "react-redux";
// import {useFormik} from "formik";
// import * as Yup from "yup";
// import {walletActions} from "../../../../feature/walletSlice";
// import {myAxios} from "../../../config/axios";
// import {transactionActions} from "../../../../feature/transactionSlice";
// import NavBar from "../Navbar";
// import MenuLeft from "../MenuLeft";
//
//
// function AddTransactionForm({handleClose,data}){
//     const [open, setOpen] = useState(false);
//
//     const dispatch = useDispatch()
//
//     const myWallet = useSelector(state => state.wallet.currentWallet)
//     const myWallets = useSelector(state => state.wallet.wallets)
//
//     const formik = useFormik({
//         initialValues: {
//             walletId: myWallet.name === 'Total' || myWallet.name === '' ? '' : myWallet.id,
//             subcategoryId: '',
//             money: '',
//             date: new Date(),
//             note: ''
//         },
//         validationSchema: Yup.object({
//             walletId: Yup.number().required("Required"),
//             money: Yup.number().required("Required"),
//             note: Yup.string().nullable()
//         }),
//         onSubmit: values => {
//             console.log(values.date)
//             let payload = {
//                 date: values.date,
//                 money: values.money,
//                 note: values.note,
//                 walletId: values.walletId,
//                 subcategoryId: +values.subcategoryId.split(' ')[1]
//             }
//             myAxios.post('/transaction', payload)
//                 .then(async res => {
//                     if (values.walletId === myWallet.id) {
//                         let wallet = (await myAxios.get(`/wallet/info/${myWallet.id}`)).data
//                         let transactions = (await myAxios.get(`/transaction/${myWallet.id}`, {
//                             params: {
//                                 year: time.name === 'Last Month' || time.name === 'This Month' || time.name === 'Future' ? time.value.format('MM/YYYY').split('/')[1] : time.name.split('/')[1],
//                                 month: time.name === 'Last Month' || time.name === 'This Month' || time.name === 'Future' ? time.value.format('MM/YYYY').split('/')[0] : time.name.split('/')[0]
//                             }
//                         })).data
//                         dispatch(walletActions.changeCurrentWallet(wallet))
//                         dispatch(transactionActions.getTrans(transactions))
//                         dispatch(walletActions.changeWallets({
//                             walletInfo: wallet,
//                             walletId: myWallet.id,
//                         }))
//                     } else if (myWallet.id === 'Total') {
//                         let wallet = (await myAxios.get(`/wallet/info/${values.walletId}`)).data
//                         let transactions = (await myAxios.get('/transaction', {
//                             params: {
//                                 year: time.name === 'Last Month' || time.name === 'This Month' || time.name === 'Future' ? time.value.format('MM/YYYY').split('/')[1] : time.name.split('/')[1],
//                                 month: time.name === 'Last Month' || time.name === 'This Month' || time.name === 'Future' ? time.value.format('MM/YYYY').split('/')[0] : time.name.split('/')[0]
//                             }
//                         })).data
//                         dispatch(walletActions.changeWallets({
//                             walletInfo: wallet,
//                             walletId: values.walletId
//                         }))
//                         dispatch(transactionActions.getTrans(transactions))
//                         dispatch(walletActions.resetCurrentWallet())
//                     } else {
//                         let wallet = (await myAxios.get(`/wallet/info/${values.walletId}`)).data
//                         dispatch(walletActions.changeWallets({
//                             walletInfo: wallet,
//                             walletId: values.walletId
//                         }))
//                     }
//                     setOpen(true);
//                     handleClose();
//
//                 })
//                 .catch(err => {
//                     console.log(err);
//                     setOpen(true);
//                 })
//         },
//     });
//
//     const date=new Date()
//     const [time,setTime]=useState(date)
//     const [startDate, setStartDate] = useState(new Date());
//     return(
//         <>
//             <NavBar/>
//             <MenuLeft/>
//             <form onSubmit={formik.handleSubmit}>
//                 <div className="flex justify-center h-screen items-center bg-gray-200 antialiased">
//                     <div
//                         className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
//                         <div className="flex flex-col px-6 py-5 bg-gray-50">
//                             <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
//                                 <div className="w-full sm:w-1/2">
//                                     <p className="mb-2 font-light text-gray-700">Wallet</p>
//                                     <select
//                                         type="text"
//                                         name="walletId"
//                                         {...formik.getFieldProps('walletId')}
//                                         className="w-full border-none p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
//                                         id=""
//                                     >
//                                         {
//                                             myWallets.map(item =>
//                                                 <option value={item.id}>{item.name}</option>
//                                             )
//                                         }
//                                     </select>
//                                 </div>
//                                 <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
//                                     <p className="mb-2 font-light text-gray-700">Category</p>
//                                     <select
//                                         type="text"
//                                         name='subcategoryId' {...formik.getFieldProps('subcategoryId')}
//                                         className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
//                                         id=""
//                                     >
//                                         <option aria-label="None" value="" />
//                                         {data.transCates.map(transCates => {
//                                                 return (
//                                                     <>
//                                                         <optgroup label={transCates.name}>
//                                                             {transCates.subCategories.map(subCategory => {
//                                                                 return (
//                                                                     <option value={`${data.name} ${subCategory.id} ${subCategory.name}`}>{subCategory.name}</option>
//                                                                 )
//                                                             })}
//                                                         </optgroup>
//                                                     </>
//                                                 )
//                                             }
//                                         )}
//                                     </select>
//                                 </div>
//                                 <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
//                                     <p className="mb-2 font-light text-gray-700">Amount</p>
//                                     <input
//                                         type="text"
//                                             name="money" {...formik.getFieldProps('money')}
//                                         className="w-full h-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
//                                         id=""
//                                     />
//                                 </div>
//                             </div>
//                             <div className="flex items-center mt-5 mb-3 space-x-4">
//                                 <div className="w-full sm:w-1/2">
//                                     <p className="mb-2 font-light text-gray-700">Date</p>
//                                     <DatePicker className="w-full p-5 bg-white" selected={startDate}
//                                                 onChange={(date) => setStartDate(date)}/>
//                                 </div>
//                                 <div className="w-full sm:w-1/2">
//                                     <p className="mb-2 font-light text-gray-700">Note</p>
//                                     <input
//                                         type="text"
//                                         name="note" {...formik.getFieldProps('note')}
//                                         className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
//                                         id=""
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div
//                             className="flex flex-row items-center justify-end p-5 space-x-3 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
//                         >
//                             <button className="px-8 py-2 text-white font-semibold bg-green-500 rounded">
//                                 Cancel
//                             </button>
//                             <button className="px-8 py-2 text-white font-semibold bg-blue-500 rounded">
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </>
//     )
//
// }
// export default AddTransactionForm;