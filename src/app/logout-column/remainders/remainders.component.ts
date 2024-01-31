import { Component } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-remainders',
  templateUrl: './remainders.component.html',
  styleUrls: ['./remainders.component.css']
})
export class RemaindersComponent {
  userdata:any;
  
constructor(private dashboardService:DashboardService){}
ngOnInit(){
this.dashboardService.getData().subscribe(data=>{
  this.userdata= data.dashboardData.userData[0];
console.log(this.userdata)
})

}
}
