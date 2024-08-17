import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";

const JobDuties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        return (
          <div className="job-duties" key={uuidv4()}>
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default JobDuties;
