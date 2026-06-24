import React from "react";
import {Route,Routes,BrowserRouter } from "react-router-dom";
import LoginPage  from "./Components/LoginPage.jsx";
import SignUp from "./Components/Signup.jsx";
import Landing from "./Components/Landing.jsx";
import UserHomePage from "./Pages/UserHomePage.jsx";
import DealerFormPage from "../src/Pages/DealerFormPage.jsx";
import DealerPropPage from "../src/Pages/DealerPropPage.jsx";
import ReservedHotelPage from "./Pages/ReserveHotelPage.jsx";
import AdminDashPage from "./Pages/AdminDashPage.jsx";
import RAGPage from "./Pages/RAGPage.jsx";

function App() {
  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/uhome" element={<UserHomePage />} />
          <Route path="/dlrform" element={<DealerFormPage/>}/>
          <Route path="/dlrprop" element={<DealerPropPage/>}/>
          <Route path="/reserve/:id" element={<ReservedHotelPage />} />
          <Route path="/adash" element={<AdminDashPage/>} />
           <Route path="/RAG" element={<RAGPage/>}/>
        </Routes>
      </BrowserRouter>

      </>
    );
}
export default App;