import { useState } from "react";

const Navbar = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText('bennyasitonkajoe@gmail.com');
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <nav className="px-2 py-4 sm:px-4 sm:py-5 fixed w-full z-20 bottom-0 left-0 border-gray-100 bg-white border-t text-sm uppercase font-medium">
      <div className="flex flex-wrap justify-between items-center mx-auto">
         
        <div>
          <p className="ml-4 flex items-center m-0 text-[#475467] md:pb-0 space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>Available for work</span>
          </p>
        </div>

        <div className="md:flex items-center ml-4 hidden">
          <div className="md:mr-6 lg:mr-12">
            <ul className="flex md:space-x-6 lg:space-x-12 ">
              <li className="text-[#475467] hover:text-slate-950">
                <a href="https://drive.google.com/file/d/15gFGYpnWs41cci1dtC7W0DgyUvZMEovf/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</a>
              </li>
            </ul>
          </div>
          <span
            className={`font-body text-sm uppercase mr-2 cursor-pointer ${isCopied ? 'text-green-500' : 'text-blue-800'}`}
            onClick={handleEmailClick}
          >
            {isCopied ? 'Copied!' : 'bennyasitonkajoe@gmail.com'}
          </span>
        </div>

      </div> 
    </nav>
  )
}

export default Navbar