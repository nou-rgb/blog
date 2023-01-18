
import BlogList from './BlogList';
import useRecuperation from './Recuperation';
   
const Home = () => {


   const {data: blogs , isLoading, error}=useRecuperation('http://localhost:8000/blogs?_sort=id&_order=desc'); 
    return ( 
     
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>En cours de traitement</div>}
           { blogs && <BlogList blogs={blogs} title={'Liste des blogs'} />} 
           
        </div>
      
              
        
     );
}
 
export default Home;