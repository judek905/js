// Function Declaration
function multiply() {
    return a+b;
}
console.log(add(5,6));

// Function Expression
const add = function (a,b) {
    return a + b;
}
console.log(add(5,6));

// Arrow functions
const addNumbers = (a,b) => a+b;

// Example_one
function add(a,b){
  console.log(`The sum of ${a} and ${b} is : ${a+b}`);
}
add(4,5);
add(9,15);

// Example_two
function greetUser(username, age) {
    console.log("Welcome", username, "you are", age, "years old");
}
greetUser("Kakama", 20)

// Example_three
function depositMoney(amount, balance) {
    let newBalance = balance + amount;
    console.log("Your new balance is:", newBalance);
}
depositMoney(100, 500);

// Example_four
function withdrawMoney(amount, balance){
    if (amount > balance) {
        console.log("Insufficient funds");
    } else {
        let newBalance = balance - amount;
        console.log("Your new balance is:", newBalance);
    } 
}
withdrawMoney(200, 500);
withdrawMoney(600, 500);