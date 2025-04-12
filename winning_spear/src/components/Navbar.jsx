import logo from "../assets/images/logo.png"

const Navbar = () => {
    return (
      <>
        <header>
          <nav className="bg-[#081b29] border-b border-[#00abf0]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    {/* logo */}
                  <div className="flex items-center mr-4">
                  <a  href="#">
                    <img src={logo} className="h-[120px] w-auto mb-3"  alt="logo" />
                  </a>
                  <span className="hidden md:block text-white text-2xl font-bold ml-2">
                    Winning Spear.
                  </span>
                  </div>
                  <div className="flex items-center md:ml-auto">
                    <div className="flex space-x-2 mr-20">
                      <a className="text-[#00abf0] md:text-xl hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" href="#">
                        Home
                      </a>
                      <a className="text-white md:text-xl hover:bg-gray-900 hover:text-[#00abf0] rounded-md px-3 py-2" href="#">
                        Services
                      </a>
                      <a className="text-white md:text-xl hover:bg-gray-900 hover:text-[#00abf0] rounded-md px-3 py-2" href="#">
                        About
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
}

export default Navbar