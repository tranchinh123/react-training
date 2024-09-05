import { useState } from "react";
const ToDoList: React.FC = () => {
  const jobsString = localStorage.getItem("jobs");
  const storageJobs: string[] = jobsString ? JSON.parse(jobsString) : [];

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(storageJobs ?? []);

  const handleSubmit = () => {
    setJobs((pre) => {
      const newJobs = [...pre, job];

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };
  return (
    <div style={{ padding: 40 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
