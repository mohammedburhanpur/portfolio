import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from "lightning/messageService";
import homeButtonNav from "@salesforce/messageChannel/HomeNavBar__c";
import aboutButtonNav from "@salesforce/messageChannel/AboutNavBar__c";
import skillsButtonNav from "@salesforce/messageChannel/SkillsNavBar__c";
import contactButtonNav from "@salesforce/messageChannel/ContactNavBar__c";

export default class NavBar extends LightningElement {

    dyamicCSS = "";

    @wire(MessageContext)
    messageContext;

    handleHomeNavBarClick(event) {
        const payload = { goToHomeSection: true };

        publish(this.messageContext, homeButtonNav, payload);

        this.dyamicCSS = "slds-grid slds-gutters slds-grid_vertical slds-grid_align-center";

        this.dyamicCSSHadler();

    }

    handleAboutNavBarClick(event) {
        const payload = { goToAboutSection: true };

        publish(this.messageContext, aboutButtonNav, payload);

        this.dyamicCSSHadler();
    }

    handleSkillsNavBarClick(event) {
        const payload = { goToSkillsSection: true };

        publish(this.messageContext, skillsButtonNav, payload);

        this.dyamicCSSHadler();
    }

    handleContactNavBarClick(event) {
        const payload = { goToContactSection: true };

        publish(this.messageContext, contactButtonNav, payload);

        this.dyamicCSSHadler();
    }

    dyamicCSS = "slds-grid slds-gutters slds-grid_vertical-align-center slds-grid_align-center";

    handleResposive(event) {
        
        this.dyamicCSS = "slds-grid slds-gutters slds-grid_vertical slds-grid_align-center";

        this.dyamicCSSHadler();
        
    }

    dyamicCSSHadler(event){
        const menu = this.template.querySelector('[data-id="menu"]');
        if (menu.className === "menu") {
            menu.className += " responsive";
        } else {
            menu.className = "menu";
        }

        const sfdcIcon = this.template.querySelector('[data-id="sfdc-icon"]');
        console.log(sfdcIcon.className);
        if (sfdcIcon.className === "sfdc-icon slds-col slds-m-left_xx-large") {
            sfdcIcon.className += " hide";
        } else {
            sfdcIcon.className = "sfdc-icon slds-col slds-m-left_xx-large";
        }

        const headerAlign = this.template.querySelector('[data-id="header-align"]');
        if (headerAlign.className === "slds-p-around_small slds-grid slds-grid_align-spread") {
            headerAlign.className += " slds-p-around_small";
        } else {
            headerAlign.className = "slds-p-around_small slds-grid slds-grid_align-spread";
        }

        const hamurgerMenuAlign = this.template.querySelector('[data-id="hamurger-menu-align"]');
        if (hamurgerMenuAlign.className === "slds-col slds-m-right_x-large") {
            hamurgerMenuAlign.className += "slds-col slds-grid_vertical slds-align_absolute-center ";
        } else {
            hamurgerMenuAlign.className = "slds-col slds-m-right_x-large";
        }
    }


}