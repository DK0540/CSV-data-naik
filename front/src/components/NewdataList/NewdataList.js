import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {
  MDBTable,
   MDBTableBody,
   MDBRow,MDBCol, 
   MDBContainer, 
   MDBTableHead,
   MDBBtn,
   MDBBtnGroup,
   MDBPagination,
   MDBPaginationItem,
   MDBPaginationLink
  } from "mdb-react-ui-kit"


const NewdataList = () => {
  const [data, setData] = useState("")
  const [value, setValue] = useState([])
  const [sortValue, setSortValue] = useState("")
  const [currentPage, setCurrentPage] =useState(0);
  const [pageLimit] = useState(4);


  const sortOptions = ['name', 'email', 'phone','address',"id", 'status']

  useEffect(()=>{
    loadUsersData(0,4,0);
  },[])

  const loadUsersData = async (start, end, increase) => {
    return await axios
    .get(`http://localhost:5008/users?_start=${start}&_end=${end}`)
    .then((response)=>{setData(response.data);
     setData(response.data);
     setCurrentPage(currentPage + increase)
    })
    .catch((err)=> console.log(err));
}
console.log("data", data)

const handleReset =()=>{
  loadUsersData(0,4,0);
};

const handleSearch = async (e)=>{
  e.preventDefault();
  return await axios.get(`http://localhost:5008/users?q=${value}`)
  .then((response)=>{
    setData(response.data);
    setValue("");
    })
  .catch((err)=>console.log(err))
};


const handleSort = async (e)=>{
  let value =e.target.value;
  setSortValue(value)
 return await axios.get(`http://localhost:5008/users?_sort=${value}&_order=asc`)
  .then((response)=>{
    setData(response.data);
   })
  .catch((err)=>console.log(err))
};


const handleFilter = async (value)=>{
 return await axios.get(`http://localhost:5008/users?status=${value}`)
  .then((response)=>{
    setData(response.data);
   })
  .catch((err)=>console.log(err))
};


const renderPagination =()=>{
  if(currentPage === 0) {
    return (
      <MDBPagination className='mb-0'>
        <MDBPaginationItem>
          <MDBPaginationLink>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBBtn onClick={()=> loadUsersData(4, 8, 1)}>Next</MDBBtn>
        </MDBPaginationItem>
      </MDBPagination>
    );
  } else if (currentPage < pageLimit-1 && data.length === pageLimit){
    return (
      <MDBPagination className='mb-0'>
     <MDBPaginationItem>
        <MDBBtn onClick={()=> loadUsersData((currentPage - 1) * 4, (currentPage )* 4 , -1)}>Prev</MDBBtn>
      </MDBPaginationItem>
      <MDBPaginationItem>
           <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
      </MDBPaginationItem>
     <MDBPaginationItem>
        <MDBBtn onClick={()=> loadUsersData((currentPage + 1) * 4, (currentPage + 1) * 4, 1)}> Next</MDBBtn>
      </MDBPaginationItem>
    </MDBPagination>
    );
  } else {
    return (
      <MDBPagination className='mb-0'>
      <MDBPaginationItem>
        <MDBBtn onClick={()=> loadUsersData(4, 8, -1)}>Prev</MDBBtn>
      </MDBPaginationItem>
      <MDBPaginationItem>
        <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
      </MDBPaginationItem>
    </MDBPagination>
    );
  }
}

  return (
   <MDBContainer>
   <form style={{
     margin:"auto",
     padding:"15px",
     maxWidth:"400px",
     alignContent: "center"
   }} className='d-flex input-group w-auto'
   onSubmit={handleSearch}>
     <input type="text" className='form-control' placeholder='Search Name' value={value} onChange={(e)=> setValue(e.target.value)}/>
     {/* <MDBBtnGroup> */}
       <MDBBtn type='submit' color='dark'>Search</MDBBtn>
       <MDBBtn className='mx-2' color='info' onClick={()=> handleReset()}>Reset</MDBBtn>
     {/* </MDBBtnGroup> */}
   </form>
     <div style={{marginTop: "100px"}}>
     <h2 className='text-center'>CSV Data Project..</h2>
       <MDBRow>
         <MDBCol size="12">
          <MDBTable>
            <MDBTableHead dark>
                 <tr>
                   <th scope='col'>No.</th>
                   <th scope='col'>Name.</th>
                   <th scope='col'>Email.</th>
                   <th scope='col'>Phone.</th>
                   <th scope='col'>Address.</th>
                   <th scope='col'>Status.</th>
                 </tr>
            </MDBTableHead>
            {data.length === 0 ? (
              <MDBTableBody className= "align-center mb-0">
                <tr>
                  <td colSpan={8} className="text-center mb-0">No data Found</td>
                </tr>
              </MDBTableBody>
            ): (
              data.map((item,index)=>(
                <MDBTableBody key={index}>
                  <tr>
                    <th scope='row'>{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.status}</td>
                  </tr>
                      
                </MDBTableBody>
              ))
            )}
          </MDBTable>
         </MDBCol>
       </MDBRow>
       <div style={{
     margin:"auto",
     padding:"15px",
     maxWidth:"250px",
     alignContent: "center"
   }}>{renderPagination()}</div>
     </div>
     <MDBRow>
           <MDBCol size="8">
           <h5>Sort By</h5>
           <select 
           style={{width: "50%", borderRadius:"2px", height:"35px"}} 
           onChange={handleSort} 
           value={sortValue}>
             <option>Please Select</option>
             {
              sortOptions.map((item, index)=>
                  <option value={item} key={index}>
                  {item}
                  </option>
               )
             }
           </select>
           </MDBCol>
           <MDBCol size="4">
           <h5>Filter By Status</h5>
           <MDBBtnGroup>
             <MDBBtn color='success' onClick={()=>handleFilter("Active")}>Active</MDBBtn>
             <MDBBtn color='danger' style={{margin:"2px"}} onClick={()=>handleFilter("Inactive")}>Inactive</MDBBtn>
           </MDBBtnGroup>
           </MDBCol>
     </MDBRow>
   </MDBContainer>
   
  )
}

