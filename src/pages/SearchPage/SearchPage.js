import React from "react";
import { SearchPageContainer } from "./styled";
import { useState } from "react";

const SearchPage = () => {
    // const [inputProduct, setInputProduct] = useState("")

    // const showProducts = () => {
    //     setFilteredProducts(
    //         products.filter((item) =>
    //         item.name.toUpperCase().includes(inputProduct.toUpperCase())
    //         )
    //     );
    //     setInputProduct("");
    // };

    return (
        <SearchPageContainer>
            <div className="forms">
                {/* <input
                    placeholder="O que você está buscando?"
                    onChange={(e) => setInputProduct(e.target.value)}
                />
                <button onClick={showProducts}>Buscar</button> */}
            </div>
        </SearchPageContainer>
    )
}

export default SearchPage;