export default function Appbar(){
        return <div className="bg-white shadow-md ">
                    <div className="shadow-inner flex justify-between items-center rounded-md pb-1 px-1 py-2">
                        <div     className="ml-1 text-xl font-semibold">Paytm App</div>
                        <div className="flex items-center  mr-3">
                            < div className="text-lg font-normal">Hello, Harry Potter</div>
                          <div  className="ring-2 ml-2 rounded-full flex justify-center ring-black">
                             <div className=" cursor-pointer m-1 inline-flex rounded-full  font-medium shadow-inner text-gray-200 text-xl bg-gray-400 w-10 h-10  items-center  justify-center">HP</div></div>
                        </div>
                    </div>


        </div>
}