import React from 'react';
import Button from '../../../common/component/Button';
import logo from '../../../assets/sample.jpg'


function HotelCards(props) {
    return (
        <>
            {
                props.data.map((item, index) => (
                    <div className='card shadow-sm m-3' style={{ padding: '15px', width: '330px' }}>
                        <h4 className='mb-0'>{item.hotelName}</h4>
                        <p text='City'>{item.city}</p>
                        <img src={logo} className='card-img' />
                        <div className='d-flex flex-row justify-content-between mt-2 mb-3'>
                            <div className='col-8 d-flex flex-column'>
                                <h5>{item.roomType}</h5>
                                <div className='d-flex flex-row justify-content-start'>
                                    <span>Bedrooms</span>
                                    <span>, # Bathrooms</span>
                                </div>
                            </div>
                            <div className='d-flex align-self-center'>
                                <h4>{item.price}</h4>
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-center'>
                            <Button variant='outline' id='details' text='Search Hotels' />
                        </div>
                    </div>
                ))
            }

        </>
    )
}
export default HotelCards;