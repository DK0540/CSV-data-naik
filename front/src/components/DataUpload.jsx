
import React, {useEffect,useState} from 'react';

import {OutTable,ExcelRenderer} from "react-excel-renderer";
import axios from 'axios';


const DataUpload = () => {
    
 const [state,setState]=useState({
    rows:"",
    cols:""
   });
   
   const [fileData,setfileData]= useState([])
    
  
   const fileHandler=(event)=>{
     console.log(event);
      let fileObj=event.target.files[0]
  
      console.log(fileObj)
      ExcelRenderer(fileObj,(err,resp)=>{
  
        if(err){
          console.log(err)
        }else{
          setState({
            cols:resp.cols,
            rows:resp.rows
  
          })
        }
      })
    }
    const upload = () => {
      let Json_data = []
     console.log(state);
      let rows = state.rows[0]
      let col = state.rows.slice(1)
      for (let i = 0; i < col.length; i++) {
          let res = {}
          for (let j = 0; j < col[0].length; j++) {
              res[rows[j]] = col[i][j]
          }
          Json_data.push(res)
         // console.log(Json_data)
      }
      setfileData(Json_data)
      console.log(fileData)
     async function dataupload () {
          try {
              let response =  await axios.post("http://localhost:5000/api/student/post", fileData) 
              console.log(response)
          } catch (error) {
              console.log(error)
          }
      } 
      dataupload()
      // console.log(dataupload());
  }
  return (
    <div>
      <div>
    {/* <header className='app-header'>
      <input type="file" onChange={fileHandler} style={{"padding":"10px"}}/>
      <div>
        {state.rows && <OutTable data={state.rows} columns={state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading"/>}
      </div> */}

    {/* </header> */}
    <>
        <h2 className='text-center text-danger '> File Upload CSV/XLSX </h2>
        <div className='border border-dark my-2 p-3 d-flex bg-secondary'>
            <input type="file" onChange={fileHandler} className="border border-light bg-light mx-1" />
            <button className="btn btn-warning   d-flex" onClick={upload}>upload Data</button>
            <h4 className='text-center text-warning mx-3'>File upload In csv/xlsx</h4>

        </div>
    </>
    </div>
    
  

    </div>
  )
}

export default DataUpload
