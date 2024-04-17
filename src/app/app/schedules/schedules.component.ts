import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// mport { Component, OnInit } from '@angular/core';
// import {moveItemIn}
// import { CdkDragDrop, , transferArrayItem } from '@angular/cdk/drag-drop';
// import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.css'
})
export class SchedulesComponent implements OnInit{
  ideaItems: { name: string }[] = [
    { name: 'Idea 1' },
    { name: 'Idea 2' },
    { name: 'Idea 3' },
    { name: 'Idea 4' },
    { name: 'Idea 5' }
  ];
  calendarItems: { [key: string]: { [key: string]: { name: string }[] } } = {};
  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  draggedItem: { name: string } | null = null;
  draggedItemIndex: number | null = null;

  constructor() {}

  ngOnInit() {
    this.initializeCalendarItems();
  }

  initializeCalendarItems() {
    for (const week of this.weeks) {
      this.calendarItems[week] = {};
      for (const day of this.days) {
        this.calendarItems[week][day] = [];
      }
    }
  }

  onDragStart(event: DragEvent, index: number) {
    this.draggedItem = this.ideaItems[index];
    this.draggedItemIndex = index;
  }

  onDragOver(event: DragEvent, index: number) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, index: number) {
    event.preventDefault();

    if (this.draggedItem && this.draggedItemIndex !== null) {
      const target = event.currentTarget as HTMLElement;
      if (target.classList.contains('idea-list-item')) {
        // Drop in idea list
        this.ideaItems.splice(this.draggedItemIndex, 1);
        this.ideaItems.splice(index, 0, this.draggedItem);
      } else {
        // Drop in calendar
        const [week, day] = this.getWeekAndDayFromIndex(index);
        this.calendarItems[week][day].push(this.draggedItem);
        this.ideaItems.splice(this.draggedItemIndex, 1);
      }

      this.draggedItem = null;
      this.draggedItemIndex = null;
      this.updateGanttChart();
    }
  }

  getWeekAndDayFromIndex(index: number): [string, string] {
    const weekIndex = Math.floor(index / this.days.length);
    const dayIndex = index % this.days.length;
    return [this.weeks[weekIndex], this.days[dayIndex]];
  }

  updateGanttChart() {
    // Logic to update the Gantt chart based on the calendar items
  }
}
