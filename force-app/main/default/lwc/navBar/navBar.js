import { LightningElement , wire} from 'lwc';
import { publish, MessageContext } from "lightning/messageService";
import homeButtonNav from "@salesforce/messageChannel/HomeNavBar__c";
import aboutButtonNav from "@salesforce/messageChannel/AboutNavBar__c";
import skillsButtonNav from "@salesforce/messageChannel/SkillsNavBar__c";
import contactButtonNav from "@salesforce/messageChannel/ContactNavBar__c";

export default class NavBar extends LightningElement {

    @wire(MessageContext)
    messageContext;

    handleHomeNavBarClick(event){
        const payload = { goToHomeSection: true };

        publish(this.messageContext, homeButtonNav, payload);
    }

    handleAboutNavBarClick(event){
        const payload = { goToAboutSection: true };

        publish(this.messageContext, aboutButtonNav, payload);
    }
    
    handleSkillsNavBarClick(event){
        const payload = { goToSkillsSection: true };

        publish(this.messageContext, skillsButtonNav, payload);
    }

    handleContactNavBarClick(event){
        const payload = { goToContactSection: true };

        publish(this.messageContext, contactButtonNav, payload);
    }



}