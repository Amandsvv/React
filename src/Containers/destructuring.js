function useData(param){
    let data = param;
    const setData = (p) => {
        data = p;
    }
    return [data, setData];
}

const [data, setData] = useData ({name : 'Mohan',age : 23});
console.log(data);

const user = {name:'Aman', age: 29, address : 'Noida'};
const {name,age,address} = user;
console.log(`User : ${name},${age},${address}`); // through destructuring

//other syntax
console.log(`User : ${user.name},${user.age},${user.address}`); // through object
console.log(`User : ${user['name']},${user['age']},${user['address']}`);//through array

let numbers =[10,20,30,40];
const[num1,,,,num2] = numbers;
console.log(`num1: ${num1},num2 : ${num2}`);