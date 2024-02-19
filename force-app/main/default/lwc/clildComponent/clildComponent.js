import { LightningElement,api } from 'lwc';

export default class ClildComponent extends LightningElement {
@api itemName="Salesforce Noob";

@api handlechangevalue()
{
    this.itemName="Salesforce lwc demo";
}
}