import React from 'react'
import Image from "next/image";

type Props = {
    data:any,
    columns:any,
    address:any,
    key:any
    
}

const TableRow = (props: Props) => {
  return (props.data?<>
    <tr key={props.data.id} onClick={() => {
                      let x = document.getElementById(props.address);
                      if (x !== null) {
                        if (x.style.display === "none") {
                          x.style.display = "block";
                        } else {
                          x.style.display = "none";
                        }
                      }
                    }}>
              {
              props.columns.map(({ accessor }: any) => {
                let tData: any = "——";
                if (accessor == "birthday") {
                  tData =
                    new Date().getFullYear() - props.data[accessor].substr(0, 4);
                } else if (accessor == "avatar") {
                  // all data has same image link
                  tData = (
                    <Image
                      src={props.data["image"]}
                      alt="avatar image"
                      style={{ borderRadius: "100%" }}
                      width={40}
                      height={30}
                    />
                     
                  );
                } else {
                  tData = props.data[accessor] ? props.data[accessor] : "——";
                }
               
                return (
                    <td
                    colSpan={1}
                    key={accessor}
                     
                  >
                    {tData}
                  </td> 
                );
              })}
            </tr>
            <tr id={props.address} className="text-center text-sm hidden" >
                <td className='absolute  w-full h-12 border-2 '>{props.address}</td>
                </tr>
            </>:null
            
  )
}

export default TableRow