import { useState } from "react";
const ToDoList: React.FC = () => {
  const [job, setJob] = useState<string>("");
  const [jobs, setJobs] = useState<string[]>([]);
  const handleSubmit = () => {
    setJobs((pre) => [...pre, job]);
    setJob("");
  };
  return (
    <>
      <div style={{ padding: 40 }}>
        <input value={job} onChange={(e) => setJob(e.target.value)} />
        <button onClick={handleSubmit}>Add</button>

        <ul>
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ToDoList;
