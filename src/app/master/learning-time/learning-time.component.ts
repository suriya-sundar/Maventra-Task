import { Component } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-learning-time',
  templateUrl: './learning-time.component.html',
  styleUrls: ['./learning-time.component.css']
})
export class LearningTimeComponent {
  timeSpentData:any
  days:any;
  dataset:any
  constructor(private dashboardService:DashboardService){}
  ngOnInit() {
    this.dashboardService.getData().subscribe(data => {
      console.log("hai", data);
      this.timeSpentData = data.dashboardData.timeSpentData.averagePercentages;
      console.log("title", this.timeSpentData);
      this.days = data.dashboardData.timeSpentData.days;
      this.dataset = this.days;
      console.log(this.days);
    });
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  getHeight(value: number): string {
    const multiplier = 2;
    return `${value * multiplier}px`;
  }
  onItemSelected(item: string): void {
    console.log(`Selected: ${item}`);
  
  }

}
