import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";

export default function ComEquip() {
  const [dataArray, setDataArrary] = useState({ comdata: [] });
  const data = {
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc",
        width: 150
      },
      {
        label: "รายละเอียด",
        field: "attribute",
        sort: "asc",
        width: 270
      },
      {
        label: "ชื่อเครื่อง",
        field: "comName",
        sort: "asc",
        width: 200
      },
      {
        label: "ที่ตั้งปัจจุบัน",
        field: "localStand",
        sort: "asc",
        width: 100
      },
      {
        label: "activeKey",
        field: "activeKey",
        sort: "asc",
        width: 150
      },
      {
        label: "สถานะ",
        field: "equipType",
        sort: "asc",
        width: 100
      }
    ],
    rows: dataArray.comdata
  };
  useEffect(() => {
    const fetData = async () => {
      await axios
        .get("http://202.80.228.46:3000/api/CompEquips")
        .then(respon => setDataArrary({ comdata: respon.data }));
      // alert(JSON.stringify(data));
      // setDataArrary(respon.data);
    };
    fetData();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">รายการครุภัณฑ์คอมพิวเตอร์</h1>
            </div>

            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item active">Dashboard v3</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className="content-header">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body table-responsive p-0">
              <MDBDataTable striped bordered hover data={data} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
