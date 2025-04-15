import courses from "../assets/courses.json"
import Course from "../components/Course"

const ForMarketers = () => {
    
  return (
    <section className="bg-[#081b29] px-4 py-10">
    <div className="container-xl lg:container m-auto">
        {/* <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2> */}

        {<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <Course key={course.id} course={course} />
                ))}
            </div>
        }

    </div>
</section>
  )
}

export default ForMarketers