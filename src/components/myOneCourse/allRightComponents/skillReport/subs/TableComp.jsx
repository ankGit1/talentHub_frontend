import Table from "react-bootstrap/Table";
const assignData = [
  {
    id: "a101",
    name: "Assignment- HTML Web",
    status: "Not-Completed",
    submit: "",
    score: "",
  },
  {
    id: "a102",
    name: "Assignment- HTML Form",
    status: "Not-Completed",
    submit: "",
    score: "",
  },
  {
    id: "a103",
    name: "Assignment- React Web",
    status: "Not-Completed",
    submit: "",
    score: "",
  },
  {
    id: "a104",
    name: "Assignment- Food Blog",
    status: "Not-Completed",
    submit: "",
    score: "",
  },
  {
    id: "a105",
    name: "Assignment- Apply Css",
    status: "Not-Completed",
    submit: "",
    score: "",
  },
];

function TableComp() {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Assignment Name</th>
          <th>Status</th>
          <th>Date Submission</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {assignData.map((assign) => (
          <tr key={assign.id}>
            <td>{assign.name}</td>
            <td>{assign.status}</td>
            <td>{assign.submit || "Pending"}</td>
            <td>{assign.score || "-"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComp;
