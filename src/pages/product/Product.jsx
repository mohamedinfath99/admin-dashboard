import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css"
import Charts from '../../components/charts/Charts';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';


export default function Product() {
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>

        <Link to="/newproduct">
          <button className='productAddButton'>Create</button>
        </Link>
      </div>

      <div className="productTop">

        <div className="productTopLeft">
          <Charts data={productData} dataKey="Sales" title="Sales Performance" />
        </div>


        <div className="productTopRight">

          <div className="productInfoTop">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5edlCDEtqb0xrT0N5CetVJTnvR33tq-oPA&usqp=CAU' alt='' className='productInfoImg' />
            <span className="productName">Apple Airpods</span>
          </div>


          <div className="productInfoBottom">

            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>


            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>


            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>


            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>

          </div>

        </div>

      </div>


      <div className="productBottom">
        <form className="productForm">

          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder='Aplle Airpods' />

            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>


            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

          </div>

          <div className="productFormRight">
            <div className="productUpload">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5edlCDEtqb0xrT0N5CetVJTnvR33tq-oPA&usqp=CAU' alt='' className='productUploadImg'/>
              <label For="file">
                <Publish />
                <input type="file" id='file' style={{ display: "none" }} />
              </label>
            </div>
            <button className="productButton">Update</button>
          </div>

        </form>
      </div>
    </div>
  )
}
