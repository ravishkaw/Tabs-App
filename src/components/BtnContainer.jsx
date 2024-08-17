const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            className={index === currentItem ? "company-btn btn-active" : "company-btn"}
            onClick={() => {
              setCurrentItem(index);
            }}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
