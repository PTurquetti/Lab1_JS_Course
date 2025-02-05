let userRole = "admin";
let accessLevel;

if(userRole === "admin"){
    accessLevel = "Full acess granted";
}else if(userRole==="manager"){
    accessLevel = "Limited acess granted";
}else{
    accessLevel="No acess granted";
}

console.log("Acess level: ", accessLevel);


let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole==="admin"){
        userMessage="Welcome, Admin!";
    }else{
        userMessage="Welcome, User!";
    }
}else{
    userMessage="Please log in to access the system.";
}

console.log("User message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    
    case "manager":
        userCategory = "Manager";
        break;
    
    case "subscriber":
        userCategory = "Subscriber";
        break;
    
    default:
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory);