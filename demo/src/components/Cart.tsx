import React,{useState} from 'react'
import { UseSelector, useSelector,useDispatch } from 'react-redux';
// import './Cart.css';
export default function Cart(){
  const stateCart:any = useSelector((state) => state);
  const dispatch=useDispatch();
    const check=():boolean=>{
        return  stateCart.reducerCarts.length!=0;
    } 
    const handleDelete=(item:any)=>{
      let find=stateCart.reducerProduct.findIndex(function(e:any){
        return item.id===e.id;
      })
      item.quantity+=stateCart.reducerProducts[find].quantity;
      dispatch({type:'DELETEPRODUCT',payload:item})
    }  
  return (
    <div>
        {check()?
         <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
         <div className="panel panel-danger">
           <div className="panel-heading">
             <h1 className="panel-title">Your Cart</h1>
           </div>
           <div className="panel-body">
             <table className="table">
               <thead>
                 <tr>
                   <th style={{width:'4%'}}>STT</th>
                   <th>Name</th>
                   <th style={{width:'15%'}}>Price</th>
                   <th style={{width:'4%'}} >Quantity</th>
                   <th  style={{width:'25%'}} >Action</th>
                 </tr>
               </thead>
               <tbody id="my-cart-body">
               {stateCart.reducerCarts.map((e:any)=>{
                     return   <tr>
                     <th scope="row">1</th>
                     <td>{e.name}</td>
                     <td>{e.price}</td>
                     <td>
                       <input
                         name="cart-item-quantity-1"
                         type="number"
                         value={e.number}
                       />
                     </td>
                     <td>
                       <a
                         className="label label-info update-cart-item"
                         data-product=""
                       >
                         Update
                       </a>
                       <a
                         className="label label-danger delete-cart-item"
                         data-product=""
                         onClick={()=>{handleDelete(e)}}
                       >
                         Delete
                       </a>
                     </td>
                   </tr>
                 })}
               </tbody>
               <tfoot id="my-cart-footer">
                 <tr>
                   <td colSpan={4}>
                     There are <b>{ stateCart.reducerCarts.length}</b> items in your shopping cart.
                   </td>
                   <td colSpan={2} className="total-price text-left">10 000USD</td>
                 </tr>
               </tfoot>
             </table>
           </div>
         </div>
       </div>
        :<h4>Không có sản phẩm trong giỏ hàng</h4>}
    </div>
  )
  
}