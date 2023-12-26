import { LightningElement,  wire } from 'lwc';
import HERO_IMAGE from "@salesforce/contentAssetUrl/Trailblazer";
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
  } from "lightning/messageService";
import homeButtonNav from "@salesforce/messageChannel/HomeNavBar__c";

export default class Hero extends LightningElement {

    heroImageUrl = HERO_IMAGE;
    
    @wire(MessageContext)
    messageContext;

    subscribeToMessageChannel() {
        if (!this.subscription) {
          this.subscription = subscribe(
            this.messageContext,
            homeButtonNav,
            (message) => this.handleMessage(message),
            { scope: APPLICATION_SCOPE },
          );
        }
    }

    handleMessage(message) {
        const heroDiv = this.template.querySelector('[data-id="heroDiv"]');
        heroDiv.scrollIntoView({behavior: "smooth"});
    }

    connectedCallback() {
        this.subscribeToMessageChannel();
      }
    
    

}