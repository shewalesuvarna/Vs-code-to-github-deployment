import { LightningElement } from 'lwc';

export default class ChildCommunication extends LightningElement {

    handleSubstract()
    {
        this.dispatchEvent(new CustomEvent('substract')) ;
    }
    handleAdd(){

        this.dispatchEvent(new CustomEvent('add')) ;

    }
}