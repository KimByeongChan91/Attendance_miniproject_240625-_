import React, { useState } from 'react';

// 날짜(한 달, 31일)
const daysInJuly = Array.from({ length: 31 }, (_, i) => i + 1);

// 반(오전, 오후, 저녁)
const sessions = ['morning', 'afternoon', 'evening'] as const;

// "morning" | "afternoon" | "evening"
type Session = (typeof sessions)[number];

// 출석률 계산
// 출석 기록 배열 (1은 출석, 0은 결석)
const attendanceRecords = [
  1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1,
];
const totalDays = attendanceRecords.length; // 전체 수업 일수
const attendedDays = attendanceRecords.filter((day) => day === 1).length; // 출석한 날짜 수 계산
const attendanceRate = (attendedDays / totalDays) * 100; // 출석률 계산 (소수점 첫 번째 자리까지)
const roundedAttendanceRate = attendanceRate.toFixed(0); // 소수점 0 번째 자리까지 반올림하여 문자열로 변환

const Attendance = () => {
  const [selectedSession, setSelectedSession] = useState<Session>(sessions[0]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 ">
      <div className="bg-white p-6 rounded-lg w-full max-w-5xl border-solid border-2 border-[#95D2B3] ">
        <h2 className="text-2xl font-bold mb-5 text-center ">출석부</h2>
        <div className="mb-4">
          <div className="block text-gray-700 mb-2">수업 선택</div>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={selectedSession}
            onChange={(e) => setSelectedSession(e.target.value as Session)}
          >
            {sessions.map((session) => (
              <option key={session} value={session}>
                {session}
              </option>
            ))}
          </select>
        </div>
        <table className="w-full table-auto flex flex-col content-between">
          <thead className=" border py-2">
            <tr className="flex justify-between px-10">
              <th>학번</th>
              <th>이름</th>
              <th>출석율</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto h-80 text-center">
            {daysInJuly.map((day, index) => (
              <tr className="flex px-6 py-2  justify-between border  ">
                <td className="">{index + 1}</td>
                <td className="">김병찬</td>
                <td className="">{roundedAttendanceRate}</td>
                <td className="">문제.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
