import{Link } from  'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">

          <div><Link to="/" className="logo">steph blog</Link></div>
           <ul className="liens">
            <li>
                <Link to="/" className="lien"> Acceuil</Link>
            </li>
            <li>
                <Link to="ajouter" className="lien   buttonArticle"  >Creer article</Link>
            </li>
           </ul>
    </nav> 
    );
}
 
export default Navbar;