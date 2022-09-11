//var means its scoped to the function
//let keywoard means it is scoped to the block 
//const means its constant and cannot be modified, its also block scoped 



//function sayHello() {     
    //for (var i = 0; i < 5; i++) {
        //console.log(i);
    //}

    //console.log(i);  //->This works perfectly fine since 
//}                    //i is in the function scope and is defined 

//sayHello();


//function sayHello() {
    //for (let i = 0; i < 5; i++) {
        //console.log(i);
    //}

    //console.log(i);   -> the i in here is not defined since
//}                     -> let is block scoped 

//sayHello();

//const x = 1;   -> throws error since x is read only and cannot be 
//x = 2;         -> modified since its const 