export default NewdataList



// start
// import  React, {useEffect,useState} from 'react';
// import {OutTable,ExcelRenderer} from "react-excel-renderer";
// import axios from 'axios';
// import SliderSizes from './Slider';
// import PaginationRounded from "./Pagination"
// import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';

// const NewdataList = () => {
    
//  const [state,setState]=useState({
//     rows:"",
//     cols:""
//    });
   
//    const [fileData,setfileData]= useState([])
    
  
//    const fileHandler=(event)=>{
//      console.log(event);
//       let fileObj=event.target.files[0]
  
//       console.log(fileObj)
//       ExcelRenderer(fileObj,(err,resp)=>{
  
//         if(err){
//           console.log(err)
//         }else{
//           setState({
//             cols:resp.cols,
//             rows:resp.rows
  
//           })
//         }
//       })
//     }
//     const upload = () => {
//       let Json_data = []
//      console.log(state);
//       let rows = state.rows[0]
//       let col = state.rows.slice(1)
//       for (let i = 0; i < col.length; i++) {
//           let res = {}
//           for (let j = 0; j < col[0].length; j++) {
//               res[rows[j]] = col[i][j]
//           }
//           Json_data.push(res)
//          // console.log(Json_data)
//       }
//       setfileData(Json_data)
//       console.log(fileData)
//      async function dataupload () {
//           try {
//               let response =  await axios.post("http://localhost:5000/api/student/post", fileData) 
//               console.log(response)
//           } catch (error) {
//               console.log(error)
//           }
//       } 
//       dataupload()
//       // console.log(dataupload());
//   }

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

//   return (
    
      
//       <>
      
//         <Grid item xs={8}>
//           <Item>
//           <h2 className='text-center text-danger '>New CSV file upload </h2>
//         <div className='border border-dark my-2 p-3 d-flex bg-secondary'>
//             <input type="file" onChange={fileHandler} className="border border-light bg-light mx-1" />
//             <button className="btn btn-warning   d-flex" onClick={upload}>upload Data</button>
//             <h4 className='text-center text-warning mx-3'>File upload In csv/xlsx</h4>
//             </div>
//           </Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>
//           <SliderSizes/>
//           </Item>
//         </Grid>
      
//     {/* <header className='app-header'>
//       <input type="file" onChange={fileHandler} style={{"padding":"10px"}}/>
//       <div>
//         {state.rows && <OutTable data={state.rows} columns={state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading"/>}
//       </div> */}

//     {/* </header> */}
    
       

        
   
//     <PaginationRounded/>
//     </>
    
    
  

    
//   )
// }

// export default NewdataList

//End

















// import React, {useEffect,useRef} from 'react';
// import { CSVReader } from "react-papaparse"
// import {useNavigate} from "react-router-dom"
// import "./NewdataList.css"
// import { Button } from '@material-ui/core';
// // import CsvRead from './CsvRead';





// const NewdataList = () => {

//   let navigate = useNavigate();
//   useEffect(() => {
//     if(localStorage.getItem("token")){
//       navigate('/')
//     }
//     else{
//       navigate('/login')
//     }
   
//   }, []);
  
//   const buttonRef = useRef(null); 
  
//   const handleOnFileLoad = (data) => {
//     console.log(data)
//   }

//   const onErrorHandler = (err, file, inputElem, reason) => {
//     console.log(err)
//   }

//   const handleFileremove = (data) => {
//      console.log(data)
//   }

//   return (
//     <>
//     <div className='newlist'>
//        <h2>Csv read</h2>

//        {/* <CsvRead/> */}
//        <CSVReader  ref = {buttonRef}
//        onFileLoad = {handleOnFileLoad}
//        onError = {onErrorHandler}
//        onClick
//        noDrag
//        onRemoveFile={handleFileremove}
//        >
//            {
//              (file)=>(
//               <Button>
//                 CSV Reader
//               </Button>
//              )
//            }
//        </CSVReader>
//     </div>
//     </>
    
//   );
// }

// export default NewdataList;








// import React from 'react'

// const NewdataList = () => {
//   return (
//     <div>
//       <h2 color='red'>CSV file new</h2>
//     </div>
//   )
// }

// export default NewdataList
