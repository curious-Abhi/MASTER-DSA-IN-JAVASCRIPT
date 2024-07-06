//1
// let myArray=[]
// let myArray=["banana","apple","mannnnnnnnnnnngo"]
// console.log(myArray)

//2 constructor
// let myarray2=new Array("banana","apple","mango")
// console.log(myarray2)

//3 String.prototype.split()


// let myarray3="banana , apple".split(" , ")
// console.log(myarray3)



// //accessing elements
// let fruits=["banana","apple","mango"]
// // console.log(fruits[2])
// // console.log(fruits[1])
// // console.log(fruits[0])

// //array length
// console.log(fruits.length)


//traversing array

// for , for..of, for each

// let fruits=["banana","apple","mango","litchi","pears"]
//using for loop
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// for(let fruit of fruits){
//     console.log(fruit)
// }


//using forEach

// fruits.forEach((fruit)=>{
//     console.log(fruit)
// })

//practice problem1.
// Problem 1: Create an array and access its elements
// Task: Create an array of your favorite fruits and print each fruit using its index.

// let fav_fruits=["apple","banana","pears","oraange"]
// console.log(fav_fruits[0])
// console.log(fav_fruits[1])
// console.log(fav_fruits[2])
// console.log(fav_fruits[3])


//Problem 2: Write a function to find the maximum and minimum elements in an array
// Task: Write a function findMaxMin that takes an array of numbers and returns the maximum and minimum values.

// function findMaxMin(arr){
//     let min=max=arr[0]

//     for(let i=0; i<arr.length;i++){
//        if(arr[i]>max){
//         max=arr[i]
//        }
//        if(arr[i]<min){
//         min=arr[i]
//        }



    
//     }
//        return{max,min};
    
// }
// //example

// let numbers=[3,7,3,6,8,12,45]
// let result=findMaxMin(numbers)
// console.log(result)
