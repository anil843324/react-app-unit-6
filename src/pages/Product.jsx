import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";




const Product = () => {
  const [singleData, setSingleData] = useState({});

  const { id } = useParams();

  const dispatch = useDispatch();

   const navigate=useNavigate()

  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((response) => response.json())
      .then((data) => {

        setSingleData(data);

        console.log(data);
      });
   
  }, [id]);
// add to cart Data 

// var jsonData = {
//   "users": [
//       {
//           "name": "alan", 
//           "age": 23,
//           "username": "aturing"
//       },
//       {
//           "name": "john", 
//           "age": 29,
//           "username": "__john__"
//       }
//   ]
// }

function handleAddToCart() {
  
  // fetch('http://localhost:8080/cart ', {  // Enter your IP address here

  //   method: 'POST', 
  //   mode: 'cors', 
  //   body: JSON.stringify(singleData) // body data type must match "Content-Type" header

  // })


  fetch.post('http://localhost:8080/cart',JSON.stringify(singleData) ).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});
}



 

  return (
    <div className=" homeconatiner w-full bg-white  text-center min-h-screen   ">
      <div className="max-w-[640px] mx-auto  py-10    ">
        <div className="">
        
          {/*  card Details */}
          <div className=" text-[18px] ">
           <div className=" flex justify-center items-center">
           <img
              className="p-8 rounded-t-lg"
              src={singleData.image}
              alt="product-img"
            />
           </div>
         

            <div className=" flex  justify-between mx-10 my-2 items-center border-b-[1px] border-[rgb(128,128,128,128)] text-transform: capitalize ">
              <span>Brand Name</span>
              <span>{singleData.brand} </span>
            </div>

            <div className="flex justify-between mx-10 my-2 items-center border-b-[1px] border-[rgb(128,128,128,128)] text-transform: capitalize">
              <span>Title</span>
              <span> {singleData.title} </span>
            </div>
           
            <div className="flex justify-between mx-10 my-2 items-center border-b-[1px] border-[rgb(128,128,128,128)] text-transform: capitalize">
              <span>Price</span>
              <span>
                
              ₹{singleData.price}
              </span>
            </div>
            <div className="flex justify-between mx-10 my-2 items-center border-b-[1px] border-[rgb(128,128,128,128)] text-transform: capitalize">
              <span>Category</span>
              <span>
                
              {singleData.category}
              </span>
            </div>
          
            <div className=" border-[rgb(128,128,128,128)] mx-10 flex justify-center  gap-2">
              <button
                  onClick={() => handleAddToCart}
                className="my-4  w-[100%] md:w-[30%] text-white  "
              >
                Add to Cart
              </button>

              <button
                onClick={() =>  navigate('/cart')}
                className="my-4  w-[100%] md:w-[30%] text-white  "
              >
                Go to Cart Go 
              </button>

              <button
               
                 onClick={() =>  navigate('/')}
                className="my-4  w-[100%] md:w-[30%] text-white  "
              >
                 Go to Home Page
              </button>

            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Product;