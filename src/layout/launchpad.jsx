import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SlideBarComponent from "../components/slideBar";

export default function LaunchPad() {
  return (
    <>
    <ToastContainer />
    <div className="relative grid grid-cols-6 bg-[#f0efef] ">
        <div className=" col-span-1 z-50">
          <SlideBarComponent />
        </div>
        <div className=" col-span-5">
          <div className="w-full relative">

            <Outlet />

          </div>
        </div>
      </div>
      {/* <div className="min-h-[100vh] w-full overflow-hidden">
        <NavBarComponent />

        <section className="w-full h-full px-5 py-6">
          <div className="title font-bold text-xl text-[#8689b8]">
            Class List
          </div>

          <div className="grid grid-cols-6 gap-6 mt-7">
            <ClassCardAdd /> */}
            {/* <Suspense fallback={<ClassCardListSkeleton />}>
              {classList.length ? (
                classList.map((classItem: IClass, index: number) => (
                  <ClassCard key={index} classItem={classItem} />
                ))
              ) : (
                <div className="w-full h-full flex justify-center items-center">
                  Loading....
                </div>
              )}
            </Suspense> */}
          {/* </div>
        </section>
      </div> */}
    </>
  );
}
