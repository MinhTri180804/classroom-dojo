import { Link } from "react-router-dom";
import { IconAddStudent, IconAttendance, IconPlusScore, IconRandom } from "./icon";

export function RandomAction() {
  return (
    <div className="flex justify-center items-center gap-3 font-medium text-blue-500 cursor-pointer">
      <IconRandom />
      Random Student
    </div>
  );
}

export function PlusPoints() {
  return (
    <div className="flex justify-center items-center gap-3 font-medium text-blue-500 cursor-pointer">
      <IconPlusScore />
      Plus Score
    </div>
  );
}

export function AddStudents() {
  return (
    <div className="flex justify-center items-center gap-3 font-medium text-blue-500 cursor-pointer">
      <IconAddStudent />
      Add Student
    </div>
  );
}

export function Attendance() {
  return (
    <Link
      to={`attendance`}
      className="flex justify-center items-center gap-3 font-medium text-blue-500 cursor-pointer"
    >
      <IconAttendance />
      Attendance Student
    </Link>
  );
}
