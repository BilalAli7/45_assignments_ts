//Exercise 32:
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

//making list of current users
let current_user=["Asher","Ahmed","Umer","Faizan","Saim"];
//making list of new users
let new_user=["Altaf","Aslam","Hasan","Shadab","Shamir"];

//converting current_user to lowercase 
let current_user_lower=current_user.map((user)=>user.toLowerCase());

//converting new_user to lowercase
let new_user_lower=new_user.map((user)=>user.toLowerCase());

//checking if current_user and new_user are the same or not

for(let i=0;i<new_user.length;i++){
    if(current_user_lower.includes(new_user_lower[i])){
        console.log(`The username "${new_user[i]}" is not available. Please enter a new username.`);
    }else{
        console.log(`The username "${new_user[i]}" is available.`);
    }
}