import React from "react";
import Image from "next/image";

type Props = {
  tableData: any;
  columns: any;
};

const TableBody = (props: Props) => {
  let address = "";
  return (
    <tbody className="cursor-pointer">
      {props.tableData?props.tableData.map((data: any, key: any) => {
        return (
          <>
            <tr key={data.id}>
              {props.columns.map(({ accessor }: any) => {
                let tData: any = "——";
                if (accessor == "birthday") {
                  tData =
                    new Date().getFullYear() - data[accessor].substr(0, 4);
                } else if (accessor == "avatar") {
                  // all data has same image link
                  tData = (
                    <Image
                      src={data["image"]}
                      alt="avatar image"
                      style={{ borderRadius: "1000%" }}
                      width={40}
                      height={30}
                    />
                  );
                } else {
                  tData = data[accessor] ? data[accessor] : "——";
                }
                address = Object.values(data["address"]).slice(1, 8).join();
                return (
                  <td
                    colSpan={1}
                    key={accessor}
                    onClick={() => {
                      let x = document.getElementById(key);
                      if (x !== null) {
                        if (x.style.display === "none") {
                          x.style.display = "block";
                        } else {
                          x.style.display = "none";
                        }
                      }
                    }}
                  >
                    {tData}
                  </td>
                );
              })}
            </tr>
            <p className="text-center text-sm hidden" id={key}>
              {address}
            </p>
          </>
        );
      }):null}
    </tbody>
  );
};

export default TableBody;


