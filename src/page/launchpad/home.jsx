import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NavBarComponent from "../../components/navbar";
import ClassCardAdd from "../../components/class/classCard/classCardAdd";
import { useDispatch, useSelector } from "react-redux";
import ClassCard from "../../components/class/classCard";
import { formatRole } from "../../utils/format";
import { getAllClasses } from "../../store/redux/features/classSlice";
import ClassEmpty from "../../components/class/classEmpty";
import {
  selectorClassActive,
  selectorClassInactive,
} from "../../store/redux/selector";
import { ClassCardListSkeleton } from "../../components/skeleton/class";
import ClassCardJoin from "../../components/class/classCard/classCardJoin";

ClassesPage.propTypes = {};

function ClassesPage(props) {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.AuthSlice.user.role);
  const classActive = useSelector(selectorClassActive);
  const classInactive = useSelector(selectorClassInactive);
  const statusClasses = useSelector((state) => state.ClassSlice.status);

  useEffect(() => {
    if (role == "TEACHER") {
      dispatch(getAllClasses("teachers"));
    } else if (role == "STUDENT") {
      dispatch(getAllClasses("students"));
    }
  }, [dispatch]);

  return (
    <>
      <div className="min-h-[100vh] w-full overflow-hidden">
        <NavBarComponent />

        <section className="w-full h-full px-5 py-6">
          <div className="title font-bold text-xl text-[#8689b8]">
            My Classes <span className="text-green-500">Active</span>
          </div>

          <div className="grid grid-cols-6 gap-6 mt-7">
            {statusClasses == "loading" ? (
              <ClassCardListSkeleton />
            ) : classActive.length ? (
              <>
                {role == "TEACHER" ? <ClassCardAdd /> : <ClassCardJoin />}
                {classActive.map((classItem, index) => (
                  <ClassCard key={index} classItem={classItem} />
                ))}
              </>
            ) : role == "STUDENT" ? (
              <ClassEmpty />
            ) : (
              <ClassCardAdd />
            )}
          </div>
        </section>

        <section className="w-full h-full px-5 py-6">
          <div className="title font-bold text-xl text-[#8689b8]">
            My Classes <span className="text-red-500">Inactive</span>
          </div>

          <div className="grid grid-cols-6 gap-6 mt-7">
            {statusClasses == "loading" ? (
              <ClassCardListSkeleton />
            ) : classInactive.length ? (
              <>
                {classInactive.map((classItem, index) => (
                  <ClassCard key={index} classItem={classItem} />
                ))}
              </>
            ) : (
              <div className="font-medium italic text-xl">
                You don't have class inactive...
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default ClassesPage;
