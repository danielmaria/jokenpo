import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jokenpo';
  result = ''
  userChoice = {name: '', wins: 0}
  machineChoice = {name: '', wins: 0}
  loading = false

  jokenpo = [
    {number: 0, name: 'rock', loseFor: 'paper'}, 
    {number: 1, name: 'paper', loseFor: 'scissors'}, 
    {number: 2, name: 'scissors', loseFor: 'rock'}
  ]

  choose(action: string) {
    let randomMachineChoice = this.randomChoice();
    this.userChoice.name = action
    this.machineChoice.name = randomMachineChoice?.name!
    this.showLoading()
    if(randomMachineChoice?.name === action) {
      this.result = 'I tied with you'
    } else if (randomMachineChoice?.loseFor === action) {
      this.result = 'I can\'t believ. I lost'
      this.userChoice.wins++
    } else {
      this.result = 'As expected, I won'
      this.machineChoice.wins++
    }
    console.log('Machine choice: ' + randomMachineChoice?.name)
    console.log('User choice: ' + action)
  }

  private randomChoice() {
    let number = Math.floor(Math.random() * 3);
    return this.jokenpo.find(j => j.number === number);
  }

  private showLoading() {
    this.loading = true
    setTimeout(() => {this.loading = false}, 900);
  }
}
