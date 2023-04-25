const Table2 = ({ arr }) => {
    return (
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              <th>City</th>
              <th>Users</th>
              <th>Income</th>
            </tr>
          </thead>
  
          <tbody>
            {arr.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.total_users}</td>
                <td>{item.average_income}</td>
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table2;
  