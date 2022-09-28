import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { productList } from "../redux/productAction";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

   const navigate=useNavigate()
  const data = useSelector((state) => state.productData);

  console.log("Data in Main Component from saga", data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div className=" homeconatiner w-full bg-gray-400  text-center  ">
      <div className="max-w-[1240px] mx-auto px-4 pt-10 ">


      <div className=" grid  sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-[-0px]   "> 
       {
         data.map((el)=>(
          <div className="mt-4" key={el.id}>
          <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" >
         
            <img
              className="p-8 rounded-t-lg"
              src={el.image}
              alt="product-img"
            />
          
          <div className="px-5 pb-5">
            <a href="/">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {el.title}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
                
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ₹{el.price}
              </span>
              <Link
                to={`/product/${el.id}`}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                More Details
              </Link>
            </div>
          </div>
        </div>
        </div>
         ))
       }

        
         </div>

      </div>
    </div>
  );
};

export default Home;
