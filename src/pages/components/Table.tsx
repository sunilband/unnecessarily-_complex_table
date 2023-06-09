import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSortableTable } from "../../../logic/useSortableTable";


import React from 'react'

type Props = {
  caption:any,
  data:any, 
  columns:any,
  setRows:any,
  rows:any,
}

const Table = (props: Props) => {
  const [tableData, handleSorting] = useSortableTable(props.data?props.data:[], props.columns?props.columns:[]);
  return (
          
            <table className="table relative">
              <caption>{props.caption}</caption>
              <TableHead {...{ columns:props.columns, handleSorting }} setRows={props.setRows} rows={props.rows} />
              <TableBody {...{ columns:props.columns, tableData }} />
            </table>
          
  )
}

export default Table


