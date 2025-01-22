import React from 'react'
import Title from '../../../components/shared/Title'
import CategoryBlock from '../../../components/shared/CategoryBlock'
import Menu from '../../../components/shared/Menu'

function Home() {
    return (
        <div className='container-fluid m-0 p-0'>
            <div className='container-fluid pt-5 pb-5' style={{ height: '500px', background: '#143b36' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <i style={{ color: '#d69c52', fontSize: '24px' }}>Về Chúng Tôi</i>
                            <p style={{ fontFamily: " 'Dancing Script', cursive ", fontSize: '50px', color: '#fff' }}>Dola Restaurant</p>
                            <p style={{ color: '#fff', fontSize: '16px' }}>Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm phục vụ,
                                mang lại cho khách hàng những trãi nghiệm tuyệt với nhất. Các món ăn với công thức độc quyền sẽ mang lại
                                hương vị mới mẻ cho thực khách. Dola Restaurant xin chân thành cảm ơn.</p>
                        </div>
                        <div className='col-md-6'>
                            <img className='w-100 img-aboutus' src='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/about_image.jpg?1705898809027' />
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='container-fluid' style={{ background: '#10302c', height: '550px' }}>
                <div className='container pt-3'>
                    <Title
                        title='Danh mục nổi bật'></Title>
                    <div className='row mt-3'>
                        <div className='col-md-3'>
                            <CategoryBlock
                                urlImg='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/cate_1.jpg?1705898809027'
                                categoryName='Món bò'
                                categoryDsc='bò'
                            ></CategoryBlock>

                        </div>
                        <div className='col-md-3'>
                            <CategoryBlock
                                urlImg='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/cate_2.jpg?1705898809027'
                                categoryName='Món gà'
                                categoryDsc='gà'
                            ></CategoryBlock>

                        </div>
                        <div className='col-md-3'>
                            <CategoryBlock
                                urlImg='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/cate_3.jpg?1705898809027'
                                categoryName='Món heo'
                                categoryDsc='heo'
                            ></CategoryBlock>

                        </div>
                        <div className='col-md-3'>
                            <CategoryBlock
                                urlImg='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/cate_4.jpg?1705898809027'
                                categoryName='Món cá'
                                categoryDsc='cá'
                            ></CategoryBlock>

                        </div>

                    </div>
                </div>
            </div>
            {/*  */}
            <div className='container-fluid' style={{ background: '#143b36' }}>
                <div className='container pb-5'>
                    <Title
                        title='Thực đơn của chúng tôi'></Title>
                    <Menu></Menu>
                </div>

            </div>


        </div>
    )
}

export default Home