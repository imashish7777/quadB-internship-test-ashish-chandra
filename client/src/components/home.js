import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [tickers, setTicker] = useState();
  const Fetchapidata = async () => {
    try {
      const response = await axios(`http://localhost:3001/fetchApidata`);
      const postData = response.data;
      setTicker(postData);
      console.log("response.data", response.data);
      console.log("tickes", tickers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Fetchapidata();
  }, []);

  return (
    <>
      <div className="home container-fluid">
        <div className="home-head container-fluid">
          <div className="row">
            <h3 style={{ color: "grey" }}>Best Price to Trade</h3>
          </div>
          <div className="row">
            <div className="col-2">
              <h2 className="positive">0.1%</h2>
              <span>5min</span>
            </div>
            <div className="col-2">
              <h2 className="positive">0.96%</h2>
              <span>1 Hour</span>
            </div>
            <div className="col-4 main-price">
              <h1> ₹26.56.110</h1>
            </div>
            <div className="col-2">
              <h2 className="positive">2.73%</h2>
              <span>1 Day</span>
            </div>
            <div className="col-2">
              <h2 className="positive">7.51%</h2>
              <span>7 Days</span>
            </div>
          </div>
          <div className="row sub-title">
            <h5 style={{ color: "grey" }}>
              Average BTC/INR net price including commission
            </h5>
          </div>
        </div>
        <div className="homw-table container-fluid">
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Platform</th>
                  <th scope="col">Last Trade Price</th>
                  <th scope="col">Buy/Sell Price</th>
                  <th scope="col">volume</th>
                  <th scope="col">base unit</th>
                </tr>
              </thead>
              <tbody>
                {tickers?.map((i, index) => {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{i.name}</td>
                        <td> ₹{i.last}</td>
                        <td>
                          ₹{i.buy}/ ₹{i.sell}
                        </td>
                        <td>{i.volume}</td>
                        <td>{i.base_unit}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
