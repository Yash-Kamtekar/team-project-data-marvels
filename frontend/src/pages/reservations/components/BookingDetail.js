import React, { useState } from 'react';
import { Button, API, getLinks } from '../../../common';
import { roomType } from '../../../common/component/options';

function Bookings(props) {
    let links = getLinks();
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    function deleteBooking(bookingId, index) {
        let temp = [...props.data]

        API({
            callURL: links.book_room + '/update',
            callMethod: 'POST',
            bodyData: { bookingid: bookingId, status: 'Canceled' },
            callBack: (res) => {
                if (res.status) {
                    temp[index]['status'] = 'Canceled'
                    props.setBookings(temp);
                    setError(null)
                    setSuccess(res.data)
                }
                else {
                    setError(res.message)
                    setSuccess(null)
                }

            }
        })
    }

    return (
        <>
            {
                props.data.map((item, index) => (
                    <li key={index} className='list-group-item d-flex flex-row justify-content-between mt-3' style={{ backgroundColor: '#E7E5EA', border: '1px solid rgba(0,0,0,.125)', borderWidth: '0 0 1px' }}>
                        <div className='d-flex flex-column justify-content-around'>
                            <h6>Reservation No {item.bookingid}</h6>
                            {error !== null && <p>
                                <font color='red'>{error}</font>
                            </p>}
                            {success !== null && <p>
                                <font color='success'>{success}</font>
                            </p>}
                            <p className='mb-0'>{item.hotelname}</p>
                            <p> Number of Guests {item.numberofguests}</p>
                            <p>Number of rooms {item.numberofrooms}</p>
                            <p>Start Date {item.start_date}</p>
                            <p>End Date {item.end_date}</p>
                            <>{item.status}</>
                            <p className='mb-0'>Room Type {roomType[item.roomtypeid]}</p>
                            <p className='mb-0'>Price: $<span>{item.roomprice}</span></p>
                        </div>
                        <div className='d-flex flex-column justify-content-around'>
                            <Button id='cancel' color='danger' text='Cancel Reservation' onClick={() => deleteBooking(item.bookingid, index)} />
                        </div>
                    </li>
                ))
            }
        </>
    )
}

export default Bookings;