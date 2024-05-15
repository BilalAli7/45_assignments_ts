let guest_list: string[] = ["Ali", "Ahmed", "Shahmir" , "Abdul Rehman"];

//printing personalized invitation to each person seperately
console.log(`Hello ${guest_list[0]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[1]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[2]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[3]}, you are invited to dinner tonight.`);

//printing guest cant make to the dinner
console.log(`\n${guest_list[2]} can't make to the dinner.`)

//replacing guest name with another
guest_list[2] = "Abdul Majeed";

//printing updated invitation
console.log("\nUpdated invitations : ")
console.log(`Hello ${guest_list[0]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[1]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[2]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[3]}, you are invited to dinner tonight.`);

//printing we found a bigger table
console.log("\nGood news! We found a bigger dinner table.");

//adding new guests to the beginning of the array
guest_list.unshift("Aslam")

//adding new guests to the middle of the array
guest_list.splice (3, 0, "Muzammil")

//adding new guests to the end of the array
guest_list.push("zaman")

//printing updated invitation with more guests
console.log("\nUpdated invitations with more guest : ")
console.log(`Hello ${guest_list[0]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[1]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[2]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[3]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[4]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[5]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[6]}, you are invited to dinner tonight.`);