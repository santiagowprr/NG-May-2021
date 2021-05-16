import { Injectable } from '@angular/core';
import { CounterService } from "../app/counter.service";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private counterService: CounterService) { }

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.onRiseCount()
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.onRiseCount()
  }
}
