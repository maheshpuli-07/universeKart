import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const UniverseServices = () => {

const {authState} = useOktaAuth();

    return(
        <div className='container my-5'>
            <div className='row p-4 align-items-center border shadow-lg'>
                <div className='col-lg-7 p-3'>
                     <h1 className='display-4 fw-bold'>
                        can't find what you are looking for?
                     </h1>
                     <p className='lead'>
                        If you cannot able to find what you are looking for,
                        send a text to our universe admin's a personnel message!
                     </p>
                     <div className='gap-2 justify-content-md mb-4 mb-lg-3'>
                        {authState?.isAuthenticated? 

                            <Link className='btn main-color btn-lg px-4 me-md-2 fw-bold text-white' to='#'>
                                Universe Services
                            </Link>
                            :
                            <Link type="button" className="btn btn-outline-light btn-lg0 main-color" to="/login">Sign up</Link>
         
                    }
                     </div>
                </div>
                <div className='col-lg-4 offset-lg-1 shadow-lg lost-image'></div>
            </div>
        </div>
    );
}