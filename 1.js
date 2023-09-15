// array exercise

let a = [1,2,3];
a[10] = 10;

console.log(a);  
//  output : [1,2,3,empty  x7 ,10]
console.log(a[5]);  
// output : undefined      
console.log(a[12]);
// output : undefined


console.log("-----see value through for loop---------");
for (let i = 0 ;i<=10;i++){
    console.log(a[i]);
}
// output  1 2 3 7*undefined 10  


// variable exercise
console.log("---------------------var ---------------------")
var test;
console.log("test : ",test); //output undefined
console.log("typeof(test) : ",typeof test);     // output undefined 
console.log("typeof typeof(test) : ", typeof typeof test); //output : string


// typeof type  exercise
var abc = 12;
console.log('--------------typeof typeof ----------------');
console.log("typeof typeof(undefined) : ", typeof typeof(undefined)); 
console.log("typeof typeof(null) : ", typeof typeof(null)); 
console.log("typeof typeof(NaN) : ", typeof typeof(NaN)); 
console.log("typeof typeof(abc) : ", typeof typeof(abc)); 
console.log("typeof typeof([]) : ", typeof typeof([])); 
console.log("typeof typeof({}) : ", typeof typeof({})); 
console.log("typeof typeof(true) : ", typeof typeof(true)); 

// above all output show :  string


// function exercise

console.log("---------function exercise -----------");
function bark(){
    console.log('!woof');
   
    
}

// console.log(bark());  output : undefined

// console.log(bark.animal(''));    output : bark.animal not function

function number(){
    let a = 20;
  
}
number.sum = function(str){return str};
number.one = 1;
console.log(number.one)    
// output : 1 
console.log(number.sum("hello"));
// output : "hello"


// ---------------------JSON exercise ------------------------
console.log("---------------------JSON exercise ------------------------");
const obj1 = {
    fname : 'sagar',
    lname : 'kapdi',
    array : [1,2,3],
    obj : {
            fullname : "this is fullname"
    },
    DOB: new Date('2000-03-23'),
    un : undefined,
    Nu : null,
    nan : NaN,
    fun :function hello(){return 'hello'}

}

// console.log(JSON.parse(obj1));
//output :  syntax error : not a valid JSON


json_obj1 = JSON.stringify(obj1);
console.log(JSON.parse(json_obj1));

// output   :  undefined  and function not work
//{"fname":"sagar",
// "lname":"kapdi",
// "array":[1,2,3],
// "obj":{"fullname":"this is fullname"},
// "DOB":2000-03-23T00:00:00.000Z"
// "Nu":null,
// "nan":null
// }



// -----------------object exercise-------------------
console.log("-----------------object exercise-------------------");
let object1 = {
    a:10,
    b:20,
    a:30
}
console.log(object1);

// output {a:30, b:20}

