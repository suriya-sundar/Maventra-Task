import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-logout-column',
  templateUrl: './logout-column.component.html',
  styleUrls: ['./logout-column.component.css']
})
export class LogoutColumnComponent {
  userdata:any;
  courses:any;
constructor(private dashboardService:DashboardService){}
ngOnInit(){
this.dashboardService.getData().subscribe(data=>{
  this.userdata= data.dashboardData.userData[0];
this.courses=this.userdata.courses
console.log("ccccc",this.courses)
})

}
}
