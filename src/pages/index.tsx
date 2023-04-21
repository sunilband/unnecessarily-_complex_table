import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Table from "./components/Table";
import tableData1 from "./tableData1.json";
import tableData3 from "./tableData3.json";
import axios from "axios"
import { useEffect,useState } from 'react';

// const columns = [
//   { label: "Full Name", accessor: "full_name", sortable: true },
//   { label: "Email", accessor: "email", sortable: false },
//   { label: "Gender", accessor: "gender", sortable: true, sortbyOrder: "desc" },
//   { label: "Age", accessor: "age", sortable: true },
//   { label: "Start date", accessor: "start_date", sortable: true },
// ];

const columns = [
  { label: "ID", accessor: "id", sortable: true ,sortbyOrder: "desc"},
  { label: "Avatar", accessor: "avatar", sortable: false},
  { label: "First Name", accessor: "firstname", sortable: true },
  { label: "Last Name", accessor: "lastname", sortable: true },
  { label: "Gender", accessor: "gender", sortable: true },
  { label: "Age", accessor: "birthday", sortable: true },
  { label: "Contact", accessor: "phone", sortable: false },
];




const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  
  const [data,setData]=useState(tableData3)
  const [render,setRender]=useState(false)
  const [rows,setRows]=useState(10)

  useEffect(()=>{
      setRender(false)
      let res=axios.get(`https://fakerapi.it/api/v1/persons?_locale=en_EN&_quantity=${rows}`)
      .then((response)=>{
        setData(response.data.data)
        setRender(true) 
        console.log(rows)
      }) 
  },[rows])

  
  return (
    render&&<div className="table_container">
      
      <Table
        caption="Submission by Sunil Band ph:+918390685016 email:sunilbandwork@gmail.com"
        data={data}
        columns={columns}
        setRows={setRows}
        rows={rows}
      />
      {/* <br />
      <RenderAnotherTable />
      <br /> */}
    </div>
  )
}
