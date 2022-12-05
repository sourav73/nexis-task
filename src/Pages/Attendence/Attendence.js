import axios from "axios";
import React, { useEffect, useState } from "react";
import AttendenceHeading from "../../components/Heading/AttendenceHeading";
import styles from "./Attendence.module.css";

const Attendence = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getAttendence = async () => {
      try {
        const res = await axios.get("https://test.nexisltd.com/test", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers([...Object.values(res.data)]);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    getAttendence();
  }, [token]);

  return (
    <section className={`container ${styles.attendence}`}>
      <AttendenceHeading text="Attendence information" />
      <div className={styles.attendenceTableContainer}>
        <table className={styles.attendenceTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Employee Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{Object.keys(user.attendance)[0]}</td>
                <td>{user.name}</td>
                <td>{Object.values(user.attendance)[0].status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Attendence;
