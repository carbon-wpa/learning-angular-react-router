import React from "react";

function Product({match}) {
    return (
        <div>
            <h1>Product component</h1>
            <div>
                Our product id = {match.params.id || 'n/a'}
            </div>
        </div>
    );
}

export default Product;
