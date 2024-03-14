import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ordersList } from '../../data';
import './Delivery.css'

const OrderCalendar = ({ orders }) => {
  const [selectedDate, setSelectedDate] = useState(new Date('Mar 8 2024'));

  
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  
  const filteredOrders = ordersList.filter(order => {
    const orderDate = new Date(order.orderDate);
    return orderDate.toDateString() === selectedDate.toDateString();
  });

  return (
    <div className='container'>
      <h3 className='heading'>Select date to see the deliveries on that day</h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
      />
      <p className='orders-date'>Orders for - <span className='date'>{selectedDate.toDateString()}</span></p>
      {
        filteredOrders.length > 0 ? (
          <ul className='list-items-container'>
          {filteredOrders.map(order => (
            <li key={order.orderId} className='result'>
              {order.title} - {order.customerName}
            </li>
          ))}
        </ul>
        ):
        (
          <p className='no-orders'>No orders delivery on <span >{selectedDate.toDateString()}</span></p>
        )
      }
     
    </div>
  );
};

export default OrderCalendar;
