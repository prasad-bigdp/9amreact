// function fun ()
// {
//     if (true)
//     {
//         var a = 5; let b = 10;
//     }
//     console.log(a);
//     var a = 6;
//     console.log(b);
// }
// fun()
// let arr = [5, 4, 9, 2, 7];
// arr.forEach(function (v, i)
// {
//     console.log(v * 2)
// });

// arr = [5, 4, 3, 2, 1];
// let res = arr.forEach(function (v, i)
// {
//     return v - 1;
// })
// console.log(res) //undefined
// let res2 = arr.map(function (v, i) {
// 	return v - 1
// })
// console.log(res2)
// arr=[5,4,3,2,1]
// let res3 = arr.map(function (v, i) {
// 	return v%2==0
// })
// console.log(res3)
// let res4 = arr.filter(function (v, i) {
// 	return v % 2 == 0
// })
// console.log(res4)

// //logical and
// // let c = true, d = false;
// // if (d || c)
// // {
// //     console.log("success")
// // }
// // else
// // {
// //     console.log("fail")
// // }

// // let c = (10 > 5) ? "raj" : "prasad";
// // console.log(c)

// function sum (a, ...b)
// {
//     let c= [4,...b]  //[4,3,2,1]
//     console.log(a, b)
// }
// sum(5,3,2,1);

// let sum2 = (a,b) => a + b;
// sum2(5,3)

//Promises
fetch("https://dummyjson.com/quotes/random")
	.then( (res)=>res.json())
	.then((data)=>console.log(data))
	.catch((err)=>console.log(err))

async function something()
{
    try
    {
        const res = await fetch("https://dummyjson.com/quotes/random")
	const data = await res.json()
	console.log(data)
    }
    catch(err){console.log(err)}
}



let a = 20;
console.log(`The value of a is ${a}`)
let name = "prasad"
// Hi,prasad!how are you prasad
console.log(`Hi,${name}!how are you ${name}`)

//
export { a, name }
export default something



