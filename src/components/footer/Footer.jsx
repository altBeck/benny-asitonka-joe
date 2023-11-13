import Copy from "../copy/Copy";

const Footer = () => {
  return (
    <div className="absolute w-screen bottom-auto sm:hidden border-gray-100 bg-white border-t left-0 mt-16 font-light">
      <div className="max-w-7xl pt-8 px-4 mx-auto xl:py-8 mb-20 md:mb-4 text-gray-500">
        <div className="flex flex-col md:flex-row justify-between">

          <div className="md:flex-row md:space-x-24 font-base">

            <div className="flex flex-col">

              <div className="pb-2">
                <p className="text-lg">Ping me via email @ <span className="font-normal text-black">bennyasitonkajoe@gmail.com</span></p>
                <Copy />
              </div>

              <div className="pt-4">
                <footer>2023 © <span className="font-semibold">Benny Asitonka-Joe</span><br />All Rights Reserved.</footer>
              </div>

            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Footer