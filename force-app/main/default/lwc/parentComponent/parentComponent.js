import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    handleme()
    {
        this.template.querySelector("c-clild-component").handlechangevalue();
    }
}