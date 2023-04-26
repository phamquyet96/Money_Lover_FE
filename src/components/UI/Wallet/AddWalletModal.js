import React, {useState} from 'react';
import { useFormik } from 'formik';
import WalletService from '../../../services/wallet.service';
import Swal from "sweetalert2";
import iconWallet from "../../img/iconWallet.png";

const AddWalletModal = ({ statusWallet }) => {
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      initialBalance: "",
    },
    onSubmit: (values) => {
      WalletService.addWallet(values).then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setShowModal(false);
        statusWallet(true);
      });
    },
  });
  return (
      <>
        <button
            onClick={(e) => setShowModal(true)}
            type="button"
            data-modal-target="defaultModal"
            data-modal-show="defaultModal"
            className="font-roboto ml-8 mt-3.5 bg-button-green h-[32px] w-[146] text-white shadow-xl rounded-lg hover:bg-green-400 font-semibold text-l px-3 py-2 text-center inline-flex items-center"
        >
          <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            ></path>
          </svg>
          Connect wallet
        </button>

        {showModal ? (
            <>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setShowModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className=" bg-white rounded-lg shadow">
                      <div className="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl ml-2 font-semibold text-gray-900 ">
                          Add a wallet first!
                        </h3>
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="defaultModal"
                        >
                          <svg
                              aria-hidden="true"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      <form onSubmit={formik.handleSubmit}>
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
                          <div className="mx-5 h-[64px] border rounded-lg hover:border-gray-600 border-gray-300">
                            <p className="text-left text-xs mt-1 font-light ml-3">
                              Wallet Name
                            </p>
                            <div className="w-[320px] h-[48px] rounded-lg">
                              <input
                                  style={{ border: "none", outline: "none" }}
                                  type="walletName"
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
                              Currency
                            </p>
                            <div className="w-[240px] h-[48px] rounded-lg">
                              <select
                                  style={{ border: "none", outline: "none" }}
                                  name="currency"
                                  id="currency"
                                  className="text-black text-xl rounded-lg w-full pt-1 pl-3 placeholder-gray-300"
                                  onChange={formik.handleChange}
                                  value={formik.values.currency}
                                  required
                              >
                                <option>VND</option>
                                <option>US Dollar</option>
                              </select>
                            </div>
                          </div>
                          <div className="mx-5 h-[64px] border rounded-lg hover:border-gray-600 border-gray-300">
                            <p className="text-left text-xs mt-1 font-light ml-3">
                              Initial Balance
                            </p>
                            <div className="w-[176px] h-[48px] rounded-lg">
                              <input
                                  type="number"
                                  name="initialBalance"
                                  id="balance"
                                  className="text-black border-none outline-none !important focus:ring-0 text-xl rounded-lg w-full pt-1 pl-3 "
                                  placeholder="0"
                                  onChange={formik.handleChange}
                                  value={formik.values.initialBalance}
                                  required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <button
                              data-modal-hide="defaultModal"
                              type="submit"
                              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                          >
                            Save
                          </button>
                          <button
                              data-modal-hide="defaultModal"
                              type="button"
                              onClick={() => setShowModal(false)}
                              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                          >
                            Decline
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
        ) : null}
      </>
  );
};

export default AddWalletModal;