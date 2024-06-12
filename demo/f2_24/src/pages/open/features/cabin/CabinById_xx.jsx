import { useState, useEffect } from 'react';
import { useCabinById } from './useCabinById';
import { FaUsers } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { MdPrivacyTip } from 'react-icons/md';

import { useParams, Link } from 'react-router-dom';
// import {
//   addBooking,
//   updateBooking,
//   deleteBooking,
// } from '../../../../services/apiBookings';

const CabinById_xx = () => {
  const { id } = useParams();
  console.log('cabin id', id);
  // const { getCabinById, cabin, isLoading } = useCabinById(id);

  useEffect(() => {
    getCabinById(id);
  }, []);

  return (
    <>
      <div className='flex-1 px-8 py-12 grid'></div>
    </>
  );
};

export default CabinById_xx;
