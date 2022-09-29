import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartList,  decrementQuantity,  incrementQuantity,  removeFromCart,  } from "../redux/cartAction";

const Cart = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartData);

  console.log(" Data fetch from saga ", cartData);

  useEffect(() => {
    dispatch(cartList());
  }, []);


  // remove from cart paticular data
  const handlePlaceOder=(id)=>{
        dispatch(removeFromCart(id))
        dispatch(cartList());
  }

  // increment quantity in to cart
    const iQuantity=(id)=>{

      const filterData= cartData.filter((el)=> el.id===id)
     
     
      dispatch(incrementQuantity(id,...filterData))
      dispatch(cartList());
    }


  // decrement quantity in to cart
  const deQuantity=(id)=>{

    const filterData= cartData.filter((el)=> el.id===id)
     
     
    dispatch(decrementQuantity(id,...filterData))
    dispatch(cartList());
      
    }

  return (
    <div>
      <div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="py-3 px-6">
                  Product
                </th>
                <th scope="col" className="py-3 px-6">
                  Qty
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((el) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={el.id}
                >
                  <td className="p-4 w-32">
                    <img src={el.image} alt="cartimg" />
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    {el.brand}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                   
                        {/*  decrement button */}
                        <button  onClick={()=> { deQuantity(el.id)}} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>

                          {/*  quantity */}
                        <span className="bg-gray-50 w-14 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {el.quantity}
                        </span>

                       {/* increment button */}
                        <button onClick={()=> { iQuantity(el.id)}} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </td>
                  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    ₹{el.price}
                  </td>
                  <td className="py-4 px-6">
                    <span

                 onClick={ () => {handlePlaceOder(el.id)}}
                     
                      className="font-medium text-red-600 dark:text-red-500 cursor-pointer"
                    >
                      Remove
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
         <div className=" mt-5 mb-5 grid place-items-center">
           <button className=" text-white"  onClick={ handlePlaceOder}>Place Order</button>
         </div>
      </div>
    </div>
  );
};

export default Cart;
