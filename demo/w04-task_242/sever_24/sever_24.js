import  express  from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { nanoid } from "nanoid";

//import { taskList } from './data.js';
const app = express();

let taskList=[
    {id:nanoid(),title:"do w1 homework",isDone:false},
    {id:nanoid(),title:"do w2 homework",isDone:true},
    {id:nanoid(),title:"do w3 homework",isDone:true},
    {id:nanoid(),title:"do w4 homework",isDone:false},
    
];

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.get('/', ( req , res) => {
    res.send('hello');
});

app.get('/api/tasks',(req,res) =>{
    res.json({ taskList});
})

app.post('/api/tasks',(req,res)=>{
   const {title} = req.body;
   if(!title){
    res.status(400).json({msg:'Please provide title'});
   }

   const newTask = {id: nanoid(),title, isDone:false};
   taskList = {...taskList,newTask};
   res.json({task:newTask});
});

app.patch('/api/tasks/:id',(req,res)=>{
    const{id}=req.params;
    const{isDone} =req.body;
    taskList = taskList.map((item)=>{
        if(item.id === id){
            return{...item ,isDone}
        }
        return item;
    });
    res.json({msg: 'task updated'})
});

const port=process.env.PORT || 5000;

const startApp=()=>{
    try{
        app.listen(port,()=>{
            console.log(`sever is running on port ${port}`)
        });
    }catch(error){}
}

startApp();