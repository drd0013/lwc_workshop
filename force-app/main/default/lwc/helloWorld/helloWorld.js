import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
  @track greeting;
  @track myInput = "World";

  handleChange(event) {
    this.myInput = event.target.value;
    // eslint-disable-next-line no-console
    console.log("Greeting: ", this.myInput);
  }

  handleClick() {
    this.greeting = this.myInput + ". It's a pleasure to meet you";
  }
}
