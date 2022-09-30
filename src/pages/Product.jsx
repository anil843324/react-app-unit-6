import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cartList } from "../redux/cartAction";




const Product = () => {
  const [singleData, setSingleData] = useState({});

   const dispatch=useDispatch();
   const [toggle,setToggle]=useState(false)
   
  const { id } = useParams();

  const cartData = useSelector((state) => state.cartData);



   const navigate=useNavigate()

  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((response) => response.json())
      .then((data) => {

        setSingleData(data);

        // console.log(data);
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
  
      })
    
      alert('Product added to cart')
      dispatch(cartList());
}




//  checking data in cart avilable or not
useEffect(() => {
  dispatch(cartList());
}, []);

  // console.log('cart from  product', cartData)
   
  useEffect(()=>{

  cartData.forEach((el)=>{
    if( Number(el.product_id)=== Number(id) ) {
       setToggle(true);    
       return ;
    }else{
     setToggle(false);
      return ;
    }
 })


  })


 

 

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

            {
              toggle ? <>  <button
                onClick={() =>  navigate('/cart')}
                className="my-4  w-[100%] md:w-[30%] text-white  "
              >
                Go to Cart Go 
              </button></> : <><button
                  onClick={handleAddToCart}
                className="my-4  w-[100%] md:w-[30%] text-white  "
              >
                Add to Cart
              </button></>
            }
            
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