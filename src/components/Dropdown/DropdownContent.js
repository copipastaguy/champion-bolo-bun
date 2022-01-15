import React from "react";

function DropdownContent({ image, header, para1, para2, para3 }) {
  return (
    <div className="dropdownContent">
      <img src={image} alt="job" />
      <div className="content">
        <p className="content-header">{header}</p>
        <p>{para1}</p>
        <p>{para2}</p>
        <p>{para3}</p>
        <a className="openMail btn" href="mailto:narutoalf@yahoo.com">
          Join Us
        </a>
      </div>
    </div>
  );
}

export default DropdownContent;
