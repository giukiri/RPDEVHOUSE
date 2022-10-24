import React from "react";
import styles from '../Home/Home.module.css'
import NavBar from "../../components/navBar";
import Footer from "../../components/Footer";
import '../CSS/index.css'
import MapView from "../mapa/mapa";

const HomePage = () => {


    return(

      <div className={styles.homePage}>

            <div>

            <NavBar/>

            </div>

             <MapView/>

            <div>
                <Footer/>
            </div>
  
      </div>

    
    )
}

export default HomePage