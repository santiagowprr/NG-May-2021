import { Component, Input, OnInit } from '@angular/core';
import { UsersServiceService} from '../app/users-service.service'
import { CounterService } from '../app/counter.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CounterService]
})
export class AppComponent {
  constructor(private counterService: CounterService) {}
  
  @Input() switchCount = this.counterService.switchCount
  
  ngOnInit(){
  }
  
}
