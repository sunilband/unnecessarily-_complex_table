import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Table from "./components/Table";
import tableData3 from "./tableData3.json";
import axios from "axios"
import { useEffect,useState } from 'react';
import useFetch from "./components/useFetch"


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
  
  // const [data,setData]=useState(tableData3)
  // const [render,setRender]=useState(false)
  const [rows,setRows]=useState(10)

  // useEffect(()=>{
  //     setRender(false)
  //     let res=axios.get(`https://fakerapi.it/api/v1/persons?_locale=en_EN&_quantity=${rows}`)
  //     .then((response)=>{
  //       setData(response.data.data)
  //       setRender(true) 
  //     }) 
  // },[rows])

  const [render, data] = useFetch(
    `https://fakerapi.it/api/v1/persons?_locale=en_EN&_quantity=${rows}`
  )
  // setRender(true)
 
  
  return (
    !render && <div className="table_container">
      <Table
        caption="Submission by Sunil Band ph:+918390685016 email:sunilbandwork@gmail.com"
        data={data}
        columns={columns}
        setRows={setRows}
        rows={rows}
      />
    </div>
   
  )
}
  