"use strict";
let guest_list = ["Ali", "Shameer", "Rafay"];
console.log(`Hello ${guest_list[0]}, you are ivited to dinner today!`);
console.log(`Hello ${guest_list[1]}, you are ivited to dinner today!`);
console.log(`Hello ${guest_list[2]}, you are ivited to dinner today!`);
console.log(`\n${guest_list[2]} can't make to the dinner.`);
//replacing guest name with aother
guest_list[2] = "Abdul Majeed";
//printing updated invitation
console.log("\nUpdated invitations : ");
console.log(`Hello ${guest_list[0]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[1]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[2]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[3]}, you are invited to dinner tonight.`);
