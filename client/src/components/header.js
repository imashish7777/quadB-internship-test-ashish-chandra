import React, { useEffect } from "react";
import { useState } from "react";
import Dropdown from "./dropdown";
import { FaTelegramPlane } from "react-icons/fa";

function Header() {
  const [isChecked, setisChecked] = useState(false);
  const handleCheckedbox = (event) => {
    setisChecked(event.target.checked);
    console.log("is working");
    console.log(isChecked);
  };

  useEffect(() => {
    if (isChecked) {
      document.body.classList.add("global-style");
    } else {
      document.body.classList.remove("global-style");
    }
  }, [isChecked]);

  return (
    <>
      <div className="header container-fluid">
        <div className="row">
          <div className="header-logo text-center-sm col-lg-4 ">
            <h1>HODLINFO</h1>
          </div>
          <div className="header-buttons-group text-center padding-none col-lg-4 ">
            <Dropdown name="INR" />
            <Dropdown name="BTC" />
            <div className="btn-group">
              <a
                target="_blank"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                class="header-button btn btn-secondary"
              >
                BUY BTC
              </a>
            </div>
          </div>
          <div className="header-side-buttons col-lg-4 ">
            <div className="btn-group ">
              <a
                target="_blank"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                className="telegram btn btn-secondary"
              >
                <FaTelegramPlane className="telegram-logo" />
                Connect Telegram
              </a>
            </div>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                checked={isChecked}
                onChange={handleCheckedbox}
                id="flexSwitchCheckChecked"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
