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

function handleAddToCart() {
  
 
    fetch("http://localhost:8080/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {
        "brand":singleData.brand,
        "title":singleData.title,
        "image":singleData.image,
        "price":singleData.price,
        "category":singleData.category,
        "product_id": singleData.id,
        "quantity": 1,

      })
      
    })
      .then(()=>{
        // dispatch(getTodoItems());
        /*
 {
      "id": 40,
      "brand": "Tied Ribbons",
      "title": "Set of 3 Owl",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/15/777efffd-ccf5-42c9-b20f-5630d360b57f1576371164101-1.jpg",
      "price": 1299,
      "category": "homedecor"
    }
        */
      })
    
      alert('Product added to cart')
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
                  onClick={handleAddToCart}
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