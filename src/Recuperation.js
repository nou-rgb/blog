import { useState,useEffect} from 'react';


const useRecuperation = (url) => {

    const [data, setData] = useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error, setError]=useState(null);
    /*const HandleDelete = (id) => {
        const newBlogs =  blogs.filter((blog)=> blog.id !== id);
        setBlog(newBlogs);
        
    } */

    useEffect( () => {
        const abortCont=  new AbortController(); 
        setTimeout( () =>{
            fetch(url, {signal:abortCont.signal})
              .then((response) => {
                if(!response.ok){
                    throw Error('Desole une erreur s\'est produit...');
                }
                   return response.json();
               })
              .then((data) => {
                   setData(data);
                   setIsLoading(false);
                   setError(null);
               })
               .catch(err =>{
                  if(error.name==="AboutError"){
                    console.log('fetch a ete stoppe')
                  }else{   
                    setError(err.message);
                    setIsLoading(false);
                  }
                  
            
                })
        },2000)
        return ()=> abortCont.abort();
      },[url]);




    return (  

          {data, isLoading, error}

        
     );
}
 
export default useRecuperation;
