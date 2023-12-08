//OOP  paradigm


class Person {
    constructor(FullName, MyAge){
        this.name = FullName;
        this.age = MyAge;

    }
    readBio(){
        console.log("this is my name", this.name);
    }
}
const person1= new Person("Cizen" , 20);
person1.readBio();



const person5 ={
    name: "rajesh Hamal",
    age:50,
    readBio: function(){
        return "My name is " + this.name, "and My age is " + this.age
    },
    readName: () => {
        console.log("this is my name ", person5.name );

    }
}
console.log(person5.readBio());
console.log(person5.readName());


                                    //inheritance   to inheritant just use extends


class student extends Person {
   //when adding constructor  // parent is called using super

   constructor(FullName , MyAge){
    super(FullName, MyAge)
    this.type = "student";
   }
   
}
const student1 = new student("student shyam", 30);
student1.readBio();



class employee extends Person {
   
    readBio(){
        console.log("this is my name", this.name);
    }
}
const employee1 = new employee("cizen", 15);
employee1.readBio();



                                //Encapsulation -means hiding the things which don't require.






class man {
    #salary; // which denotes for private  // it is only accessible for the one 
    constructor(FullName, MyAge){
        this.name = FullName;
        this.age = MyAge;
        this.#salary = 10000;

    }
    readBio(){
        console.log("this is my name", this.name, "and this is my age", this.age, this.#getsalary());
    }
    #getsalary(){
        console.log("My salary is ", this.#salary)
    }
}
const man1= new man("Cizen" , 20);
man1.readBio();



                     //abstraction -means hiding the complex things inside and only sees what requires

                            

                    // Polymorphism  - means many forms or It can be taken as multiple forms. 

class people extends Person {
   //when adding constructor  // parent is called using super
   constructor(FullName , MyAge){
    super(FullName, MyAge)
    this.type = "student";
   }
   readBio()
{   super.readBio(); // super. readbio helps to take the value of the readbio from person as well.
    console.log("this is the people of person")
   
}  
}
const people1 = new people("student shyam", 30);
people1.readBio();




// high order function menas a function returning another funtion to do that first 
//call one function and another function.


const add= (a,b) =>{
    const sum = a + b;
    const print =() =>{
        console.log("the sum is ", sum);

    }
    return print; 
}

add(4,6)();
console.log("here");

const titles=(document.getElementsByTagName("h1"));
const title2=(document.getElementsByTagName("h2"));
title2[0].style.fontSize = "30px";


//create a new element

const link = document.createElement("a");
console.log(link);
link.setAttribute("href", "https://google.com");
link.innerText ="Google";


const commentsection= document.getElementById("comment-section")
console.log(commentsection);
const commenttitle= document.getElementsByClassName("comments-title")
console.log(commenttitle);

console.log(document.querySelector(".paragraph"));


// titles[0].setAttribute('class', 'documentTitle')
commenttitle[0].setAttribute("style", "color : green");

const submitButton = document.querySelector("#comment-section button");
console.log(submitButton);

console.log(commenttitle[0].innerHTML);
console.log(commentsection.innerText);
commentsection.style.backgroundColor = "gray";
commentsection.style.padding = "10px";

commenttitle[0].innerHTML = "<p> This is a new section </p>";



//append child 
commentsection.appendChild(link);


//Event  On Click
submitButton.addEventListener("click",function (){
    
    titles[0].setAttribute('class', 'documentTitle')
    // titles[0].style.color ="green";
   
    
    
})


    setTimeout(() => {
        title2[0].setAttribute('class', 'dom')
    }, 3000);




// add contact details
const addName = document.querySelector('.name')
const addAddress = document.querySelector('.address')
const addButton = document.querySelector('.btn');
const addDetails = document.querySelector('.details');


addButton.addEventListener('click', () =>{
    console.log('the add button is clicked')
    const nameValue =addName.value;
    const nameAddress =addAddress.value;
    
    const spanDetail = document.createElement ('p');
    const removeBtun = document.createElement('button');
    removeBtun.innerHTML='remove';
    spanDetail.innerHTML = `<span> ${nameValue}</span> -  <span> ${nameAddress}</span>  `
    addDetails.appendChild(spanDetail);
    spanDetail.appendChild(removeBtun);
    removeBtun.addEventListener('click', ()=>{
        
        addDetails.removeChild(spanDetail);
        
    })

});




