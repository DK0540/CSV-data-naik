import React from 'react'
import BarChart from 'react-easy-bar-chart';
import axios from 'axios';
import  { useState, useEffect } from 'react';

const Chart = () => {
    const data = [
        {
          title:  "Maths",
          value: 10,
          color: "#196f3d",
        },
        {
          title:  "English",
          value: 14,
          color: "#a93226",
        },
        {
          title:  "Physics",
          value: 2,
          color: " #1f618d",
        },
        {
          title:  "Chemistry",
          value: 20,
          color: "#839192",
        },
        {
          title:  "Psychology",
          value: 15,
          color: "#d35400",
        },
        {
          title:  "Biology",
          value: 12,
          color: " #a9cce3",
        },
        {
          title:  "Economics",
          value: 5,
          color: "#2e4053",
        },
        {
          title:  "Social Science",
          value: 6,
          color: "#186a3b",
        },
        ];
    //     const [student, setStudent] = useState([])
    // const [chartdata, setChartdata] = useState([])


    // const fetch_student = () => {
    //     const config = {
    //         headers: {
    //             //   we are finding the token from localstorage
    //             Authorization: localStorage.getItem("token"),
    //         }
    //     };
    //     axios.get("http://localhost:5000/api/student/getstudent", config).then((data) => {
    //         setStudent(data.data.student)
    //     })
    // }
    // useEffect(() => {
    //     fetch_student()
    // }, [])


    // const final_arr = []
    // student.map((ele, ind) => {
    //     const data = {
    //         title: ele.name,
    //         value: ele.age,
    //         color: "#185f3d",
    //         key: "ind",
    //     }
    //     final_arr.push(data)
    // })
    // setChartdata(final_arr)

        
  return (
    <div>
      <h1>chart</h1>
      <BarChart 
          xAxis='React Bar Chart'
          yAxis="Values"
          height={400}
          width={800}
          data={data}
        />
    </div>
  )
}

export default Chart
