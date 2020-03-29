import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ComEquip() {
  const [dataArray, setDataArrary] = useState(null);
  useEffect(() => {
    const fetData = async () => {
      const respon = await axios.get(
        "http://202.80.228.46:3000/api/CompEquips"
      );
      // alert(JSON.stringify(data));
      setDataArrary(respon.data);
    };
    fetData();
  }, []);

  return (
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            {/*#Debug {JSON.stringify(dataArray)}*/}
            <ul>
              {dataArray &&
                dataArray.map(item => <li key={item.id}>{item.id}</li>)}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
