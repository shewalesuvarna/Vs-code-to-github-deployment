import { LightningElement,api } from 'lwc';

export default class ParentChildChild extends LightningElement {


   @api counter=0;
   @api maximizeCounter(){
       this.counter +=100;
   }



}