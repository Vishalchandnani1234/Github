import { LightningElement } from 'lwc';

export default class P2cParentComponentAssignment extends LightningElement {
    value = '';
    options = [
            {    label : "India", value : "India" },
            {    label : "USA", value : "USA" },
            {    label : "UK", value : "UK" },
            {    label : "Spain", value : "Spain" },
            {    label : "Australia", value : "Australia" }
        ]

    handleChange(event){
        this.template.querySelector('c-p2c-child-component-assignment').showComponent = false;
        this.value = event.target.value;
    }

    show(){
        this.template.querySelector('c-p2c-child-component-assignment').fetchDetails();
    }
}