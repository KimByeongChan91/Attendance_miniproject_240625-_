import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';

const Sidebar: React.FC = () => {
  return (
    <div className="w-10 text-2xl max-h-full h-screen gap-y-11 pr-10 flex flex-col  bg-[#D8EFD3] items-center fixed justify-start">
      <div className="">
        <Link to="/Attendance" className="">
          <CiSearch />
        </Link>
      </div>
      <div className="flex flex-col p-4 space-y-36">
        <Link to="/attendance" className="">
          <FaCalendarDays />
        </Link>
        <Link to="/student" className="">
          <IoPerson />
        </Link>
      </div>
      <div className="sidebar-bottom">
        <Link to={'/Login'}>
          <IoIosLogOut />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
