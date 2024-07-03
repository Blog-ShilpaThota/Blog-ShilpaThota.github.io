import { useNavigate,useLocation } from "react-router-dom";
import { useEffect } from "react";

const HashRedirectHandler = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
  
    // Check if the current URL contains a hash symbol
    useEffect(() => {
      if (location.hash) {
        // If hash is present, redirect to the same URL without the hash
        console.log(location.hash);
        console.log(location.pathname);
        navigate(location.pathname);
      }
    }, [location, navigate]);
  
    // Render the child components
    return children;
  };
  
  export default HashRedirectHandler;