import React ,{ useEffect, useState }from 'react'
import axios from 'axios'
//import DataUpload from "../components/DataUpload";

import html2canvas from "html2canvas"

const Table = () => {
    const [Data, setdata] = useState([])
    const [Delete, setDelete] = useState([])


  const CaptureImage =()=> {
    html2canvas(document.body).then(function(canvas){
        var a =document.createElement('a');
        a.href=canvas.toDataURL("..assets/image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download="somefilename.jpg"
        a.click();

    })
};

    //   const config = {
    //         headers: {
    //             //   we are finding the token from localstorage
    //             Authorization: localStorage.getItem("token"),
    //         }
    //     };


        // get all students--
        const fetch_student = () => {
        axios.get("http://localhost:5000/api/student/getstudent").then((data) => {
            setdata(data.data.student)
        })
    }
    useEffect(() => {
        fetch_student()
    }, [])

    // //delete student --

    // const handle_delete = (id) => {
    //     console.log(id)
      
    //     axios.delete(`http://localhost:5000/api/student/deltestudent/${id}`,config).then((data) => {
    //         // console.log(res.data);
    //         setDelete(data.data.student)
    //       });
        
    //   };

    //   useEffect(() => {
    //     handle_delete()
    // }, [Delete])  
    


   

  return (
      <div className='my-node'>
    <div>
       <>
{/* <DataUpload/> */}

<hr />
<div className="container d-flex">
    <div className="container">

        <h3 className='text-center'> Student Table</h3>
    </div>
    {/* <div className="container d-flex m-2">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success btn-sm" type="submit">Search</button>

    </div> */}

</div>


<div className='container mx-2'>
    <table className="table">
        <thead >
            <tr className='table-success'>
                <th scope="col">Sl.no</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Phone</th>
                <th scope="col">Student ID</th>
                <th scope="col"> Actions </th>
            </tr>
        </thead>
        <tbody>
            {
                Data.map((ele, ind) => {
                    return <tr className='table-warning'>
                        <th scope="row">{ind + 1}</th>
                        <td>{ele.name}</td>
                        <td>{ele.age} year</td>
                        <td>{ele.contact}</td>
                        <td>{ele.studentId}</td>
                        <td>
                            <button   >Edit</button>
                            {/* <button  onClick={() => handle_delete(ele._id)} className='btn btn-danger btn-sm mx-2' >del</button> */}

                        </td>

                    </tr>

                })
            }
        </tbody>
    </table>
  

</div>
  
  <button className='btn btn-primary' onClick={CaptureImage}> capture Img</button>
 
</>



    </div>
    </div>
  )
}

export default Table
