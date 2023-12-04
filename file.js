// // console.log('Hello from JavaScript file');
// // console.log('Hello from JavaScript file');
// // console.log('Hello from JavaScript file');
// // console.log('Hello from JavaScript file');

// //variable first

// var firstName= 'Cizen'
// let address;
// address ='Rockdale'
// console.log('this is my address', address);

// const phone = 474305412;
// console.log('this is my phone' + phone)

// //data types 

// const  subject ='physics';
// let isStudying ='true';
// // let hobbies= 'Undefined';

// // reference types

// //Arrays
// const numbers= [10, 0 ,20]
// const hobbies= [ 'trekking', 'climbing','running']

// //objects 

// var student = {
//     id: 123,
    
//     dob: new Date('12-12-2000'),
//     address : 'rootyhill',
//     isEnrolled : false
// }
// console.log('this is the sudent information', student);
// console.log ( 'this is the hobby', hobbies[0])

// //functions
// function printMyName(){
//     const salay = 30;
//     const hours = 5;
//     const amount = salay * hours;
//     console.log('I earned' , amount);

 
// }
// printMyName();


// //EcmaScript
// //ES6



// const printFavouriteFood =() => {
//     let type = 'Non-veg';


//     switch(type){
//         case'vegeterian':
//         console.log('Paneer')
//         break;
//         case 'Non-veg':
//         console.log('Masu')
//         break;
//         case 'vegan':
//         console.log('plant')
//         break;
//         default:
//             console.log('no food available')

//     }
// }
// printFavouriteFood();



// //error handling

// try{
//    const response= fetch('https://app.chaano.com/api/v1');

// }
// catch(error){
// {
//     console.log(error.message)
//     alert('Something went wrong!', error.message)
// }
// }finally{
// console.log("it will always run")
// }


//es6
//template literals

// const name ="cizen"
// const add ="sydney"
// const info = ` Hi my name is ${name}. I live in ${add}.`

// console.log(info)

//arrow function 
// create call , invoke

// if you dont put {} you dont need to write return. but you do you need to write the written.



//Array
//old  way
// const fruits = new Array('apples', 'mapples', 'banana');
// console.log(fruits);

//new way to do array.

// const fruits =[ 'apples', 'mapples', 'banana']
// console.log(fruits);
// console.log(fruits[1]); // access
// console.log(fruits.length); // check the length.

// fruits[3]='pineapple'; // this element is for adding new element.
// //push will add the element in the last.
// fruits.push('cherry');


//to remove the element it removes the last element no need to put the value.

// fruits.pop();
// console.log(fruits);

// // to remove the element where first param is the one where the delete number starts and the scond param means the number of elements to delete.
// //we can add the element in the splice as well where you need to put the name in the 3rd param

// fruits.splice(0,2);
// console.log(fruits);

//to remove first element

// fruits.shift();
// console.log(fruits);
// fruits.unshift('apple') // to add the first elmenet
// console.log(fruits);


// //IndexOf to know the index number 

// console.log(fruits.indexOf('kiwi'))
// console.log(fruits);

                            // mutation array means the orginal array is getting updated evertime.
// concat
// const veges = ['tomato', 'onion', 'garlic', 'potato'];
// const vegesandfruits = fruits.concat(veges);
// console.log(fruits, veges, vegesandfruits);


// how to remove the mutating the original array.
// console.log(fruits);
// console.log(...fruits);
// const newFruits = [...fruits];
// newFruits.push("berries");
// console.log(newFruits);

// console.log(fruits);

// //writing a loop for fruits to make it all uppercase



// let uppercaseFruits=[];
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i].toUpperCase());
//     uppercaseFruits.push(
//         fruits[i].toUpperCase()
//     )
// }
// console.log(uppercaseFruits);


// fruits.forEach(i=>{
//     console.log(i);
// })

// // map

// const mappedFruits = fruits.map(fruit=>
//     fruit.toUpperCase()
    
// // )
// console.log(mappedFruits);


//includes it checks whether it has in the element or not
// console.log(fruits.includes('apple' || 'mango'));


                        //every 

// console.log(fruits.every(element => fruits.length > 2 ));

//                      //some
// console.log(fruits.some(element => fruits.includes('a') ));


                        //filter
// const filteredFruits = fruits.filter(element => element.length>5);
// console.log(filteredFruits);

                    //find
// const filteredFruits = fruits.find(element => element.length>5);
// console.log(filteredFruits);

//reduce

                            //for loop
// let arr = [2,4,6,8] 
// let sum=0 
// for(i=0; i<arr.length; i++ ) {
   
//    sum = sum + arr[i]
// }
// console.log(sum);



// let x=[1,2,3,4,5];
// let sum = 0
// // for (let i=0; i<x.length-1; i++){

// //     sum = multiply*x[i];
// // }
// // console.log(multiply);

//                          //for each

// x.forEach(element => {
//     sum=sum+element;

    
// });
// console.log(sum);

                                
                                //reduce  

        // const arrayOfNums = [ 1,2,3,4,5,6];

        // let sum =1

        // const result= arrayOfNums.reduce((previousValue, currentValue)=>
        // previousValue* currentValue ,1
        // );
        // console.log(result);



        // create an array of 50 random numbers range between 1 to 100 programmatically


 
        // debugger;
let randomNumberArray = [45, 47, 27];
// lenght - > 50

while(randomNumberArray.length < 50) {

    const randomNumber = Math.floor(Math.random() * (100-1) + 1); //27

    if(!randomNumberArray.includes(randomNumber)){

        randomNumberArray.push(randomNumber);
    }

}

// for(let i=0; randomNumberArray.length < 50; i++){

//     const randomNumber = Math.floor(Math.random() * (100-1) + 1); //27

//     if(!randomNumberArray.includes(randomNumber)){

//         randomNumberArray.push(randomNumber);
//     }
    
// }

console.log(randomNumberArray);