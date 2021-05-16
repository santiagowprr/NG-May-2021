import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    this.router.navigate(['servers']), {relativeTo: this.route};
    // here we don't neet to insert absolute path (/servers) because the router here doesnt know on which path he currently is
    // the 'relativeTo' (imported with ActivatedRoute) keeps info where is is on the site (on which path) and passes it to 
    // router.navigate. So when this is executed, the link of the site will change to whatever is passed from 'relateTo' with the
    // addition of 'servers' at the end
  }

}
