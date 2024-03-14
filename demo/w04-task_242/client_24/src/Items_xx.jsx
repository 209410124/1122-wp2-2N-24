import SingleItem_xx from './SingleItem_xx';

import {useQuery} from '@tanstack/react-query';

import customFetch_24 from './utils_24'



const Items_24 = ({ items }) => {

  const result = useQuery({
    queryKey:['tasks'],
    queryFn: () => customFetch_24.get('/')
  });
  console.log('data',result)

  // const {data , isLoading ,isError ,error} = useQuery({
  //   queryKey:['tasks'],
  //   queryFn: () => customFetch_24.get('/')
  // });
  // console.log('data',data);
  // console.log('error',error);
  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem_xx key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_24;
