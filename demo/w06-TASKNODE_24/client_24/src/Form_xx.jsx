import { useState } from 'react';
import { useMutation ,useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { tasks } from '../../sever_24/data';
const Form_24 = () => {
  const [newItemName, setNewItemName] = useState('');

  const queryClient = useQueryClient();
  const {mutate : createtask} = useMutation({
    mutationFn : (taskTitle)=>{
   axios.post('http://localhost:5000/api/tasks', {title:taskTitle})
    },
    onSuccess :()=>{
      queryClient.invalidateQueries({
        queryKey :['tasks'],
      });
      toast.success('tasks added');
      setNewItemName('')
    },
    onError:(error) =>{
      toast.error(error.response.data);
    }
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    createtask(newItemName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud -何書維- </h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn'>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form_24;
