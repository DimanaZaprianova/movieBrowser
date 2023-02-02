import Hero from "./Hero";
import Navbar from "./Navbar";
import {useState} from "react";




const Page404View = () => {
    const [searchText, setSearchText] = useState("");
    return (
        <div>
        <Hero text="404"/>
        <div className="d-flex align-items-center justify-content-center vh-100">
            
           
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div class="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                    <p className="lead"/>
               
                </div>  
            </div>
        </div>
        </div>
    )
}

export default Page404View