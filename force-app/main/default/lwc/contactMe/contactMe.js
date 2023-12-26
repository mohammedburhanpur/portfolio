import { LightningElement,  wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
  } from "lightning/messageService";
import contactButtonNav from "@salesforce/messageChannel/ContactNavBar__c";

import CONTACT_ME_IMAGE from "@salesforce/contentAssetUrl/contactpageimage";


export default class ContactMe extends LightningElement {
    contactMeImageUrl = CONTACT_ME_IMAGE;

    @wire(MessageContext)
    messageContext;

    subscribeToMessageChannel() {
        if (!this.subscription) {
          this.subscription = subscribe(
            this.messageContext,
            contactButtonNav,
            (message) => this.handleMessage(message),
            { scope: APPLICATION_SCOPE },
          );
        }
    }

    handleMessage(message) {
        const contactDiv = this.template.querySelector('[data-id="contactDiv"]');
        contactDiv.scrollIntoView({behavior: "smooth"});
    }

    connectedCallback() {
        this.subscribeToMessageChannel();
      }
}