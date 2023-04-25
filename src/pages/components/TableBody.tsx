import React from "react";
import Image from "next/image";
import TableRow from "./TableRow";
import { useState } from "react";

type Props = {
  tableData: any;
  columns: any;
};

const TableBody = (props: Props) => {
  let address = "";
  
  return (
   
    <tbody className="cursor-pointer">
      {props.tableData?props.tableData.map((data: any, key: any) => {
         address = Object.values(data["address"]).slice(1, 8).join();
        return (
          <TableRow data={data} key={key} columns={props.columns} address={address}/>
        ); 
      }):null}
      
    </tbody>
  );
};

export default TableBody;

