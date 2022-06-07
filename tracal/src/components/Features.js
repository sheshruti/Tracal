import React from 'react'
import Row from './FeatureRow'

const inline={
    textAlign: "center", 
    marginBottom: "5%", 
    color: "#ffc637"
}
function Features(){
    return(
        <div id="features">
        <div className='container-fluid'>
        <h2 style={inline} >  All the tools to achieve your diet goals</h2>
        <Row heads={["Easy to use.","Track excercises","Efficient diet plans."]}
         body={["Very convenient and easy to use.","Track your excercises and calories burnt <br> to plan accordingly.",
         "Set your target, track your calorie intake <br>and get efficient diet charts."]} />
        <Row heads={["Food diary.","Excercise diary.","Nutritionix."]} 
        body={["To keep track of what you are eating.","To keep track of all the calories you burn <br> and helps to plan your weight journey.",
        "Calculates your calorie intake and helps you plan accordingly."]} />
        <Row heads={["Weight chart.","Nutritional info and tips","Healthy Recipes."]} 
        body={["To record your progress.","Gives nutritional info and quick tips <br> to make healthier decisions.",
        "A large collection for your diet."]} />
        </div>
        </div>
    )
}
export default Features
