// import React, { useContext } from 'react'
import { StateContext } from "./Context";

function FormDetails({
  handleinput,
  handleclick,
  addData,
  IsEmpty,
  actionRef,
}) {
  return (
    <>
      <div className="form-card">
        <h2>Student Registration</h2>
        <form onSubmit={handleclick}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                className="form-control"
                value={addData.name}
                id="name"
                name="name"
                placeholder="Enter student name"
                onChange={handleinput}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="fatherName">Father's Name</label>
              <input
                type="text"
                required
                className="form-control"
                value={addData.fathername}
                id="fathername"
                name="fathername"
                onChange={handleinput}
                placeholder="Enter father's name"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="rollNo">Roll No</label>
              <input
              required
                type="text"
                onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                maxLength="15"
                onChange={handleinput}
                value={addData.Rollno}
                className="form-control"
                name="Rollno"
                id="Rollno"
                placeholder="Enter roll number"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="branch">Branch</label>
              <input
                type="text"
                required
                onChange={handleinput}
                value={addData.Branch}
                className="form-control"
                id="Branch"
                name="Branch"
                placeholder="Enter branch"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="year">Year</label>
              <select
                className="form-select"
                required
                id="year"
                name="year"
                value={addData.year}
                onChange={handleinput}
              >
                <option>Select Year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>Final Year</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="dob">DOB</label>
              <input
                 type="date"
                 required
                 value={addData.DOB}
                 onChange={handleinput}
                 name="DOB"
                 className="form-control"
                 id="DOB"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="contact">Contact Number</label>
              <input
                required
                type="tel"
            onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                maxLength="10"
                onChange={handleinput}
                value={addData.contactnumber}
                className="form-control"
                id="contactnumber"
                name="contactnumber"
                placeholder="Enter contact number"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                onChange={handleinput}
                value={addData.Address}
                className="form-control"
                id="Address"
                name="Address"
                required
                placeholder="Enter address"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={() =>
                (actionRef.current = IsEmpty ? "Generate ID" : "Edit")
              }
              className="btn btn-primary"
            >
              {IsEmpty ? "Generate ID" : "Edit"}
            </button>{" "}
          </div>
        </form>
      </div>
    </>
  );
}
export default FormDetails;
