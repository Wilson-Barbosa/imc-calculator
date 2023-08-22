import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

    //attributes
    //i had to add this ! aftet their names, apparently in this version of typescript all the properties should be initialized within the constructor (i'm not using one here)
    weight!: number;
    height!: number;
    imcIndex!: number;

    //function to calculate imc
    imcCalculate(){
        this.imcIndex = this.weight / this.height;
    }

    imcRating() {
        
    }
}
