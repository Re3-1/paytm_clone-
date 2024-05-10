export default function Users(){
    return <div className="p-4">
        <div className="font-medium text-xl " >Users:</div>
        <div className="flex  border-black-700 ">
        <svg className="w-6 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>

        <input className="w-full text-lg h-8" placeholder="Search User"></input>
        </div>

    </div>


}