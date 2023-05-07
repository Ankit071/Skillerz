import { useParams } from "react-router-dom";

const MainCourse = () => {
  const params = useParams();

  return (
    <div>
      MainCourse
      <h2>{params.id}</h2>
    </div>
  );
};

export default MainCourse;
