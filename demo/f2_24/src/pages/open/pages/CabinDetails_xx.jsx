import { useParams, Link } from 'react-router-dom';
import Header_xx from '../components/Header_xx';
import CabinById_xx from '../features/cabin/CabinById_xx';

const CabinDetails_xx = () => {
  const { id } = useParams();

  console.log('cabin id', id);
  return (
    <>
      <Header_xx />
      <CabinById_xx />
    </>
  );
};

export default CabinDetails_xx;
