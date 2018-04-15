import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html', 
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = true;
  serverCreationStatus: string = "No server created yet.";
  serverName: string = "";
  serverCreated: boolean = false;

  constructor() { 
    /*setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
    */
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.allowNewServer = false;
    this.serverCreated = true;
    this.serverCreationStatus = `Server ${this.serverName} was created.`;
  }

  onServerNameChange(event : Event){
    console.log('keyup', event);
    this.serverName = (<HTMLInputElement>event.target).value;
    this.allowNewServer = this.serverName.length > 0;
  }
}
