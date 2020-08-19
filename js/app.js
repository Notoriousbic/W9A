var age = 19;
var is_subscribed = true;

if (age < 18 && is_subscribed == true) {
    console.log('The User is under 18 and is subscribed');
} else if (age > 18 && is_subscribed == true) { 
    console.log('The User is an adult and is subscribed');
} else if (age < 18 && is_subscribed == false){
    console.log('the User is under 18 and is not subscribed');
} else if (age > 18 && is_subscribed == false) {
    console.log('the user is an adult is not subscribed');
}
