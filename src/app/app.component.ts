import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme: boolean = false; 
  displayValue: string = '';
  history: string[] = []; 

  appendValue(value: string): void {
    this.displayValue += value;
  }

  clear(): void {
    this.displayValue = '';
  }

  deleteLast(): void {
    this.displayValue = this.displayValue.slice(0, -1);
  }

  calculate(): void {
    try {
      const result = eval(this.displayValue);
      this.history.push(`${this.displayValue} = ${result}`); 
      this.displayValue = result.toString();
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  clearHistory(): void {
    this.history = [];
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }
}
