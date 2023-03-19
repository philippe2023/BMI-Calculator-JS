// Get the Weight (Kg)

// Get the Height (m)


function bmiCalculator(weight, height){
    var bmi = weight/Math.pow(height,2);
    return Math.round(bmi);
}
/* If my weight is 65Kg and my height is 1.8m,
myBmi should equal 20 when it's rounded to the nearest whole number.
*/
var myBmi = bmiCalculator(65,1.8);
console.log(myBmi)