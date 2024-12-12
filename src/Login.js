
const Login = () =>{
    return(
        <div className="card col-6 mt-3 mx-auto">
            <h4 className="card-header d-flex justify-content-between align-content-center " style={{borderRadius:"0"}}>Login</h4>
            <div className="card-body">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <li className="text-danger ml-3">error</li>
                        <input type="email" className="form-control" name="email"
                               placeholder="enter email address"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userpassword">Password</label>
                        <li className="text-danger ml-3">error</li>
                        <input type="password" className="form-control" name="password"
                               placeholder="enter password"/>
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-success btn-block waves-effect waves-light"
                                type="submit">Login
                        </button>
                    </div>

                </form>
            </div>
            <div/>
        </div>
    )
}
export default Login;