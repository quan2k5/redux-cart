import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
export default function ListProduct() {
  const stateProducts:any= useSelector(state => state);
  const dispatch=useDispatch();
  const addProductInCart=(product:any)=>{
    dispatch({
      type: 'ADDPRODUCT',
      payload:product,
    });
  }
  const checkQuantity=(quantity:number)=>{
    return quantity>0;
  }
  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {stateProducts.reducerProducts.map((e:any)=>{
              return  <div>
              <div className="media product">
                  <div className="media-left">
                      <a href="#"><img className="media-object" src={e.img}alt=''/></a>
                  </div>
                  <div className="media-body">
                      <h4 className="media-heading">{e.name}</h4>
                      <p>{e.description}</p>
                      {checkQuantity(e.quantity)?<>
                          <input name="quantity-product-1"type="number"value={e.quantity}/>
                          <a data-product="1" className="price" style={{cursor:'pointer'}} onClick={()=>{addProductInCart(e)}}>{e.price}USD</a> 
                      </>:<span className="price">{e.price}USD</span>}
                  </div>
              </div>
          </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
