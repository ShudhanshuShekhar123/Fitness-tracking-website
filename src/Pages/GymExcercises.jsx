import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { getExcercise } from "../Redux/ExcerciseReducer/action";
import { Link, useNavigate, useParams } from "react-router-dom";

const GymExcercises = () => {
  // want to get the bodypart from the url and then pass it to the action
  const token = useSelector((state) => state.authreducer.token);
  const arr = useSelector((state) => state.excercisereducer.excercise);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { id } = useParams();

  const obj = {
    bodypart: id,
    token: token,
  };

  useEffect(() => {
    // want pass the bodypart here
    dispatch(getExcercise(obj));
  }, []);

  return (
    <DIV>
      {arr.map((item, i) => {
        return (
          <div key={i} className="card" style={{ width: "27rem" }}>
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body down-part">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description.substring(0, 50)}</p>
              <Link to={`/WorkoutVideo/${item._id}`}>
                <button className="btn">View Workout</button>
              </Link>
            </div>
          </div>
        );
      })}
    </DIV>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  padding-top: 60px;
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
