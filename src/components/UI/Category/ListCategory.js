import Layout from "../Layout/Master";
import category_foodndrink from "../../img//category-img/category_foodndrink.png";
import category_transport from "../../img//category-img/category_transport.png";
import category_homemaintainenance from "../../img//category-img/categoy-homemaintenance.png";
import category_pets from "../../img//category-img/category-pets.png"
import category_waterbill from "../../img//category-img/category_waterbill.png";
import category_phonebill from "../../img//category-img/category_phonebill.png"
import {Link} from "react-router-dom";
import iconWallet from "../../img/iconWallet.png";
import * as React from "react";
import {useState} from "react";

function ListCategory() {
    // food
    const [openFood, setOpenFood] = useState(false)
    const [openTransportation, setOpenTransportation] = useState(false)
    const [openHome, setOpenHome] = useState(false)
    const [openPets, setOpenPet] = useState(false)
    const [openWaterBill, setOpenWalterBill] = useState(false)
    const [openPhoneBill, setOpenPhoneBll] = useState(false)

    return (
        <>
            <Layout>
                <div
                    className="w-[400px] h-10 flex border-b text-gray-500 text-sm rounded-t pl-3 items-center bg-gray-100">Required
                    Expense
                </div>
                <button onClick={() => setOpenFood(true)}
                        className='hover:bg-green-300 w-full'>
                    <div className="w-[400px] h-14 border-b flex">
                        <div className="rounded-full w-[40px] h-[40px] flex my-auto ml-4 bg-gray-100">
                            <img src={category_foodndrink}/>
                        </div>
                        <div className="flex ml-5 mt-3.5 font-roboto">Food & Beverage</div>
                    </div>
                </button>
                    <div className="w-[400px] h-14 border-b flex">
                        <div className="rounded-full w-[40px] h-[40px] flex my-auto ml-4 bg-gray-100">
                            <img src={category_transport}/>
                        </div>
                        <div className="flex ml-5 mt-3.5 font-roboto">Transportation</div>
                    </div>
                <div
                    className="w-[400px] h-10 flex border-b text-gray-500 text-sm rounded-t pl-3 items-center bg-gray-100">Up
                    & Conners
                </div>
                <div className="w-[400px] h-14 border-b flex">
                    <div className="rounded-full w-[40px] h-[40px] flex my-auto ml-4 bg-gray-100">
                        <img src={category_homemaintainenance}/>
                    </div>
                    <div className="flex ml-5 mt-3.5 font-roboto">Home Maintenance</div>
                </div>
                <div className="w-[400px] h-14 border-b flex">
                    <div className="rounded-full w-[40px] h-[40px] flex my-auto ml-4 bg-gray-100">
                        <img src={category_pets}/>
                    </div>
                    <div className="flex ml-5 mt-3.5 font-roboto">Pets</div>
                </div>
                <div className="w-[400px] h-14 border-b flex">
                    <div className="rounded-full w-[40px] h-[40px] flex my-auto ml-4 bg-gray-100">
                        <img src={category_waterbill}/>
                    </div>
                    <div className="flex ml-5 mt-3.5 font-roboto">Water Bill</div>
                </div>
                <div className="w-[400px] h-14 border-b flex">
                    <div className="rounded-full w-[40px] h-[40px] flex my-auto ml-4 bg-gray-100">
                        <img src={category_phonebill}/>
                    </div>
                    <div className="flex ml-5 mt-3.5 font-roboto">Phone Bill</div>
                </div>
                {openFood ? (
                    <>
                        <div
                            className="fixed inset-0 w-full z-10 h-full bg-black opacity-40"
                            onClick={() => setOpenFood(false)}
                        ></div>
                        <div className="fixed flex justify-center top-1/4 inset-0 z-10 overflow-y-auto">
                            <div className='w-[700px] shadow-2xl h-fit bg-white w-fit z-30 mt-4 rounded-md'>
                                <div className='border-b h-14 bg-white grid grid-cols-2 content-center'>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <button onClick={() => setOpenFood(false)}
                                                type="button"
                                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mx-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path fillRule="evenodd"
                                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                      clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                        <div><p className='h-fit mt-1 w-52 text-2xl font-roboto '>Category details</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow-2xl bg-white rounded-b-md grid grid-cols-2'>
                                    <div className='flex grid grid-rows-2'>
                                        <div className='flex justify-center grid grid-cols-2 mt-4'>
                                            <div className='flex justify-center'>
                                                <img className='w-20 flex justify-center'
                                                     src={category_foodndrink}
                                                     alt={category_foodndrink}
                                                />
                                            </div>
                                            <div className='grid grid-rows-2'>
                                                <div className='text-3xl w-[250px] mt-1.5'>Food & Beverage</div>
                                                <div className='text-sm h-6 font-roboto mt-2'>userName</div>
                                            </div>
                                        </div>
                                        <div className='flex justify-center grid grid-cols-2'>
                                            <div></div>
                                            <div
                                                className='bg-rose-500 w-20 h-6 flex text-white rounded-xl items-center pl-2'>EXPENSE
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
                {/*{openTransportation ? (*/}
                {/*    <>*/}
                {/*        <div*/}
                {/*            className="fixed inset-0 w-full z-10 h-full bg-black opacity-40"*/}
                {/*            onClick={() => setOpenTransportation(false)}*/}
                {/*        ></div>*/}
                {/*        <div className="fixed flex justify-center top-1/4 inset-0 z-10 overflow-y-auto">*/}
                {/*            <div className='w-[700px] shadow-2xl h-fit bg-white w-fit z-30 mt-4 rounded-md'>*/}
                {/*                <div className='border-b h-14 bg-white grid grid-cols-2 content-center'>*/}
                {/*                    <div className='grid grid-cols-2 gap-2'>*/}
                {/*                        <button onClick={() => setOpenTransportation(false)}*/}
                {/*                                type="button"*/}
                {/*                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mx-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"*/}
                {/*                        >*/}
                {/*                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor"*/}
                {/*                                 viewBox="0 0 20 20">*/}
                {/*                                <path fillRule="evenodd"*/}
                {/*                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
                {/*                                      clipRule="evenodd"></path>*/}
                {/*                            </svg>*/}
                {/*                        </button>*/}
                {/*                        <div><p className='h-fit mt-1 w-52 text-2xl font-roboto '>Category details</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className='shadow-2xl bg-white rounded-b-md grid grid-cols-2'>*/}
                {/*                    <div className='flex grid grid-rows-2'>*/}
                {/*                        <div className='flex justify-center grid grid-cols-2 mt-4'>*/}
                {/*                            <div className='flex justify-center'>*/}
                {/*                                <img className='w-20 flex justify-center'*/}
                {/*                                     src={category_transport}*/}
                {/*                                     alt={category_transport}*/}
                {/*                                />*/}
                {/*                            </div>*/}
                {/*                            <div className='grid grid-rows-2'>*/}
                {/*                                <div className='text-3xl w-[250px] mt-1.5'>Transportation</div>*/}
                {/*                                <div className='text-sm h-6 font-roboto mt-2'>userName</div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className='flex justify-center grid grid-cols-2'>*/}
                {/*                            <div></div>*/}
                {/*                            <div*/}
                {/*                                className='bg-rose-500 w-20 h-6 flex text-white rounded-xl items-center pl-2'>EXPENSE*/}
                {/*                            </div>*/}

                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </>*/}
                {/*) : null}*/}
                {/*{openHome ? (*/}
                {/*    <>*/}
                {/*        <div*/}
                {/*            className="fixed inset-0 w-full z-10 h-full bg-black opacity-40"*/}
                {/*            onClick={() => setOpenFood(false)}*/}
                {/*        ></div>*/}
                {/*        <div className="fixed flex justify-center top-1/4 inset-0 z-10 overflow-y-auto">*/}
                {/*            <div className='w-[700px] shadow-2xl h-fit bg-white w-fit z-30 mt-4 rounded-md'>*/}
                {/*                <div className='border-b h-14 bg-white grid grid-cols-2 content-center'>*/}
                {/*                    <div className='grid grid-cols-2 gap-2'>*/}
                {/*                        <button onClick={() => setOpenFood(false)}*/}
                {/*                                type="button"*/}
                {/*                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mx-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"*/}
                {/*                        >*/}
                {/*                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor"*/}
                {/*                                 viewBox="0 0 20 20">*/}
                {/*                                <path fillRule="evenodd"*/}
                {/*                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
                {/*                                      clipRule="evenodd"></path>*/}
                {/*                            </svg>*/}
                {/*                        </button>*/}
                {/*                        <div><p className='h-fit mt-1 w-52 text-2xl font-roboto '>Category details</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className='shadow-2xl bg-white rounded-b-md grid grid-cols-2'>*/}
                {/*                    <div className='flex grid grid-rows-2'>*/}
                {/*                        <div className='flex justify-center grid grid-cols-2 mt-4'>*/}
                {/*                            <div className='flex justify-center'>*/}
                {/*                                <img className='w-20 flex justify-center'*/}
                {/*                                     src={category_foodndrink}*/}
                {/*                                     alt={category_foodndrink}*/}
                {/*                                />*/}
                {/*                            </div>*/}
                {/*                            <div className='grid grid-rows-2'>*/}
                {/*                                <div className='text-3xl w-[250px] mt-1.5'>Food & Beverage</div>*/}
                {/*                                <div className='text-sm h-6 font-roboto mt-2'>userName</div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className='flex justify-center grid grid-cols-2'>*/}
                {/*                            <div></div>*/}
                {/*                            <div*/}
                {/*                                className='bg-rose-500 w-20 h-6 flex text-white rounded-xl items-center pl-2'>EXPENSE*/}
                {/*                            </div>*/}

                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </>*/}
                {/*) : null}*/}
                {/*{openPets ? (*/}
                {/*    <>*/}
                {/*        <div*/}
                {/*            className="fixed inset-0 w-full z-10 h-full bg-black opacity-40"*/}
                {/*            onClick={() => setOpenFood(false)}*/}
                {/*        ></div>*/}
                {/*        <div className="fixed flex justify-center top-1/4 inset-0 z-10 overflow-y-auto">*/}
                {/*            <div className='w-[700px] shadow-2xl h-fit bg-white w-fit z-30 mt-4 rounded-md'>*/}
                {/*                <div className='border-b h-14 bg-white grid grid-cols-2 content-center'>*/}
                {/*                    <div className='grid grid-cols-2 gap-2'>*/}
                {/*                        <button onClick={() => setOpenFood(false)}*/}
                {/*                                type="button"*/}
                {/*                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mx-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"*/}
                {/*                        >*/}
                {/*                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor"*/}
                {/*                                 viewBox="0 0 20 20">*/}
                {/*                                <path fillRule="evenodd"*/}
                {/*                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
                {/*                                      clipRule="evenodd"></path>*/}
                {/*                            </svg>*/}
                {/*                        </button>*/}
                {/*                        <div><p className='h-fit mt-1 w-52 text-2xl font-roboto '>Category details</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className='shadow-2xl bg-white rounded-b-md grid grid-cols-2'>*/}
                {/*                    <div className='flex grid grid-rows-2'>*/}
                {/*                        <div className='flex justify-center grid grid-cols-2 mt-4'>*/}
                {/*                            <div className='flex justify-center'>*/}
                {/*                                <img className='w-20 flex justify-center'*/}
                {/*                                     src={category_foodndrink}*/}
                {/*                                     alt={category_foodndrink}*/}
                {/*                                />*/}
                {/*                            </div>*/}
                {/*                            <div className='grid grid-rows-2'>*/}
                {/*                                <div className='text-3xl w-[250px] mt-1.5'>Food & Beverage</div>*/}
                {/*                                <div className='text-sm h-6 font-roboto mt-2'>userName</div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className='flex justify-center grid grid-cols-2'>*/}
                {/*                            <div></div>*/}
                {/*                            <div*/}
                {/*                                className='bg-rose-500 w-20 h-6 flex text-white rounded-xl items-center pl-2'>EXPENSE*/}
                {/*                            </div>*/}

                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </>*/}
                {/*) : null}*/}
                {/*{openWaterBill ? (*/}
                {/*    <>*/}
                {/*        <div*/}
                {/*            className="fixed inset-0 w-full z-10 h-full bg-black opacity-40"*/}
                {/*            onClick={() => setOpenFood(false)}*/}
                {/*        ></div>*/}
                {/*        <div className="fixed flex justify-center top-1/4 inset-0 z-10 overflow-y-auto">*/}
                {/*            <div className='w-[700px] shadow-2xl h-fit bg-white w-fit z-30 mt-4 rounded-md'>*/}
                {/*                <div className='border-b h-14 bg-white grid grid-cols-2 content-center'>*/}
                {/*                    <div className='grid grid-cols-2 gap-2'>*/}
                {/*                        <button onClick={() => setOpenFood(false)}*/}
                {/*                                type="button"*/}
                {/*                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mx-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"*/}
                {/*                        >*/}
                {/*                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor"*/}
                {/*                                 viewBox="0 0 20 20">*/}
                {/*                                <path fillRule="evenodd"*/}
                {/*                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
                {/*                                      clipRule="evenodd"></path>*/}
                {/*                            </svg>*/}
                {/*                        </button>*/}
                {/*                        <div><p className='h-fit mt-1 w-52 text-2xl font-roboto '>Category details</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className='shadow-2xl bg-white rounded-b-md grid grid-cols-2'>*/}
                {/*                    <div className='flex grid grid-rows-2'>*/}
                {/*                        <div className='flex justify-center grid grid-cols-2 mt-4'>*/}
                {/*                            <div className='flex justify-center'>*/}
                {/*                                <img className='w-20 flex justify-center'*/}
                {/*                                     src={category_foodndrink}*/}
                {/*                                     alt={category_foodndrink}*/}
                {/*                                />*/}
                {/*                            </div>*/}
                {/*                            <div className='grid grid-rows-2'>*/}
                {/*                                <div className='text-3xl w-[250px] mt-1.5'>Food & Beverage</div>*/}
                {/*                                <div className='text-sm h-6 font-roboto mt-2'>userName</div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className='flex justify-center grid grid-cols-2'>*/}
                {/*                            <div></div>*/}
                {/*                            <div*/}
                {/*                                className='bg-rose-500 w-20 h-6 flex text-white rounded-xl items-center pl-2'>EXPENSE*/}
                {/*                            </div>*/}

                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </>*/}
                {/*) : null}*/}
                {/*{openPhoneBill ? (*/}
                {/*    <>*/}
                {/*        <div*/}
                {/*            className="fixed inset-0 w-full z-10 h-full bg-black opacity-40"*/}
                {/*            onClick={() => setOpenFood(false)}*/}
                {/*        ></div>*/}
                {/*        <div className="fixed flex justify-center top-1/4 inset-0 z-10 overflow-y-auto">*/}
                {/*            <div className='w-[700px] shadow-2xl h-fit bg-white w-fit z-30 mt-4 rounded-md'>*/}
                {/*                <div className='border-b h-14 bg-white grid grid-cols-2 content-center'>*/}
                {/*                    <div className='grid grid-cols-2 gap-2'>*/}
                {/*                        <button onClick={() => setOpenFood(false)}*/}
                {/*                                type="button"*/}
                {/*                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mx-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"*/}
                {/*                        >*/}
                {/*                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor"*/}
                {/*                                 viewBox="0 0 20 20">*/}
                {/*                                <path fillRule="evenodd"*/}
                {/*                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
                {/*                                      clipRule="evenodd"></path>*/}
                {/*                            </svg>*/}
                {/*                        </button>*/}
                {/*                        <div><p className='h-fit mt-1 w-52 text-2xl font-roboto '>Category details</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className='shadow-2xl bg-white rounded-b-md grid grid-cols-2'>*/}
                {/*                    <div className='flex grid grid-rows-2'>*/}
                {/*                        <div className='flex justify-center grid grid-cols-2 mt-4'>*/}
                {/*                            <div className='flex justify-center'>*/}
                {/*                                <img className='w-20 flex justify-center'*/}
                {/*                                     src={category_foodndrink}*/}
                {/*                                     alt={category_foodndrink}*/}
                {/*                                />*/}
                {/*                            </div>*/}
                {/*                            <div className='grid grid-rows-2'>*/}
                {/*                                <div className='text-3xl w-[250px] mt-1.5'>Food & Beverage</div>*/}
                {/*                                <div className='text-sm h-6 font-roboto mt-2'>userName</div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className='flex justify-center grid grid-cols-2'>*/}
                {/*                            <div></div>*/}
                {/*                            <div*/}
                {/*                                className='bg-rose-500 w-20 h-6 flex text-white rounded-xl items-center pl-2'>EXPENSE*/}
                {/*                            </div>*/}

                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </>*/}
                {/*) : null}*/}

            </Layout>
        </>
    );
}

export default ListCategory;