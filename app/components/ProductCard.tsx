import React from 'react'
import AddtoCart from './AddtoCart'
import styles from './ProductCard.module.css'; //converts css style class into JS object.


const ProductCard = () => {
  return (
    <div className='container'>
      {/* <div className={styles.card}> */}
      {/* <div className='p-5 my-5 bg-sky-400 text-white hover:bg-sky-500'> */}
      <div>
<AddtoCart/>
</div>

      </div>
  )
}

export default ProductCard;

// vertical-align : 

