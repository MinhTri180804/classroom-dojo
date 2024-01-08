import { Link } from "react-router-dom";
import logoStudent from "../../assets/role-student.webp";
import logoTeacher from "../../assets/role-teacher.webp";

export default function HomePage() {
  return (
    <>
      <div className="container mx-auto w-[1300px]">
        <section className="heading">
          <div className="title text-center font-extrabold text-6xl text-[#2C2A50] mt-24">
            <h1>Where classrooms become</h1>
            <h1>communities</h1>
          </div>
          <div className="title__sub text-center font-bold text-2xl text-[#545382] mt-5">
            <h2>Loved by more than 50 million students and parents.</h2>
            <h2>Free for teachers, forever.</h2>
          </div>
        </section>

        <section className="option__role mt-10">
          <h5 className="option__role-title font-bold text-center color-[#2C2A50] text-lg">
            Get started as a...
          </h5>

          <div className="flex items-center gap-4 justify-center mt-10">
            <Link to="/role/student">
              <div className="px-12 py-6 border-[1px] border-gray-300 flex justify-center items-center flex-col rounded-xl cursor-pointer hover:shadow-xl duration-150 ease-linear">
                <img src={logoStudent} alt="" className="w-[80px] h-[80px]" />
                <h5 className="font-bold text-xl mt-3 text-center">Student</h5>
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

            <Link to="/role/teacher">
              <div className="px-12 py-6 border-[1px] border-gray-300 flex justify-center items-center flex-col rounded-xl cursor-pointer hover:shadow-xl duration-150 ease-linear">
                <img src={logoTeacher} alt="" className="w-[80px] h-[80px]" />
                <h5 className="font-bold text-xl mt-3 text-center">Teacher</h5>
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
        </section>
      </div>
    </>
  );
}
