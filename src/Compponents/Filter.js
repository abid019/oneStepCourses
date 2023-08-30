import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let setCategory = props.setCategory;
    // let category = props.Category;
    function categoryHandler(title){
      setCategory(title);
      
    }
  return (
    <div className={`flex flex-wrap justify-center gap-y-4 w-11/12 max-w-max py-4 mx-auto space-x-4  `}>
        {
            filterData.map((data) => (
                <button onClick={()=>categoryHandler(data.title)} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-bgDark2 hover:bg-opacity-50 border-2 `} key={data.id}>{data.title} </button>
            ))
        }
    </div>
  )
}

export default Filter
