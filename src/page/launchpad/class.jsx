import { useDispatch, useSelector } from "react-redux";
import NavBarComponent from "../../components/navbar";
import { useParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { getStudentInClass } from "../../store/redux/features/studentsSlice";
import StudentCard from "../../components/student/studentCard";
import {
  AddStudents,
  Attendance,
  RandomAction,
} from "../../components/actions";
import { selectorClassActive } from "../../store/redux/selector";
import { StudentCardListSkeleton } from "../../components/skeleton/student";

export default function ClassRoom() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.studentsSlice.students);
  const statusStudents = useSelector((state) => state.studentsSlice.status);
  const { id } = useParams();
  const classItem = useSelector((state) =>
    state.ClassSlice.classes.filter((classItem) => {
      return classItem.classId == parseInt(id);
    })
  );

  useEffect(() => {
    dispatch(getStudentInClass(id));
  }, [dispatch, id]);

  const nameClass = classItem[0].title;
  const codeClass = classItem[0].code;

  console.log(codeClass);

  return (
    <>
      <div className="min-h-[100vh] w-full overflow-hidden">
        <NavBarComponent titleNavbar={nameClass} codeJoin={codeClass} />

        <section className="w-full h-full px-5 py-6">
          <div className="title font-bold text-xl text-[#8689b8]">
            Student in class
          </div>

          <div className="grid grid-cols-6 gap-6 mt-7">
            {statusStudents == "loading" ? (
              <StudentCardListSkeleton />
            ) : students.length ? (
              students.map((student, index) => (
                <StudentCard student={student} />
              ))
            ) : (
              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
                <div className="font-bold text-2xl text-gray-700">
                  Your class has no students yet...
                </div>
                <div className=" font-medium text-xl text-gray-600">
                  You can ask students to participate via class code
                </div>
                <div className="font-bold text-3xl text-blue-600 mt-2">
                  [ {codeClass} ]
                </div>
              </div>
            )}
          </div>
        </section>
        <div className="h-[50px] w-full bg-white fixed bottom-0 left-0 right-0 border-t-2 border-gray-400 flex justify-center items-center gap-12">
          <RandomAction />
          <AddStudents />
          <Attendance />
        </div>
      </div>
    </>
  );
}
