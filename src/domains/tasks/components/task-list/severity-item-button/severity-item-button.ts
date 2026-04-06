import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-severity-item-button',
  imports: [],
  templateUrl: './severity-item-button.html',
  styleUrl: './severity-item-button.css',
})
export class SeverityItemButton {
  isImportant = input<boolean>()
  isImportantChange = output<boolean>()

  protected getSeverityClass = computed(() => {
    return this.isImportant() ? 'important' : 'not-important';
  })

  protected onChangeSeverity() {
    this.isImportantChange.emit(!this.isImportant())
  }

}
