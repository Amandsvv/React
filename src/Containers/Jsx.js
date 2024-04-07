let name = 'Aman';
function cehckEvenOrOdd(num){
  if(num%2 === 0){
    return <div>Even</div>
  }
  else{
    return <div>Odd</div>
  }
}
function vowelCheck(ch){
  switch(ch){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O': 
    case 'U':
      return <div>Vowel</div>

    default :return <div>Consonant</div>

    
  }
}
let num = 4;
let ch ='c'
const user=[
  {name: 'Mohan',age: 32},
  {name: 'Aman',age: 21},
  {name: 'Anupam',age:20}

]
function Jsx() {
  return (
    <div className="App">
      <h2>Hello {name} bhai</h2>
      <div>
        {
          cehckEvenOrOdd(5)
        }
        {
          num % 2 === 0 ?<div>Even</div>:<div>Odd</div>
        }
        {
          num % 2 ===0 && <div>Even NUmber</div>
        }
        {
          user.map((item,index)=>{
            return <div key = {index}>
              {item.name} - {item.age}</div>
            })
        }
        {
          vowelCheck(ch)
        }
      </div>
    </div>
  );
}

export default Jsx;

export function Greet(){
    <h2>
        Hello world
    </h2>
}