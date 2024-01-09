import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassCardJoin from "../../components/class/classCard/classCardJoin";
import ClassEmpty from "../../components/class/classEmpty";
import ClassCard from "../../components/class/classCard";
import ClassCardAdd from "../../components/class/classCard/classCardAdd";
import NavBarComponent from "../../components/navbar";
import { ClassCardListSkeleton } from "../../components/skeleton/class";
import { getAllClasses } from "../../store/redux/features/classSlice";
import {
  selectorClassActive,
  selectorClassInactive,
} from "../../store/redux/selector";
import { IconImportant } from "../../components/class/icon";

ClassesPage.propTypes = {};

function ClassesPage(props) {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.AuthSlice.user.role);
  const classes = useSelector((state) => state.ClassSlice.classes);
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

        {classes.length ? (
          <>
            <section className="w-full h-full px-5 py-6">
              <div className="title font-bold text-xl text-[#8689b8]">
                My Classes <span className="text-green-500">Active</span>
              </div>
              <div className="grid grid-cols-6 gap-6 mt-7">
                {statusClasses == "loading" ? (
                  <ClassCardListSkeleton />
                ) : (
                  <>
                    {role == "TEACHER" ? <ClassCardAdd /> : <ClassCardJoin />}
                    {classActive.map((classItem, index) => (
                      <ClassCard key={index} classItem={classItem} />
                    ))}
                  </>
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
                  <div className="font-medium italic text-xl text-gray-500 w-full">
                    You don't have class inactive...
                  </div>
                )}
              </div>
            </section>
          </>
        ) : (
          <>
            {role == "TEACHER" ? (
              <>
                <section className="w-full h-full px-5 py-6">
                  <div className="title font-bold text-xl text-[#8689b8] flex justify-start items-center gap-3">
                    You haven't created any classes yet <IconImportant />
                  </div>
                  <div className="grid grid-cols-6 gap-6 mt-7">
                    <ClassCardAdd />
                  </div>
                </section>
              </>
            ) : (
              <ClassEmpty />
            )}
          </>
        )}

        {/* <section className="w-full h-full px-5 py-6">
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
        </section> */}
      </div>
    </>
  );
}

export default ClassesPage;
