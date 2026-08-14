let arr = [1, 2, 4, 5, 7];
arr[0] = 566;
// console.log(arr, typeof arr);
// console.log(arr.length);
//array is mutable, and also changable

// console.log(arr[0]);

console.log(arr.toString());
console.log(arr.join(" and "));
// a=[1,2,3,4,5,6]
// (6) [1, 2, 3, 4, 5, 6]
// a.pop
// ƒ pop() { [native code] }
// a.pop()
// 6
// a
// (5) [1, 2, 3, 4, 5]
// a.push(100)
// 6
// a
// (6) [1, 2, 3, 4, 5, 100]
// a.push("akshu")
// 7
// a
// (7) [1, 2, 3, 4, 5, 100, 'akshu']
// shift willl remove the first element
// a.shift()
// 1
// unshift will add the element
// a
// (7) ['Akshu', 2, 3, 4, 5, 100, 'akshu'] here unshift added "Akshu"
// shift is brother of Pop
// unshift is brother of push
// delete a[6]
// true
// a
// (7) ['Akshu', 2, 3, 4, 5, 100, 'empty']
// a.length
// 7
// a[6]
// undefined ikada element remove aayindhi so andhuke manaki undefined ani vachindhi
// let numbers = [1,2,3,4,5]
// undefined
// "SPLICE"
// numbers.splice(1,2) "SPLICE"
// (2) [2, 3]
// numbers
// (3) [1, 4, 5]
// let numbers=[1,2,3,4,5,6]
// undefined
// numbers
// (6) [1, 2, 3, 4, 5, 6]
// numbers.splice(1,3,23,10)
// (3) [2, 3, 4]
// numbers
// (5) [1, 23, 10, 5, 6]
