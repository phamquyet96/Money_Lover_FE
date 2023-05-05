import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import UpdateTransactionForm from "./UpdateTransactionForm";

export default function UpdateTransactionModal({selectedItem,setShowTransactionModal}) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="contained" color="success" onClick={()=>setShow(true)}>
                Edit
            </Button>
            {
                show ? (
                    <>
                        <div id="defaultModal" className="fixed inset-0 z-10 overflow-y-auto">
                            <div
                                className="fixed inset-0 w-full h-full bg-black opacity-40"
                                onClick={() => setShow(false)}
                            ></div>
                            <div className="flex items-center min-h-screen px-4 py-8">
                                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-md shadow-lg">
                                    <div className=" bg-white rounded-lg shadow">
                                        <div className="flex items-start justify-between p-4 border-b rounded-t">
                                            <h3 className="text-xl ml-2 font-semibold text-gray-900 ">
                                                Update Transaction!
                                            </h3>
                                            <button type="button" onClick={() => setShow(false)}
                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                    data-modal-hide="defaultModal">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                          clipRule="evenodd"></path>
                                                </svg>
                                                <span className="sr-only" >Close modal</span>
                                            </button>
                                        </div>
                                        <UpdateTransactionForm setShow={setShow} selectedItem={selectedItem} setShowTransactionModal={setShowTransactionModal}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                ) : ""
            }
        </>
    );
}
