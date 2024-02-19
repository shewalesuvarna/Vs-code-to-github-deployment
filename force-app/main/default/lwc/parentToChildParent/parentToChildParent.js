import { LightningElement } from 'lwc';

export default class ParentToChildParent extends LightningElement {

    startCountstarter=0;
    handleStartChange(event)
    {
      this.startCountstarter = parseInt(event.target.value); // add the value in startcounter
    }

    handlecounte(){

    
  // const updateCounter= this.template.querySelector('c-parent-child--child');// it can be use to access the child componet method
   //updateCounter.maximizeCounter();

   this.template.querySelector('c-parent-child--child').maximizeCounter(); //call the child component method in parrent

}
}