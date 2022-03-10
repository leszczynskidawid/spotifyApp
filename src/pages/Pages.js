import HomeTemplates from "../components/templates/HomeTemplates";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PremiumPage from "./PremiumPage";

function Pages() {
    return ( 
        
           <Routes>
        <Route path ="/" element = {<HomeTemplates/>} />
        <Route path ="/premium" element = {<PremiumPage/>} />
      
        <Route path ="*" element = {<HomeTemplates/>} />
     
                
        </Routes>
     );
}

export default Pages;