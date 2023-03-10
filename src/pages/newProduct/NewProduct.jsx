import React from 'react';
import './NewProduct.css'

export default function NewProduct() {
    return (
        <div className='newproduct'>
            <h1 className="newProductTitle">New Product</h1>

            <form className='newProduct'>

                <div className="newProductItem">
                    <label>Image</label>
                    <input type="file" id='file' style={{ border: "none" }} />
                </div>


                <div className="newProductItem">
                    <label>Name</label>
                    <input type="text" placeholder='Apple Airpods' />
                </div>


                <div className="newProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder='123' />
                </div>


                <div className="newProductItem">
                    <label>Active</label>
                    <select className='newProductSelect' name='active' id='active' >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

            </form>
            <button className='newProductBtn'>Create</button>
        </div>
    )
}
