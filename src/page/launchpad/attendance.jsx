import { useSelector } from "react-redux";
import StudentVertical from "../../components/student/studentVertical";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import attendanceApi from "../../apis/attendanceApi";

export default function AttendancePage() {
  const { id } = useParams();
  const students = useSelector((state) => state.studentsSlice.students);
  const sessionClass = useSelector((state) => state.studentsSlice.countSession);
  const [attendance, setAttendance] = useState([]);
  const navigation = useNavigate();

  const handleSubmitAttendance = async (data) => {
    if (attendance.length === 0) {
      toast.error("Please select student to submit attendance");
    } else {
      const dataRequest = {
        classId: id,
        presentStudentIds: attendance,
      };

      try {
        const res = await attendanceApi.attendanceClass(dataRequest);
        toast.success("Submit attendance success");
        navigation(`/launchpad/classes/${id}`);
      } catch (error) {
        toast.error("Submit attendance failed");
      }
    }
  };

  const handleAttendance = (studentId, isPresent) => {
    if (isPresent) {
      setAttendance((prev) => [...prev, studentId]);
    } else {
      setAttendance((prev) => prev.filter((id) => id !== studentId));
    }
  };

  return (
    <>
      <div className="container w-3/4 max-h-[80vh] overflow-y-scroll no-scrollbar mx-auto bg-white mt-10 rounded-lg py-4 px-3">
        <div className="flex flex-col justify-start items-start gap-3 w-full">
          {students.map((student, index) => {
            return (
              <StudentVertical
                key={index}
                student={student}
                sessionClass={sessionClass}
                onAttendance={(isPresent) =>
                  handleAttendance(student.studentId, isPresent)
                }
              />
            );
          })}
          <button
            onClick={handleSubmitAttendance}
            className="w-full mt-7 py-4 rounded bg-blue-300 hover:bg-blue-500 text-white"
          >
            Submit Attendance
          </button>
        </div>
      </div>
    </>
  );
}
