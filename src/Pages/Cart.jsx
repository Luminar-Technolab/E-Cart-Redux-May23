import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  return (
    <div style={{marginTop:'100px'}}>

      {
        cartArray.length>0?
        <>
          <h3 className='fw-bolder m-5 text-primary'> Cart Summary </h3>
          <table className='container mt-5 table border shadow'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th> Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartArray.map((product,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td> {product.title} </td>
                        <td> <img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /> </td>
                        <td> {product.price} </td>
                        <td> <button className='btn' onClick={()=>dispatch(removeFromCart(product.id))}> <i className="fa-solid fa-trash text-danger fa-2x"></i> </button> </td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
        </>
        : <p className="fw-bolder text-danger m-5 fs-1">Your Cart is Empty!!!</p>
      }
    </div>
  )
}

export default Cart