import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div className='p-0' id='header'>
            <div className='container-fluid header p-0'>
                <div className='container h-100'>
                    <div className='row d-flex align-items-center h-100'>
                        <div className='col-md-2'>
                            <img className='w-75' src='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/logo.png?1705898809027' />
                        </div>
                        <div className='col-md-6'>
                            <nav className='header-nav'>
                                <ul className='item_big m-0 d-flex align-items-center justify-content-between'>
                                    <li><Link to='/'>Trang chủ</Link></li>
                                    <li><Link to='/'>Thực đơn</Link></li>
                                    <li><Link to='/'>Giới thiệu</Link></li>
                                    <li><Link to='/'>Tin tức</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col-md-2'></div>
                        <div className='col-md-2 text-white'>
                            <div className='row align-items-center justify-content-center'>
                                <div className='col-md-2'>
                                    <i className="fas fa-search"></i>
                                </div>
                                <div className='col-md-2'>
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className='col-md-8'>
                                    <Link to=''><button className='bt-booking w-100'>Đặt bàn</button> </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='text-center text-white'>
                <p style={{ fontFamily: " 'Dancing Script', cursive ", fontSize: '50px', marginTop: '150px' }}>Dola Restaurant</p>
                <p style={{ fontSize: '30px' }}>Món ăn đa dạng</p>
                <Link to=''><button className='bt-booking' style={{ width: '180px' }}>Đặt bàn ngay</button> </Link>
            </div>

        </div>


    )
}

export default Header