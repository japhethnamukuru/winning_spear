import { Link } from "react-router-dom";
import Card from "./Card"
import { FaUsers, FaLaptop } from 'react-icons/fa'
const HomeCards = () => {
    return (
      <>
        <section className="bg-[#081b29] py-4 border-b border-[#00abf0]">
          <div className="container-xl lg:container m-auto pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
              <Card>
                <div className="flex">
                  <FaUsers className="text-4xl mr-4" />
                  <h2 className="text-2xl font-bold">For Marketers</h2>
                </div>
                <p className="mt-4 mb-4">
                  We make marketing easier. Whether you’re building your brand
                  or scaling your reach, our technology and training helps you
                  achieve real results. Unleash your brand’s full potential
                  through smarter campaigns.
                </p>
                <Link
                  className="inline-block bg-[#195783] text-white rounded-lg px-4 py-2 hover:bg-[#00abf0]"
                  to="/courses"
                >
                  Get Started
                </Link>
              </Card>
              <Card bg="bg-[#195783]">
                <div className="flex">
                  <FaUsers className="text-4xl mr-4 pt-0" />
                  <h2 className="text-2xl font-bold">For Learners</h2>
                </div>
                <p className="mt-4 mb-4">
                  We make learning easy and enjoyable. Help your child explore
                  new subjects and grow at their own pace with our personalized
                  learning experiences and thrive in a world of curiosity,
                  creativity, and discovery.
                </p>
                <Link
                  className="inline-block bg-[#0f3652] text-white rounded-lg px-4 py-2 hover:bg-[#00abf0]"
                  to="/learners"
                >
                  Get Started
                </Link>
              </Card>
            </div>
            <div className="m-auto p-4">
              <Card bg="bg-[#164769]">
                <div className="flex">
                  <FaLaptop className="text-4xl mr-4 pt-0" />
                  <h2 className="text-2xl font-bold">Winning Spear</h2>
                </div>
                <p className="mt-4 mb-4">
                  We empower brands to grow and young minds to shine. Whether
                  you're building your business or building your child's future,
                  our tools, training, and technology help you achieve real
                  results. From smarter marketing campaigns to inspiring
                  learning experiences, we’re here to support every step of the
                  journey
                </p>
                <a
                  className="inline-block bg-[#0f3652] text-white rounded-lg px-4 py-2 hover:bg-[#00abf0]"
                  href="#"
                >
                  Get Started
                </a>
              </Card>
            </div>
          </div>
        </section>
      </>
    );
}

export default HomeCards