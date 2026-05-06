var myDate = new Date();
myDate.setFullYear(2010, 0, 14);
var today = new Date();
if (myDate > today) {
    console.log("Today is before 14th January 2010");
}
else {
    console.log("Today is after 14th January 2010");
}