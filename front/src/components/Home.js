import React, {useEffect,useState} from 'react';
import {useNavigate} from "react-router-dom"
import {OutTable,ExcelRenderer} from "react-excel-renderer";

import DataUpload from './DataUpload';
import Table from './Table';



const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("token")){
      navigate('/')
    }
    else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);
  
 

  return (
    
    <div>
    
    <DataUpload/>
    <Table/>
    
    </div>
    
  );
}

export default Home;




