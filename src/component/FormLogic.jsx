import React, { useContext, useEffect, useRef, useState } from "react";
import FormDetails from "./FormDetails";
import { StateContext } from "./Context";
import { PostApi } from "../Data.jsx";
import { UpdateApi } from "../Data.jsx";

const FormLogic = () => {
  const { state, setState, updateData, setupdateData } =
    useContext(StateContext);
  const [addData, setaddData] = useState({
    Address: "",
    Branch: "",
    DOB: "",
    Rollno: "",
    contactnumber: "",
    fathername: "",
    name: "",
    year: "",
  });

  const actionRef = useRef("");

  useEffect(() => {
    if (updateData && Object.keys(updateData).length > 0) {
      console.log("updated");
      setaddData({
        Address: updateData.Address || "",
        Branch: updateData.Branch || "",
        DOB: updateData.DOB || "",
        Rollno: updateData.Rollno || "",
        contactnumber: updateData.contactnumber || "",
        fathername: updateData.fathername || "",
        name: updateData.name || "",
        year: updateData.year || "",
      });
    }
  }, [updateData]);

  function handleInput(e) {
    // e.preventDefault()
    const name = e.target.name;
    const value = e.target.value;

    setaddData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const addpost = async () => {
    try {
      const newRes = await PostApi(addData);
      console.log(newRes);
      if (newRes.status === 200 || newRes.status === 201) {
        setState([...state, newRes.data]);
        setaddData({
          Address: "",
          Branch: "",
          DOB: "",
          Rollno: "",
          conatactnumber: "",
          fathername: "",
          name: "",
          year: "",
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  let isEmpty = Object.keys(updateData).length === 0;
  // console.log(isEmpty)

  const handleFormBtn = (e) => {
    e.preventDefault();
    const action = actionRef.current; // here we take the refernce of button for it current value
    // console.log("Action triggered:", action);
    // console.log("Form data:", addData);
    if (action === "Generate ID") addpost();
    else if (action === "Edit") UpdatePostApi();
    actionRef.current = "";
  };

  const UpdatePostApi = async () => {
    try {
      const res = await UpdateApi(addData, updateData.id);
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        setState((prev) => {
          return prev.map((curr) => {
            return curr.id === updateData.id ? res.data : curr;
          });
        });
        // prev.map((curr) =>
        //   curr.id === updateData.id ? res.data : curr
      }
      setupdateData({});
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <FormDetails
        addData={addData}
        handleinput={handleInput}
        handleclick={handleFormBtn}
        IsEmpty={isEmpty}
        actionRef={actionRef}
      />
    </>
  );
};

export default FormLogic;
