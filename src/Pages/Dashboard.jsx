import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

    const token = useSelector((store) => store.authreducer.token)
    console.log(token)


    const [formattedDate, setformattedat] = useState("")
    const [diarydata, setDiarydata] = useState([])


    useEffect(() => {

        const headers = {
            'Authorization': token,
            'Content-Type': 'application/json',
        };

        fetch("http://localhost:7000/fitness/diarydetails", {
            headers: headers,
        })
            .then((res) => res.json())
            .then((data) => {
                let filtered = data.filter((del) => {
                    // console.log(del.date, formattedDate)
                    if (formattedDate == del.date) {
                        return true
                    } else {
                        return false
                    }
                })

                const currentDate = new Date().toLocaleDateString('en-CA');

                if (filtered.length == 0 && formattedDate == "") {
                    let filtered2 = data.filter((del) => {
                        // console.log(del.date,formattedDate)
                        if (currentDate == del.date) {
                            return true
                        } else {
                            return false
                        }
                    })


                    console.log(filtered2, "giltered 2")
                    setDiarydata(filtered2)

                } else {

                    setDiarydata(filtered)
                }

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });


    }, [formattedDate])


    console.log(diarydata, "diarydata")

    let total = 0

    diarydata.forEach((item) => {
        total += (item.duration * item.sets) * 3
    })









    return (
        <WRAPPER >
            <h1>Exercises Diary</h1>

            <input className='custom-date-picker' onChange={(e) => setformattedat(e.target.value)} type='date' />
            {

                diarydata.length == 0 ?
                    <div className='none'>
                        <img width={"350px"} height={"320px"} src="https://media1.giphy.com/media/U5D2JOB7cRCeUrDoiY/source.gif" alt="" />
                        <h2 style={{ color: "green" }} >No exercise for {<span style={{ color: "purple" }}> {formattedDate || new Date().toLocaleDateString('en-CA')}</span>}</h2>
                    </div>
                    :

                    <table className="diary-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Exercise</th>
                                <th>Time</th>
                                <th>Calorie Burned</th>

                            </tr>
                        </thead>
                        <tbody>
                            {

                                diarydata.map((item) => (
                                    <tr key={item.id}>
                                        <td style={{ width: "100px" }}>
                                            <img width={"85px"} height={"55px"} src={item.img} alt="" />

                                        </td>
                                        <td>{item.name}</td>
                                        <td>{`${item.duration} mins`} </td>
                                        <td style={{ color: "red", fontWeight: "600" }}>{((item.duration * item.sets) * 3)} Kcal</td>

                                    </tr>
                                ))}
                        </tbody>
                    </table>
            }

            <h1 style={{color:"teal"}}>Energy Summary</h1>
            <div className='energy_summary'>

                <div className='energy'>
                    <h2>Calorie Requirement:</h2>
                    <h2 className='kcal'>2550 Kcal </h2>
                </div>
                <div className='energy'>


                    <h2>Calorie Burned:</h2>
                    <h2 className='kcal1'>  {total} Kcal</h2>

                </div>
                <div className='energy'>

                    <h2>Calorie Remaining:</h2>
                    <h2 className='kcal2'> {2550 - total} Kcal</h2>

                </div>
            </div>
        </WRAPPER>
    )
}

export default Dashboard


const WRAPPER = styled.div`


border: 1px solid grey;

/* background-color: #f0e4b8; */


h1{
    margin-top: 70px;
    margin-bottom: 20px;
}
    

.custom-date-picker {
   
    border: 5px solid teal;
    border-radius: 10px;
    padding: 10px;
    color: teal;
    font-size: 20px;
    font-weight: 600;
    margin: auto;
    cursor: pointer;
    width: 300px; 
}

.custom-date-picker::-webkit-calendar-picker-indicator {
    background-color: teal;
    color: white;
    border-radius: 50%;
    padding: 15px;
}




.diary-table {
  border-collapse: collapse;
  width: 100%;
  font-size: 16px;
  margin-top: 20px;
}

.diary-table th,
.diary-table td {
  border: 2px solid #ddd;
  padding: 14px;
  text-align: center;
}






.diary-table {
  font-family: 'Helvetica Neue', sans-serif;
}



.diary-table th {
  background-color: #ffc107; 
  color: #333;
}

.diary-table td {
  color: black;
}

.none{
    /* border: 2px solid black; */
    padding-top: 15px;
    padding-bottom: 15px;
}


.energy_summary{
    width:40%;
    margin:auto;
    margin-bottom: 18px;
}

.energy{
    border: 2px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px;
    

}

.kcal{
    color: black;
}

.kcal1{
    color: red;
}

.kcal2{
    color: green;
}

`