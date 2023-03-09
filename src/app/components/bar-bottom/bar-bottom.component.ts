import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-bottom',
  templateUrl: './bar-bottom.component.html',
  styleUrls: ['./bar-bottom.component.css']
})
export class BarBottomComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
    
    const form = document.querySelector('.cadastro') as HTMLFormElement;
    const button = document.querySelector('.btn') as HTMLButtonElement;

    button.addEventListener('click', (e) => {
      e.preventDefault();
      const emailInput = document.querySelector('.insc') as HTMLInputElement;
      const checkbox = document.querySelector('.check') as HTMLInputElement;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (checkbox.checked && emailRegex.test(emailInput.value)) {
        window.alert('Parabéns! Agora você faz parte da nossa newsletter.');
        emailInput.value = "";
        checkbox.checked = false;
        }

        else {
          window.alert('Por favor, marque a check-box ou insira um email válido para continuar.')
        }

      
    

        

      
  

  })
  }
}