// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


//  import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    const [mode, setmode] = useState('light')
    const [alert, setAlert] = useState(null)
    const showalert = (message, type) => {
        setAlert({
            message: message,
            type: type

        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    const togglemode = () => {
        if (mode === 'dark') {
            setmode('light')
            document.body.style.backgroundColor = 'white';
            showalert('Light Mode has been Enabled', 'success')
                //document.title='TextUtils - LightMode'
                // setInterval(() => {
                //   document.title='TextUtils is good'

            // }, 2000);
            // setInterval(() => {
            //   document.title='install TextUtils '

            // }, 1500); 

        } else {
            setmode('dark')
            document.body.style.backgroundColor = '#0F172A'
            showalert('Dark Mode has been Enabled', 'success')
                //  document.title='TextUtils - DarkMode'
        }
    }



    return (  <> 
        {/* <BrowserRouter>  */}
        <Router>
        < Navbar title = "Textutils" about="About" mode = { mode } togglemode = { togglemode } /> 
        
         <Alert alert = { alert } /> 
         {/* <div className = "container my-3" >
            < TextForm showalert={showalert}  heading = "Enter text to analyze" mode = { mode } />
            
            </div>
            <About/> */}
            
             
              {/* <Routes> 
               <Route exact path="/about" element={<About />}>
                        </Route>
                        <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} />}> 
                         </Route> </Routes>  */}
              <Routes>
                <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} />} />
                <Route exact path="/about" element={<About />} />
            </Routes>


        </Router>
         {/* </BrowserRouter>  */}


        </>




    );
}

export default App;