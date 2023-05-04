import Layout from "../Layout/Master";
import category_foodndrink from "../../img//category-img/category_foodndrink.png";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CategoryService from "../../../services/category.service";

function ListCategory() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        CategoryService.getAllCategory().then(res => {
            setCategories(res.data)
        })
    }, [])

    return (
        <>
            <Layout>

                {categories.length > 0 && categories.map((category, index) => (
                    <React.Fragment key={category.id}>
                        <div
                            className="w-[500px] h-10 flex border-b text-gray-500 text-sm rounded-t pl-3 items-center bg-gray-100">{category.name}
                        </div>
                        {category.subCategories.map(subCategory => (
                            <>
                                <button className="hover:bg-green-300 w-full h-14 border-b flex">

                                    <div className="rounded-full w-[40px] h-[40px] flex my-auto ml-4 bg-gray-100">
                                        <img src={category_foodndrink} />
                                    </div>
                                    <div className="flex ml-5 mt-3.5 font-roboto">{subCategory.name}</div>
                                </button>
                            </>

                        ))}
                    </React.Fragment>
                ))}
            </Layout>
        </>
    );
}

export default ListCategory;