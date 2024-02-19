import { LightningElement } from 'lwc';

export default class CommunicateParent extends LightningElement {

    countvalue=0;

    handlesubstract(){
        this.countvalue--;
    }
    handleAdd()
    {
        this.countvalue++;   
    }
}