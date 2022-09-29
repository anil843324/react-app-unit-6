import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartList } from "../redux/cartAction";
import { BsPlusCircle} from "react-icons/bs"
import {AiOutlineMinusCircle ,AiOutlineDelete} from "react-icons/ai"
const Cart = () => {

  
  const dispatch = useDispatch();

  
  const cartData = useSelector((state) => state.cartData);

  console.log(" Data fetch from saga ", cartData);

  useEffect(() => {
    dispatch( cartList());
  }, []);


  return (
    <div>
      <div>
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Image
                </th>
                <th scope="col" className="py-3 px-6">
                  Brand Name
                </th>
                <th scope="col" className="py-3 px-6">
                 Category
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>    
                <th scope="col" className="py-3 px-6">
                Decrease quantity
                </th>
                <th scope="col" className="py-3 px-6">
                 Quantity
                </th>
                <th scope="col" className="py-3 px-6">
                Increase quantity
                </th>
                <th scope="col" className="py-3 px-6">
                Remove from cart
                </th>
              </tr>
            </thead>
            <tbody>

             {

              cartData.map((el)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                 <img src={el.image} alt="" className=" h-16 w-16 rounded-full" />
                </th>
                <td className="py-4 px-6 text-gray-900">{el.brand}</td>
                <td className="py-4 px-6 text-gray-900">{el.category}</td>
                <td className="py-4 px-6 text-gray-900">₹{el.price}</td>
                <td className="py-4 px-6 text-gray-900"> <AiOutlineMinusCircle className=' cursor-pointer' size={20}/></td>
                <td className="py-4 px-6 text-gray-900">{el.quantity}</td>
                <td className="py-4 px-6 text-gray-900 ">
                   <BsPlusCircle size={20} className=' cursor-pointer'/> 
                </td>
                
                <td className="py-4 px-6 text-gray-900"> <AiOutlineDelete className=' cursor-pointer' size={20}/> </td>
              </tr>
              ))

             }
            
            
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
