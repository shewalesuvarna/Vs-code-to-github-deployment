import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastEvent extends LightningElement {

    showToast() {
        const event = new ShowToastEvent({
            title: 'Get Help',
            message:
                'Salesforce documentation is available in the app. Click ? in the upper-right corner.',
                variant:'success'
        });
        this.dispatchEvent(event);
    }

}