import { LightningElement, wire, track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import profileName from '@salesforce/schema/User.Profile.Name';
export default class ConditionalRendering extends LightningElement {
    isSystemAdministrator= false;
    userId = Id;

    @wire(getRecord, {recordId : Id, Fields : [ profileName] })
    checkProfile({error, data}){
        if(error){
            this.error = error;
        }else if(data){
            if(data.fields.Profile.value != null && data.fields.Profile.value.fields.name.value == 'System Administrator'){
               
                    this.isSystemAdministrator = true;
            
            }
        }

    }

}