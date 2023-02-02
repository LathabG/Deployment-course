import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = ''
    weight = ''
    bmiValue = ''
    result = ''
    changeHandler(event){
        const {name, value} = event.target;
        if(name === "height"){
            this.height = value;  // this[name] = value ;x
        } 
        if(name === "weight"){
            this.weight = value;
        }
        
    }
buttonHandler(event){
    event.preventDefault();
    console.log("Height", this.height);
    console.log("weight", this.weight);
    this.calculate();
}
   calculate(){
    let height = Number(this.height)/100;
    let weight = Number(this.weight);
    let bmi = (weight / (height*height));
    console.log("BMI", bmi);
    this.bmiValue = Number( bmi.toFixed(2));
    console.log("Bmi Value", this.bmiValue);

    if(this.bmiValue < 18.5){
        this.result = "you are under weight";
    }else if(this.bmiValue >18.5 && this.bmiValue <24.9){
        this.result = "You are healthy weight range for young and middle age adults";
    }else if(this.bmiValue > 25 && this.bmiValue < 29.9){
        this.result = "You are overweight";
    }else{
     this.result = "You are obses.";
    }
    console.log("Result", this.result);
   }
   recalculateHandler(){
    this.height = ''
    this.weight = ''
    this.bmiValue = ''
    this.result = ''
   }
}