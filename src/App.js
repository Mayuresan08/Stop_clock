import './App.css';
import {useState,useEffect}from  "react"
function App() {
  const [ min1, setMin1 ] = useState(0);
  const [sec1, setsec1 ] =  useState(0);
  const [min,setMin]=useState(0)
  const [sec,setSec]=useState(0)
  const [flag,setFlag]=useState(true)
  useEffect(()=>{
  let timer = setInterval(() => {
         if(flag)
         { if (sec1 > 0) {
              setsec1(sec1 - 1);
          }
          if (sec1 === 0) {
              if (min1 === 0) {
                  clearInterval(timer)
              } else {
                  setMin1(min1 - 1);
                  setsec1(59);
              }
          } 
        }
        else  clearInterval(timer)
      }, 1000)
      return ()=> {
          clearInterval(timer);
        };
  });

const calculate=()=>{
  console.log(min,sec)
  let total = (min*60)+parseInt(sec)
  console.log(total,Math.floor(total/60))
  setsec1(total%60)
  setMin1(Math.floor(total/60))
}
const start=()=>{
calculate()
}
const reset=()=>{
  setMin(0)
  setSec(0)
  setMin1(0)
  setsec1(0)
}
const resume=()=>{
if(min >0 || sec >0)
  setFlag(!flag)
}
  return (
    <>
      <label>
        <input type="number" value={min} onChange={(e)=>{setMin(e.target.value)}} />
        min1
      </label>
      <label>
        <input type="number" value={sec} onChange={(e)=>{setSec(e.target.value)} }/>
        sec1
      </label>

      <button onClick={start}>START</button>
      <button onClick={resume}>PAUSE / RESUME</button>
      <button onClick={reset}>RESET</button>

      <h1 data-testid="running-clock">{`${String(min1).padStart(2,"0")}:${String(sec1).padStart(2,"0")}`}</h1>
    </>
  );
}

export default App;
