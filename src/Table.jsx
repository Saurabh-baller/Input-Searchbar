import React from "react";
import Users from "../src/Users.json";

export const Table = ({data}) => {
  // console.log("tum",data);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
            
          ))}
          ;
        </tbody>
      </table>
    </div>
  );
};
