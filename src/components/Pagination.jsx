import React from "react";

function Pagination({ pageNo, setPageNo }) {
  
    const increasePageNo = () => {
        setPageNo(pageNo + 1);
    };

    const decreasePageNo = () => {
        if (pageNo > 1) {
            setPageNo(pageNo - 1);
        }
    };

  return (
    <div className="bg-gray-400 text-white flex justify-center m-1 p-2">
      
      <div className="hover:cursor-pointer" onClick={decreasePageNo}>
        <i class="fa-solid fa-circle-arrow-left"></i>
      </div>
      
      <div className="mx-5 font-bold">{pageNo}</div>
      
      <div className="hover:cursor-pointer" onClick={increasePageNo}>
        <i class="fa-solid fa-circle-arrow-right"></i>
      </div>
      
    </div>
  );
}

export default Pagination;
