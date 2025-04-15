import { useState } from "react";
import { Link } from "react-router-dom";

const Course = ( {course} ) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = course.description;

    if (!showFullDescription) {
        description = description.substring(0, 90) + '...';
      }
      
  return (
    <>
     <div className="bg-[#195783] rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    {/* <div className="text-gray-600 my-2">{job.type}</div> */}
                    <h3 className="text-xl text-white font-bold">{course.title}</h3>
                </div>

                <div className="mb-5 text-white">
                    {description}
                </div>
                <button onClick={() => setShowFullDescription((prevState) => !prevState)}
                    className="text-white mb-5 hover:text-black">
                    {showFullDescription ? 'Less' : 'More'}
                </button>

                <h3 className="text-indigo-500 mb-2">Ksh {course.price}</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    {/* <div className="text-orange-700 mb-3">
                        <FaMapMarker  className="inline text-lg mb-1 mr-1"/>
                        {job.location}
                    </div> */}
                    <Link
                        to={`/courses/${course.id}`}
                        className="h-[36px] bg-[#0f3652] hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Course