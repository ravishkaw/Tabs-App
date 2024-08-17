import JobDuties from "./JobDuties";

const JobInfo = ({ jobs, currentItem }) => {
  const { company, dates, title, duties } = jobs[currentItem];

  return (
    <article className="job-info">
      <h3 className="job-title">{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-dates">{dates}</p>
      <JobDuties duties={duties} />
    </article>
  );
};
export default JobInfo;
