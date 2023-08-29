import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

    //attributes
    //i had to change an option on tsconfig, apparently newer versions of ts demand all properties to be declared before used (or something like it)
    weight: number;
    height: number;
    imc: number;
    answer: string;

    //function to calculate imc
    imcCalculate(){
        this.imc = this.weight / (this.height * this.height);

        if (this.imc < 18.5) {
            this.answer = 'Magreza';
        } else if (this.imc >= 18.5 && this.imc < 25) {
            this.answer = 'Peso Normal';
        } else if (this.imc >= 25 && this.imc < 30) {
            this.answer = 'Sobrepeso';
        } else if (this.imc >= 30 && this.imc < 35) {
            this.answer = 'Obesidade grau I';
        } else if (this.imc >= 35 && this.imc <= 40) {
            this.answer = 'Obesidade grau II';
        } else if (this.imc > 40) {
            this.answer = 'Obesidade grau III';
        }
    }

}
