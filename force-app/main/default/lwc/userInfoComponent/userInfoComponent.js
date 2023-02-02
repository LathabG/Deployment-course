import { LightningElement, wire, track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'; //this scoped module get the record details 
import Id from '@salesforce/user/Id'; //this scoped module imports the current user ID 
import Name from '@salesforce/schema/User.Name'; //this scoped module imports the current user full name
import RoleName from '@salesforce/schema/User.UserRole.Name'; //this scoped module imports the current user role name
import ProfileName from '@salesforce/schema/User.Profile.Name'; //this scoped module imports the current user profile name
import ManagerName from '@salesforce/schema/User.Manager.Name'; //this scoped module imports the current user manager's name

export default class UserInfoComponent extends LightningElement {
    userId = Id;
    userName;
    userRoleName;
    userProfileName;
    userManagerName;

    @wire(getRecord, {recordId :Id, fields :[Name, RoleName, ProfileName, ManagerName]})
    userInfom({error, data}){
        if(error){
            this.error = error;
        }else if(data){
        if(data.fields.Name.value != null){
            this.userName = data.fields.Name.value;
        }
        if(data.fields.UserRole.value != null){
            this.userRoleName = data.fields.UserRole.value.fields.Name.value;
        }
        if(data.fields.Profile.value != null){
            this.userProfileName = data.fields.Profile.value.fields.Name.value;
        }
        if(data.fields.Manager.value != null){
            this.userManagerName = data.fields.Manager.value.fields.Name.value;
        }

        }
   }


}