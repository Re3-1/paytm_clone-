function SendButton({label,onClick}){
    return <div className="mt-2">
        <button type="button" onClick={onClick} className="text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  rounded-md ">{label}</button>
    </div>


}
export default SendButton