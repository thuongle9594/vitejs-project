import React from 'react';

export const Employee = () => {
  const employees = ['Nguyen Van A', 'Tran Van B', 'Le Thi C'];
  return (
    <>
      <h1>EmployeeList:</h1>
      <ul>
        {employees.map((employee) => (
          <li>{employee}</li>
        ))}
      </ul>
    </>
  );
};
