import category_foodndrink from "../../img//category-img/category_foodndrink.png";
import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";
import CategoryService from "../../../services/category.service";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

function ListCategory() {
    const [openFood, setOpenFood] = useState(false);
    const [categories, setCategories] = useState([]);
    const [showAddCategory, setShowAddCategory] = useState(false)

    useEffect(() => {
        CategoryService.getAllCategory().then(res => {
            setCategories(res.data)
        })
    }, [])

    return (
        <>
            <div className="min-h-screen flex">
                <div className="bg-custom-gray h-[100vh] flex-1">
                    <div className="w-full h-[62px] text-center">
                        <div className="w-full h-full-">
                            <div className="w-full h-[62px] bg-white shadow">
                                <div className="mx-52 h-[62px] flex justify-between">
                                    <div className="w-fit flex">
                                        <Link to="/dashboard">
                                            <FontAwesomeIcon className='mt-5 mr-8 cursor-pointer' icon={faArrowLeft}
                                                             size="lg"
                                                             style={{color: "#595959",}}/>
                                        </Link>
                                        <p className='w-fit h-fit text-xl mt-4 font-semibold font-roboto'>Category</p>
                                    </div>
                                    <div className='flex font-roboto ml-8 mt-3.5 bg-button-green h-[32px] w-[146] text-white shadow-xl rounded-lg hover:bg-green-400 font-semibold text-l px-3 py-2 text-center inline-flex items-center' onClick={() => setShowAddCategory(true)}>
                                        <button>Add Category</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-2xl mx-auto bg-white w-[500px] rounded mt-10">
                        <div>
                            {categories.length > 0 && categories.map((category, index) => (
                                <React.Fragment key={category.id}>
                                    <div
                                        className="w-[500px] h-10 flex border-b text-gray-500 text-sm rounded-t pl-3 items-center bg-gray-100">{category.name}
                                    </div>
                                    {category.subCategories.map(subCategory => (
                                        <>
                                            <button className="hover:bg-green-300 w-full h-14 border-b flex"
                                                    onClick={() => setOpenFood(true)}>

                                                <div
                                                    className="rounded-full w-[40px] h-[40px] flex my-auto ml-4 bg-gray-100">
                                                    <img src={category_foodndrink}/>
                                                </div>
                                                <div className="flex ml-5 mt-3.5 font-roboto">{subCategory.name}</div>
                                            </button>

                                        </>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    {showAddCategory ? (
                        <div
                            className="flex justify-center mb-10 md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div
                                className="fixed inset-0 w-full h-full bg-black opacity-40"
                            ></div>
                            <div className="relative w-full max-w-xl max-h-full">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div
                                        className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                            Add SubCategory
                                        </h3>
                                        <button type="button"
                                                onClick={() => setShowAddCategory(false)}
                                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                      clip-rule="evenodd"></path>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <div className="flex gap-3 h-fit">
                                            <div className="w-full sm:w-1/2">
                                                <p className="mb-2 font-light text-gray-700">Wallet</p>
                                                <select
                                                        className="w-full border-2 p-5 focus:ring-black bg-white border border-gray-200 rounded shadow-sm appearance-none text-black"
                                                >
                                                    <option></option>
                                                </select>
                                            </div>
                                            <div className="w-full sm:w-1/2">
                                                <p className="mb-2 font-light text-gray-700">Amount</p>
                                                <input
                                                    type="text"
                                                    className="w-full border-2 p-5 bg-white focus:ring-black border-gray-200 rounded shadow-sm appearance-none text-black"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button type="button"
                                                className="text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">SAVE

                                        </button>
                                        <button type="button"
                                                onClick={() => setShowAddCategory(false)}
                                                className="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 ">DECLINE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>): null
                    }
                </div>
            </div>
        </>
    );
}

export default ListCategory;