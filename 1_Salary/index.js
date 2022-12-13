// Bài tập 1: Tính tiền lương nhân viên
// Input: Nhập vào số ngày làm nhân viên
// let a = 98
let a = prompt("Input number of working days")
// Lương 1 ngày: 100.000
// Output: Lương nhân viên
let totalSalary = 0
// Progress
totalSalary = a * 100000
console.log("Bài tập 1: Tiền lương của nhân viên:", totalSalary);

// Bài tập 2: Tính giá trị trung bình
// Input: Nhập 5 số thưc
let b = parseFloat(prompt("Input number #1"))
let c = parseFloat(prompt("Input number #2"))
let d = parseFloat(prompt("Input number #3"))
let e = parseFloat(prompt("Input number #4"))
let f = parseFloat(prompt("Input number #5"))
// Output: Giá trị trung bình của 5 số thưc
let avg = 0
// Progress
avg = (b + c + d + e + f) / 5
console.log("Bài tập 2: Giá trị trung bình của 5 số thực:", avg);

// Bài tập 3: Quy đổi tiền
// Input: Nhập số tiền USD
let usd = prompt("Input USD") 
// Output: Giá tiền VND sau quy đổi
let vnd = 0
// Progress
// 1 USD = 23.500 VND
vnd = usd * 23500
console.log("Bài tập 3: USD => VND:", vnd);

// Bài tập 4: Tính diện tích, chu vi hình chữ nhật
// Input: Nhập chiều dài, chiều rộng hình chữ nhật
let length = parseInt(prompt("Input length of rectangle"));
let width = parseInt(prompt("Input width of rectangle"));
// Output: Diện tích, chu vi hình chữ nhật
let sRec = 0
let pRec = 0
// Progress
sRec = length * width
pRec = (length + width)*2
console.log("Bài tập 4: Diện tích hình chữ nhật là", sRec);
console.log("Bài tập 4: Chu vi hình chữ nhật là", pRec);

// Bài tập 5: Tính tổng 2 ký số
// Input: Nhập số có 2 ký số
let number = parseInt(prompt("Input number have 2 digit"))
// Output: Tổng 2 ký số vừa nhập
let sum = 0
// Progress
sum += number % 10
number = Math.floor(number / 10)
sum += number
console.log("Bài tập 5: Tổng 2 ký số là", sum);
