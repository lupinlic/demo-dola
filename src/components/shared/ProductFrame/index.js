import React from 'react'
import { Link } from 'react-router-dom'

const ProductFrame = ({ products }) => {
    return (
        <div className='row'>
            {products.map((product) => (
                <div className="col-md-2 text-center pro-item p-1 position-relative" key={product.id} style={{ background: '#908f8f' }}>
                    <div className='pro-item_child' style={{ width: '100%', height: '100%', position: 'absolute', background: '#fff', top: '1%', padding: '8px' }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-100 mb-2"
                        />
                        <h5>{product.name}</h5>
                        <p className="text-danger">{product.price}</p>
                        <div className="hover-actions ">
                            <button title='Thêm vào giỏ hàng' style={{ borderRadius: '30px', backgroundColor: '#bd8133', color: '#fff', border: 'none', height: '40px', width: '40px', marginRight: '8px' }}><i className="fas fa-shopping-cart"></i></button>
                            <Link to='/'><button title='Xem chi tiết' style={{ borderRadius: '50%', backgroundColor: '#bd8133', color: '#fff', border: 'none', height: '40px', width: '40px', marginLeft: '8px' }}><i class="fas fa-eye"></i></button></Link>
                        </div>
                    </div>
                    <button style={{ position: 'absolute', bottom: '-5%', left: '30%', border: 'none', borderRadius: '5px', background: '#bd8133', color: '#fff', padding: '5px' }}>Xem chi tiết</button>
                </div>
            ))}
        </div>
    )
}

export default ProductFrame