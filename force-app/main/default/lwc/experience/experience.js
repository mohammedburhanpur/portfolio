import { LightningElement,  wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
  } from "lightning/messageService";

import aboutButtonNav from "@salesforce/messageChannel/AboutNavBar__c";



export default class Experience extends LightningElement {
    @wire(MessageContext)
    messageContext;

    subscribeToMessageChannel() {
        if (!this.subscription) {
          this.subscription = subscribe(
            this.messageContext,
            aboutButtonNav,
            (message) => this.handleMessage(message),
            { scope: APPLICATION_SCOPE },
          );
        }
    }

    handleMessage(message) {
        const aboutDiv = this.template.querySelector('[data-id="aboutDiv"]');
        aboutDiv.scrollIntoView({behavior: "smooth"});
    }

    connectedCallback() {
        this.subscribeToMessageChannel();
      }
}