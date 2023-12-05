import { LightningElement } from 'lwc';
import HERO_IMAGE from "@salesforce/contentAssetUrl/Trailblazer";

export default class Hero extends LightningElement {
    heroImageUrl = HERO_IMAGE;
}