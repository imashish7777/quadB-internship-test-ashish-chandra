import React from "react";

function Dropdown({ name }) {
  return (
    <>
      <div class="btn-group header-button">
        <button
          type="button"
          class="header-button dropdown-toggle btn btn-secondary"
        >
          {name}
        </button>
        <div
          tabindex="-1"
          role="menu"
          aria-hidden="true"
          className="dropdown-menu"
        >
          INR
        </div>
      </div>
    </>
  );
}

export default Dropdown;
