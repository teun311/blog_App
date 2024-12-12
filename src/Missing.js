
import { Link } from 'react-router-dom'
const Missing  = ()=>{
    return(
        <main>
            <h2>Post not Found</h2>
            <p>well,thats disappointing</p>
            <p>
                <Link to='/'>Visit Our HomePage</Link>
            </p>
        </main>
    )
}
export default Missing;