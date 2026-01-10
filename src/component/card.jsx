import React from "react";

function Card({ current, handleDelete, handleEdit }) {
  const {
    name,
    fathername,
    DOB,
    id,
    Rollno,
    year,
    Address,
    Branch,
    contactnumber,
  } = current;

  return (
    <>
      <div className="Main-container">
        <div className="id-card">
          <div className="header">
            <div className="logo">
              <img
                src="https://meerutiit.com/assets/img/header_01.jpg"
                alt=""
              />
            </div>
            <div className="institute-name">
              <h2>
                Meerut International Institute <br /> of Technology
              </h2>
            </div>
          </div>
          {/* 
    <div className="photo-box">
      <div className="photo">Photo</div>
    </div> */}

          <h3 className="student-name">{name}</h3>

          <div className="details">
            <p>
              <strong>Father Name: </strong>
              {fathername}
            </p>
            <p>
              <strong>Student ID: </strong>
              {Rollno}
            </p>
            <p>
              <strong>Course: </strong>
              {Branch}
            </p>
            <p>
              <strong>Year: </strong>
              {year}
            </p>
            <p>
              <strong>Date of Birth: </strong>
              {DOB}
            </p>
          </div>

          <div className="footer">
            <div className="signature">
              {/* <p><img className='signature-img' src="https://upload.wikimedia.org/wikipedia/commons/2/27/Narf_signature.png" alt="" /></p> */}
              <img
                style={{ width: "100px" }}
                src="https://onlinepngtools.com/images/examples-onlinepngtools/george-walker-bush-signature.jpg"
                alt=""
              />
              <p>
                <strong>Authorized Signature</strong>
              </p>
            </div>

            <div className="address">
              <p>{Address}</p>
              <p>{contactnumber}</p>
            </div>
          </div>
        </div>
        <div className="Btn-section">
          <button
            type="button"
            onClick={() => handleEdit(current)}
            className="btn btn-outline-success"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => handleDelete(id)}
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
