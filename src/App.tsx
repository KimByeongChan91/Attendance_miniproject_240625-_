import React, { useEffect, useState } from 'react';
import './App.css';
import LoginPage from './page/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Attendance from './page/AttendancePage';
import StudentPage from './page/StudentPage';
import { mainStyle } from './pagestyle/main';
import { allGet } from './service/allGet';

type Data = {
  attendanceList: {
    student_name: string;
    student_number: string;
    phone_number: string;
    student_addr: string;
  }[];
};

function App() {
  // const [data, setData] = useState<any[]>([]);

  // useEffect(() => {
  //   const getData1 = async () => {
  //     try {
  //       const allGetData: any = await allGet();
  //       setData((prev) => allGetData);
  //     } catch (error) {
  //       console.error('Error fetching data', error);
  //     }
  //   };
  //   getData1();
  // }, []);

  // const datas = data.map((v, i) => {
  //   <div key={i}>{v}</div>;
  // });
  // console.log(datas);

  // const [data, setData] = useState<any>({ attendanceList: [] });

  // useEffect(() => {
  //   const allGetData = async () => {
  //     try {
  //       const result = allGet();
  //       setData(result);
  //     } catch (error) {
  //       console.error('error fetching data', error);
  //     }
  //   };
  // }, []);

  // const list = data.map((data) => {
  //   <div>{data.student_name}</div>;
  // });

  const fetchData = async () => {
    try {
      const response: any = await allGet();
      const attendanceList = response.data.attendanceList;
      return attendanceList;
    } catch (error) {
      console.error('데이터 가져오기 오류 :', error);
    }
  };
  const displayData = async ()=>{
    
  }

  return (
    <Router>
      <main style={mainStyle}>
        <Routes>
          <Route>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Attendance" element={<Attendance />} />
            <Route path="/Student" element={<StudentPage />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
