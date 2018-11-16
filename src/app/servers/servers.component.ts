import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allNewServer=false;
  serverStatus:String="Server Not Running...";
  btnstatus = "Start Server";
  servername = "two way binding";
  constructor() {
    setTimeout(()=> {
      this.allNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  stratServer(){
    this.serverStatus = "Server Instance Created With name: " + this.servername;
    this.btnstatus = "Stop Server";
  }

  onUpdateServerName(event:Event){
    this.servername = (<HTMLInputElement>event.target).value;
  }
}
