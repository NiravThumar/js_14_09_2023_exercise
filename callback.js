console.time('myscript')

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







function evaluate(self,callback,calling,check,index){

    if(Object.values(self).length != 0){
        if(Object.values(self).includes(check[index])){
            console.log(`${check[index]} `,self)
            callback(calling,check) 
        }
        else{
            console.log(`${check[index]} not found in country list`)
        }
    }
    else{
        console.log(`${self} not found`)
    }
    

}




let country = (callback,check) => {

    if(Object.values(countryList).length != 0){
        if(Object.values(countryList).includes(check[0])){
            console.log(`country ${check[0]} `,countryList)
            callback(city,check) 
        }
        else{
            console.log(`${check[0]} not found in country list`)
        }
    }
    else{
        console.log('country not found')
    }

};



let state = (callback,check) => {
    if(Object.values(stateList).length != 0){
        if(Object.values(stateList).includes(check[1])){
            console.log(`state ${check[1]} `,stateList)
            callback(check) 
        }
        else{
            console.log(`${check[1]} not found in state list`)
        }
    }
    else{
        console.log('state not found')
    }

   
}
let city = (check) => {
    if(Object.values(cityList).length != 0){
        if(Object.values(cityList).includes(check[2])){
            console.log(`city ${check[2]} `,cityList)
            endTime =performance.now();
        }
        else{
            console.log(`${check[2]} not found in city list`)
        }
    }
    else{
        console.log('city not found')
    }
}


const data = function(country){
   if(true){
       country(state,['Bharat','Up','Rajkot'])
   }
   else{
    console.log('error')
   }
}

data(country)


