import { useState,useRef } from "react";

function App() {
  const [object1,setObject1]=useState({
    inputValue:"",
    selectValue:"km"
  })
  const [object2,setObject2]=useState({
    inputValue:"",
    selectValue:"km"
  })
  const inputRef=useRef();
  // console.log(object1);
  // console.log(object2); 
  let tg;
  let result;
  switch (object1.selectValue) {
    case "km":
      tg=object1.inputValue*1000
      break;
    case "ha":
      tg=object1.inputValue*100
      break;
    case "dam":
      tg=object1.inputValue*10
      break;
    case "m":
      tg=object1.inputValue*1
      break;
    case "dm":
      tg=object1.inputValue/10
      break;  
    case "cm":
      tg=object1.inputValue/100
      break; 
    case "mm":
      tg=object1.inputValue/1000
      break;   
  }
    switch (object2.selectValue) {
      case "km":
        result=tg/1000
        break;
      case "ha":
        result=tg/100
        break;
      case "dam":
        result=tg/10
        break;
      case "m":
        result=tg/1
        break;
      case "dm":
        result=tg*10
        break;  
      case "cm":
        result=tg*100
        break; 
      case "mm":
        result=tg*1000
        break;   
    }
    const handleAdd=()=>{
      if  (isNaN(object1.inputValue) ===false ){
        setObject2({inputValue:result})
        inputRef.current.focus()
      }
      else {
      setObject1({inputValue:"",selectValue:object1.selectValue})
      setObject2({inputValue:"",selectValue:object2.selectValue})
      alert("nhập lại đi :)))")
    }
  }
  // const handleEnter=(e)=>{
  //   if(e.code==="Enter"){
  //     handleAdd();
  //   }
  // }
  return (
    <>
    <div className=" bg-gradient-to-r from-sky-500 to-indigo-500 ">
      <div className="w-full h-screen flex flex-row justify-center items-center gap-10 ">
        <div className="flex flex-col ">
          <input type="text" id="id" className="border-2 border-lime-600 px-6 py-2 rounded-md outline-none " 
          placeholder="Enter value..."
          value={object1.inputValue}
          onChange={(e)=>
            setObject1({...object1, inputValue:e.target.value})
          }
          ref={inputRef}
          ></input>
          <select onChange={(e)=>
            setObject1({...object1, selectValue:e.target.value})
          } >
            <option value="km">km</option>
            <option value="ha">ha</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
        </div>
        <div className="flex flex-col">
          <button type="" className="px-6 py-2 bg-lime-600 rounded-md text-white hover:bg-sky-700"
          onClick={handleAdd}
          ref={inputRef}
          // onKeyDown={(e)=>handleEnter(e)}
          >Convert</button>
        </div>
        <div className="flex flex-col">
          <input type="text" id="in" className="border-2 border-lime-600 px-6 py-2 rounded-md outline-none" placeholder="Enter value..."
          value={object2.inputValue}></input>
          <select 
          onChange={(e)=>
            setObject2({...object2, selectValue:e.target.value})
          }>
          <option value="km">km</option>
            <option value="ha">ha</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;