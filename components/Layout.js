import Navbar from './Navbar';



const Layout = (props) => (
    <div>
        <link
            rel="stylesheet"
            href="https://bootswatch.com/4/lux/bootstrap.min.css" 
        />
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;