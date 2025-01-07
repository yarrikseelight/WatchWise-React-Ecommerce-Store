import React, { useState } from 'react'
import {ImagesCarousel} from '../components/index.js';
import NotificationModal from "../components/modals/NotificationModal.jsx"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import{ addToCart } from "../features/cartSlice.js"
import { openModal } from '../features/modalSlice.js';
import { toast } from 'react-toastify';




const ProductInfo = ({data}) => {
    const {color,images,product,stock, ref, brand, price, originalPrice} = data.fields
    const existingItem = useSelector((store)=> store.cart.cartItems.find((item)=>item.ref === ref)) //used to check number of product already in cart
    const isOpen = useSelector((store)=>store.modal.isOpen)
    const { category, description, info, name, variants} = product.fields
    const [amount, setAmount] = useState(1)


    const dispatch = useDispatch();
    const handleAddToCart = () => {
        toast.success("Added to cart!")
        dispatch(addToCart([amount, {color, images, ref, name, price, stock, brand}]))
    }

    const handleOpenModal = () => {
        dispatch(openModal())
    }



    //allow adding only the number in stock to cart
    const options = [];
    for (let i = 1; i <= stock; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }

    
    const handleAmountChange = (e) => {
        const selectedAmount = parseInt(e.target.value); 
        setAmount(selectedAmount);
    };

    const getStockMessage = (stock) => {
        if (stock < 1) {
          return <div className='pb-2'>
                        <p className="text-red-600 py-4">Out of stock</p>
                        {isOpen ? <NotificationModal> </NotificationModal> : <span></span>}
                        <button className='w-60 btn btn-primary' onClick={handleOpenModal}>Notify me when it's available</button>
                  </div>;
        } else if (stock < 5) {
          return  <div>
                    <p className="text-green-600 py-4">Only few left! {stock} items in stock.</p>
                    <div className='flex flex-col md:flex-row md:mt-5 pb-2'>
                        <select onChange={handleAmountChange} name="quantity" id="quantity" className="w-20 text-xl text-center rounded-xl bg-base-200">{options}</select>
                        <br/>
                        <button type="button" className='w-60 btn btn-primary md:ml-5 z-50' onClick={handleAddToCart} disabled={amount + (existingItem?.quantity || 0) > stock}>Add to Cart</button>  
                    </div>
                  </div>;
        } else {
          return <div>
                    <p className="text-green-600 py-4">Ready to ship: {stock} items available.</p>
                    <div className='flex flex-col md:flex-row md:mt-5 pb-2'>
                      <select onChange={handleAmountChange} name="quantity" id="quantity" className="w-20 text-xl text-center rounded-xl bg-base-200">{options}</select>
                      <br/>
                      <button type="button" className='w-60 btn btn-primary md:ml-5 z-50' onClick={handleAddToCart} disabled={amount + (existingItem?.quantity || 0) > stock}>Add to Cart</button>  
                    </div>
                  </div>;
        }
      };



  return (
    <section>
        <div className='flex flex-col md:flex-row justify-center w-screen md:h-[650px] xl:h-[500px] max-w-full'>
            <div className='w-screen h-[50%] md:w-[50%] md:h-[100%] md:pt-10'>
                <ImagesCarousel images={images}></ImagesCarousel>
            </div>
            <div className=' w-screen h-[50%] md:w-[50%]  md:h-[100%] px-14 md:pt-10'>
                <h5 className='text-sm uppercase tracking-wider pt-2'>{brand}</h5>
                <h3 className='font-bold text-2xl'>{name}</h3>
                <h5 className='font-semibold text-md'>{ref}</h5>
                <div className='flex pt-3'>
                    <p className='text-2xl'>{price}€</p>
                    {originalPrice && (
                    <p className='pl-4 text-xl line-through'>{originalPrice}€</p>
                    )}
                </div>
                {description.length > 250 ? <p className='hidden md:block'>{description.slice(0, description.lastIndexOf(' ', 250))}... <a href="#description-anchor" className="text-blue-500 underline hover:text-blue-700">read more</a></p> : {description}}
                <p className='py-4'>Colors:</p>
                <div className='flex flex-row'>
                {variants && variants.map((variant)=>{
                    if (variant.fields.color){
                        const id = variant.sys.id
                        const colorHex = variant.fields.color.fields.hexcode
                        return (
                            <Link key={id} to={`/products/${id}`} className="flex items-center flex-row m-1">
                              <div className="w-6 h-6 rounded-full border border-zinc-400" style={{ backgroundColor: colorHex }}></div>
                            </Link>
                          );
                        
                    }
                })}
                </div>
                {getStockMessage(stock)}
            </div>
        </div>
    </section>
  )
}

export default ProductInfo
