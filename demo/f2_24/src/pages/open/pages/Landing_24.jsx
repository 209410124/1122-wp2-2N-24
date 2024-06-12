import { Link } from 'react-router-dom';
import { useCabinsOpen } from '../features/cabin/useCabinsOpen';
import CabinsList from '../components/CabinsList';
import Header_xx from '../components/Header_xx';

const Landing_24 = () => {
  const { cabins, isLoading } = useCabinsOpen();
  console.log('Landing_24 cabins', cabins);
  return (
    <>
      <div className='wild-oasis'>
        <div className='antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative'>
          <Header_xx />
          <div className='flex-1 px-8 py-12 grid'>
            <CabinsList cabins={cabins} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing_24;
