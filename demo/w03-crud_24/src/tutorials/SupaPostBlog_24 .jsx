import { useState, useEffect } from 'react';
import axios from 'axios';
 let api_url = `https://hsexmvemzjlqjqnfwwob.supabase.co/rest/v1/card_124?select=*`;


const SupaPostBlog_24 = () => {
  const [name, setName] = useState('何書維');
  const [id, setId] = useState(209410124);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogsFromSupabase = async () => {
    try {
      // const response = await fetch(api_url);
      // const data = await response.json();

     // let { data, error } = await supabase.from('card_124').select('*');

      const response = await axios.post(api_url,{
        "id": 12,
        "title": "何書維 209410124",
        "descrip": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category": "travel",
        "img": "/images/photo-9.jpg",
        "remote_url": "https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-9.jpg"
      },{
        headers:{
          apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZXhtdmVtempscWpxbmZ3d29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMjM5MzMsImV4cCI6MjAwMTc5OTkzM30.J68ddL3WUrQkilObHdfnRkLeCdUHy8XP5ZjcF8cNISU',
          Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZXhtdmVtempscWpxbmZ3d29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMjM5MzMsImV4cCI6MjAwMTc5OTkzM30.J68ddL3WUrQkilObHdfnRkLeCdUHy8XP5ZjcF8cNISU'
        },
      })

      console.log('blogs data', response.data);
      //setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogsFromSupabase();
  }, []);

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2> Get Blogs Using Bash </h2>
        <h3>
          {name}, {id}
        </h3>
      </div>
      <div className='blogs-center'>
        {blogs.map((item) => {
          const { id, img, remote_url, title, category, descrip } = item;
          return (
            <article key={id} className='blog'>
              <img src={img} alt='Coffee photo' className='img blog-img' />
              <div className='blog-content'>
                <span>
                  {' '}
                  {category} <i className='fa-solid fa-mug-saucer'></i>
                </span>
                <h3>{title}</h3>
                <p>{descrip}</p>
                <a href='#'>read more</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SupaPostBlog_24;