import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const WorkoutVideo = () => {
  const arr = useSelector((state) => state.excercisereducer.excercise);
  const { id } = useParams();
  let arr1 = arr.filter((item) => item._id === id);
  let obj = arr1[0];

  //want to extract the video id from the video link
  const videoId = new URL(obj.video).searchParams.get("v");

  return (
    <DIV>
      <div id="frame">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div id="info">
          <table>
            <tr>
              <td>Duration</td>
              <td>{obj.duration}</td>
            </tr>
            <tr>
              <td>Repetition</td>
              <td>{obj.repetition}</td>
            </tr>
            <tr>
              <td>Sets</td>
              <td>{obj.sets}</td>
            </tr>
          </table>
          <button>Add The excerise to your workout</button>
        </div>
      </div>
      <div>
        <h1>{obj.name}</h1>
        <p>{obj.description}</p>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  height: 100vh;
  padding: 20px;
  padding-top: 60px;
  #frame {
    display: grid;
    grid-template-columns: 3fr 1fr;
    /* width: 80%; */
    margin-bottom: 10px;
    /* border: 1px solid red; */
    column-gap: 10px;
  }
  iframe {
    width: 130vh;
    height: 70vh;
  }
  h1 {
    text-align: left;
  }
  p {
    text-align: left;
  }
  button {
    width: 100%;
    height: 50px;
    font-weight: 600;
    text-transform: uppercase;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    padding: 0 30px;
    letter-spacing: 1px;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    align-items: center;
    background-color: #ffeba7;
    color: #000000;
    border: none;
    margin-top: 20px;
  }
  button:hover {
    background-color: #131329;
    color: white;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
    border: none;
  }
  #info table {
    text-align: center;
    font-size: 40px;
    text-align: left;
    width: 100%;
  }
  tr {
    border: 3px solid black;
  }
  td {
    border: 3px solid black;
    padding: 10px;
  }
`;
export default WorkoutVideo;
