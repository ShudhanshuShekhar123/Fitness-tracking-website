import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { getExcercise } from "../Redux/ExcerciseReducer/action";

const GymExcercises = (bodypart) => {
  // want to get the bodypart from the url and then pass it to the action
  const arr = useSelector((state) => state.excercisereducer.excercise);
  const dispatch = useDispatch();

  useEffect(() => {
    // want pass the bodypart here
    dispatch(getExcercise(bodypart));
  }, []);

  return (
    <DIV>
      {arr.map((item) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body down-part">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description.substring(0, 50)}</p>
              <a href="#" className="btn">
                View Workout
              </a>
            </div>
          </div>
        );
      })}
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  .down-part {
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card {
    border-radius: 10px;
  }
  .btn {
    background-color: #ffeba7;
    border: #ffeba7;
    color: black;
    border: none;
  }
  .btn:active {
    background-color: #060613;
    color: white;
  }
`;

export default GymExcercises;
