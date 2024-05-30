// *************** 100 coding challenge "5 day" ************** //


/* Q13 Your Own Array: Think of your favorite mode of transportation, such 
as a motorcycle or a car, and make a list that stores several examples. 
Use your list to print a series of statements about these items, such as 
“I would like to own a Honda motorcycle.”*/

let transportationModes = ["car","bike","sport bike","bus","cycle"];

transportationModes.forEach(mode => (console.log(`I would like to own a ${mode}`)));


/* Q14 Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people 
you’d like to invite to dinner. Then use your list to print a message to 
each person, inviting them to dinner.*/

let guests: string[] = ["Huda" , "Bakhtawar" , "Saba" , "Hina"];

guests.forEach(guest => {
    console.log(`Hello ${guest}, would you like to join me for dinner?`);
});


/* Q15  Changing Guest List: One of your guests can't make it to the dinner, 
so you need to send out a new set of invitations with a replacement guest.*/

let notavailableToAttend = "Huda";
console.log(`${notavailableToAttend} can't join me for dinner.`);

let newGuest = "Shumaila";
guests[guests.indexOf(notavailableToAttend)] = newGuest;

guests.forEach(guest => {
    console.log(`Hello ${guest}, would you like to join me for dinner?`);
});