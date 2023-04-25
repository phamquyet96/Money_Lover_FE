import React from "react";
import { useFormik } from "formik";
import iconWallet from "../../../img/ic_category_all.png";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
    const formik = useFormik({
      initialValues: {
        name: "",
        initialBalance: "",
      }
    });
  
  return (
    <>
      <button
        className="bg-green-500 text-white active:bg-green-600  uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        AddTransaction
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-7">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    Add Transaction
                  </h3>
                </div>
                {/*body*/}

                <div className="relative p-6 flex-auto text-black">
                  <div className="pl-5 pt-5 relative flex content-center mx-auto">
                    <div className="border-2 w-[103px] h-[64px] rounded-lg">
                      <div className=" flex justify-center mt-1.5">
                        <img
                          className="w-12"
                          src={iconWallet}
                          alt={iconWallet}
                        />
                      </div>
                    </div>
                    <div className="ml-8 h-[64px] border rounded-lg hover:border-gray-600 border-gray-300">
                      <p className="text-left text-xs mt-1 font-light ml-3">
                        Wallet Name
                      </p>
                      <div className="w-[328px] h-[48px] rounded-lg">
                        <select
                          style={{ border: "none", outline: "none" }}
                          name="currency"
                          id="currency"
                          className="text-black text-xl rounded-lg w-full pt-1 pl-3 placeholder-gray-300"
                          onChange={formik.handleChange}
                          value={formik.values.currency}
                          required
                        >
                          <option>Vietnamdong</option>
                          <option>US Dollar</option>
                        </select>
                      </div>
                    </div>
                    <div className="ml-8 h-[60px] border rounded-lg hover:border-gray-600 border-gray-300">
                      <p className="text-left text-xs mt-1 font-light ml-3">
                        number
                      </p>
                      <div className="w-[328px] h-[48px] rounded-lg">
                        <input
                          style={{ border: "none", outline: "none" }}
                          type="number"
                          name="name"
                          id="walletName"
                          className="text-black text-xl rounded-lg w-full pt-1 pl-3 placeholder-gray-300"
                          placeholder="Your wallet name?"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 mx-auto relative flex content-center">
                    <div className="border hover:border-gray-600 w-[256px] h-[64px] rounded-lg">
                      <p className="text-left text-xs mt-1 font-light ml-3">
                        Data
                      </p>
                      <div className="w-[256px] h-[48px] rounded-lg">
                        <input
                          style={{ border: "none", outline: "none" }}
                          type="date"
                          name="initialBalance"
                          id="balance"
                          className="text-black text-xl rounded-lg w-full pt-1 pl-3 "
                          placeholder="0"
                          onChange={formik.handleChange}
                          value={formik.values.initialBalance}
                          required
                        />
                      </div>
                    </div>
                    <div className="ml-8 h-[64px] border rounded-lg hover:border-gray-600 border-gray-300">
                      <p className="text-left text-xs mt-1 font-light ml-3">
                        note
                      </p>
                      <div className="w-[328px] h-[48px] rounded-lg">
                        <input
                          style={{ border: "none", outline: "none" }}
                          type="text"
                          name="name"
                          id="walletName"
                          className="text-black text-xl rounded-lg w-full pt-1 pl-3 placeholder-gray-300"
                          placeholder="note?"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}


