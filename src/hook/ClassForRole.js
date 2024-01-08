import { useDispatch, useSelector } from "react-redux";
import { formatRole } from "../utils/format";
import { useEffect, useState } from "react";
import { getAllClasses } from "../store/redux/features/classSlice";

const useGetClass = (role) => {
  const [classes, setClasses] = useState(null);
  const dispatch = useDispatch();
  const roleFormat = formatRole(role);

  useEffect(() => {
    if (roleFormat === "TEACHER") {
      Promise.resolve(setClasses(null))
        .then(() => dispatch(getAllClasses("teachers")))
        .then(() => setClasses(useSelector((state) => state.ClassSlice.classes)))
    } else if (roleFormat === "STUDENT") {
      dispatch(getAllClasses("students"));
    } else {
      console.log('error');
    }
  }, [role]);

  return [classes];
};

export default useGetClass;
