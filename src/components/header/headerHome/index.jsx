import logoTeacher from "../../../assets/role-teacher.webp"
import logoStudent from "../../../assets/role-student.webp"
import logoBrand from "../../../assets/logo.jpg"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderHomeComponent() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOverlay() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="container mx-auto w-[1300px] py-5">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              src={logoBrand}
              alt=""
              className="w-[80px] h-[80px] cursor-pointer rounded-full"
            />
          </Link>

          <div className="flex justify-end items-center gap-10">
            <Link
              href={"/role/teacher"}
              className="text-base cursor-pointer hover:text-[#00b2f7] duration-100 ease-linear font-medium"
            >
              Teacher
            </Link>
            <Link
              href={"/role/student"}
              className="text-base cursor-pointer hover:text-[#00b2f7] duration-100 ease-linear font-medium"
            >
              Student
            </Link>
            <Link
              href={"/school"}
              className="text-base cursor-pointer hover:text-[#00b2f7] duration-100 ease-linear font-medium"
            >
              School
            </Link>
            <Link
              href={"/about"}
              className="text-base cursor-pointer hover:text-[#00b2f7] duration-100 ease-linear font-medium"
            >
              About
            </Link>
            <button
              onClick={handleOverlay}
              className="text-base cursor-pointer px-3 py-2 bg-blue-500 hover:bg-black rounded-xl text-white duration-200 ease-linear font-medium"
            >
              Try Now
            </button>
          </div>
        </div>
      </div>

      {/* {isOpen && (
        <OverlayComponent>
          <div className=" relative px-20 py-12 bg-white rounded-xl">
            <h5 className="option__role-title font-bold text-center color-[#2C2A50] text-lg">
              Get started as a...
            </h5>
            <div className="flex items-center gap-4 justify-center mt-5">
              <Link href="/role/student">
                <div className="px-12 py-6 border-[1px] border-gray-300 flex justify-center items-center flex-col rounded-xl cursor-pointer hover:shadow-xl duration-150 ease-linear">
                  <img src={logoStudent} alt="" className="w-[50px] h-[50px] rounded-full" />
                  <h5 className="font-bold text-xl mt-3 text-center">
                    Student
                  </h5>
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-[#00b2f7]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>{" "}
              </Link>

              <Link href="/role/teacher">
                <div className="px-12 py-6 border-[1px] border-gray-300 flex justify-center items-center flex-col rounded-xl cursor-pointer hover:shadow-xl duration-150 ease-linear">
                  <img src={logoTeacher} alt="" className="w-[50px] h-[50px] rounded-full" />
                  <h5 className="font-bold text-xl mt-3 text-center">
                    Teacher
                  </h5>
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-[#00b2f7]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            <div className="absolute top-0 right-0 mt-5 mr-5">
              <button onClick={handleOverlay}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </OverlayComponent>
      )} */}
    </>
  );
}
