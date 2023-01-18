
import{Link} from 'react-router-dom'
const NotFound = () => {
    return ( 
        <div className="404">
            <h2>oupsssssss</h2>
            <p>la page que vous cherchez est intouvable</p>
            <Link  to='/'>retour a la page d'acceuil</Link>
        </div>
     );
}
 
export default NotFound;