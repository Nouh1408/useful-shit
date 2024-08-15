// let weight = prompt("enter weight: ")
// let height = prompt("enter height")
// function BMIcal(weight,height){
//     let BMi = Math.round(weight/Math.pow(height,2))
//     alert("your BMI is "+ BMi)
// }
// BMIcal(weight,height)



// function BMIcal(weight,height){
//     let BMi = Math.round(weight/Math.pow(height,2))
//     return BMi
// }
// let res = BMIcal(79,176)
// console.log(res)

/*
function bmiCalculator (weight, height) {
    
    let bmi = weight/Math.sqrt(height,2)
    let interpretation = Math.floor(bmi)
    if(interpretation<18.5){
        return "Your BMI is "+interpretation+", so you are underweight."
    } else if(interpretation>=18.5 && interpretation<24.9){
        return "Your BMI is "+interpretation+", so you have a normal weight."
    }
    else{
        return "Your BMI is "+interpretation+", so you are overweight."
    }
    
    return interpretation;
}
*/

let weight = document.getElementById("wei-el");
let height = document.getElementById("hei-el");
let result = document.getElementById("res");
let aboutResult= document.getElementById("aboutresult")

function BMIcal() {
    let weightinp = weight.value
    let heightinp = height.value /100
    let BMi = Math.round(weightinp / Math.pow(heightinp, 2));
    
    if (BMi < 18.5) {
        aboutResult.textContent = "Your BMI is " + BMi + ", so you are underweight";
    } else if (BMi >= 18.5 && BMi < 24.9) {
        aboutResult.textContent = "Your BMI is " + BMi + ", so you are normal weight";
    } else if (BMi >= 25 && BMi < 29.9) {
        aboutResult.textContent = "Your BMI is " + BMi + ", so you are overweight";
    } else {
        aboutResult.textContent = "Your BMI is " + BMi + ", so you are obese";
    }
    //result.textContent = "Your BMI is "+ BMi
}
   



    