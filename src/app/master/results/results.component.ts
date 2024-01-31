import { Component } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  title:any;
  score:any;
constructor(private dashboardService:DashboardService){}
ngOnInit(){
this.dashboardService.getData().subscribe(data=>{
  this.title= data.dashboardData.lastestResults;

})

}
calculatePercentage(score: string): number {
  return parseInt(score, 10);
}
}
