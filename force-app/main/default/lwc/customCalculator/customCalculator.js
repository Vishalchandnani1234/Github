import StayInTouchSignature from '@salesforce/schema/User.StayInTouchSignature';
import { LightningElement } from 'lwc';

export default class CustomCalculator extends LightningElement {
    first_number = 0;
    second_number = 0;
    result;
    text_color = 'slds-text-color_default';
    isShow = true;
    connectedCallback() {
        setTimeout(()=> {
            this.template.querySelector('.cssClass').classList.remove('.slds-button_brand');
            console.log('OUTPUT : ',this.template.querySelector('.cssClass'));
            
        },500)
    }
    getValues(event){
        if(event.target.name == 'first_number'){
            this.first_number = Number(event.target.value);
        }
        if(event.target.name == 'second_number'){
            this.second_number = Number(event.target.value);  
        }
        
        if(this.first_number != 0 || this.second_number != 0){
            this.isShow = false;
        }else{
            this.isShow = true;
        }
        if(this.first_number == 0 && this.second_number == 0){
            this.result = 0;
        }

    }   
    doAction(event){
        //var buttonValue = event.target.name;
        switch(event.target.name == 'action'){
            case (event.target.label == '+') : {
                this.result =  this.first_number + this.second_number;
                 this.text_color = 'slds-text-color_success';
                 break;
            }
            
            case (event.target.label == '-') : {
                this.result =  this.first_number - this.second_number;
                this.text_color = 'slds-text-color_success';
                break;
            }

            case (event.target.label == '*') : {
                this.result =  this.first_number * this.second_number;
                this.text_color = 'slds-text-color_destructive';
                break;
            }

            case (event.target.label == '/') : {
                this.result =  this.first_number / this.second_number;
                if(isNaN(this.result)){
                        this.result = 0;
                 }else if(this.second_number == 0){
                        this.result = 'Could not divide by ZERO';
                            
                  }
                this.text_color = 'slds-text-color_inverse-weak';
                break;
            }

            case (event.target.label == '%') : {
                this.result =  this.first_number % this.second_number;
                this.text_color = 'slds-text-color_inverse-weak';
                if(isNaN(this.result)){
                    this.result = 0;
                 }
                break;
            }
        }
    }
}