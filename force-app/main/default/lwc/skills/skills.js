import { LightningElement,  wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
  } from "lightning/messageService";

import skillsButtonNav from "@salesforce/messageChannel/SkillsNavBar__c";

export default class Skills extends LightningElement {
    @wire(MessageContext)
    messageContext;

    subscribeToMessageChannel() {
        if (!this.subscription) {
          this.subscription = subscribe(
            this.messageContext,
            skillsButtonNav,
            (message) => this.handleMessage(message),
            { scope: APPLICATION_SCOPE },
          );
        }
    }

    handleMessage(message) {
        const skillsDiv = this.template.querySelector('[data-id="skillsDiv"]');
        skillsDiv.scrollIntoView({behavior: "smooth"});
    }

    connectedCallback() {
        this.subscribeToMessageChannel();
      }
}