import { Component, computed, input } from '@angular/core';
import { TaskSeverity } from '../../../models/Task';

@Component({
  selector: 'app-severity-item-button',
  imports: [],
  templateUrl: './severity-item-button.html',
  styleUrl: './severity-item-button.css',
})
export class SeverityItemButton {
  severity = input<TaskSeverity>()

  protected getSeverityClass = computed(() => {
  })

  protected changeSeverity() { }
}
