import { Link } from "react-router-dom";

const BlogList = ({blogs,title, /*HandleDelete*/}) => {
    
   
    return (  
        <div className="bloglist">
            <h2>{title}</h2>
        {
            blogs.map((blog)=>(
                <div className="blog" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} className="blog-titre">{blog.title}</Link>
                    <small className="blog-publication-date">pubier le:{blog.date}</small>
                    <p className="blog-author">publier par:{blog.author}</p>
                   {/* 
                    <button onClick={()=> HandleDelete(blog.id)}>supprimer article</button> */}
                    

                </div>
            ))
        }
    </div>
    );
}
 
export default BlogList;