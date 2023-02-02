import { LightningElement } from 'lwc';

export default class DemoComponent extends LightningElement {
    Selected = false;
    
    handleclick(event){
        console.log('just click');
       this.Selected= event.target.checked;
       

    }
    
}