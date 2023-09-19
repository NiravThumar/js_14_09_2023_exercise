
console.log('---------------promise start--------------')
const countryList = {
    1:'Bharat',
    2:'US',
    3:'UK',
    4:'Australia'
}

const stateList = {
    1:"Gujrat",
    2:"Maharastra",
    3:'MP',
    4:'Up'
}

const cityList = {
    1:'Rajkot',
    2:'Jamnagar',
    3:'Porbandar',
    4:'Ahmedabad'
}


const Data =  function(check){
    return new Promise((resolve,reject)=>{
            if(Object.values(countryList).includes(check[0])){
                console.log('---country----',countryList)
                resolve(check)
            }else{
                reject(`${check[0]} not found in countrylist`);
            }
});
}

Data(['Bharat','Gujrat','Rajkot'])
.then((check)=>{
        if(Object.values(stateList).includes(check[1])){
            console.log('-------state-----',stateList);
            return(check) 
        }
        else{
            throw new Error(`${check[1]} not found in statelist`);
        }  
})
.then((check)=>{
    if(Object.values(cityList).includes(check[2])){
        console.log('-------city-----',cityList);
    }
    else{
        throw new Error(`${check[2]} not found in citylist`);
    }  
})
.catch((error)=>{
    console.log(error)
})