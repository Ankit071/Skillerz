import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <div>
        <h2>Courses</h2>
      </div>
      {[1, 2, 3, 4].map((n, i) => (
        <div key={i}>
          <Link to={`/courses/${n}`}>Link-{n}</Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
