const Footer  = ()=>{
    const today = new Date();
    return(
        <footer className="col-md-12 mt-5">
            <p className="text-center">Copyright &copy;{today.getFullYear()}</p>
        </footer>
    )
}
export default Footer;