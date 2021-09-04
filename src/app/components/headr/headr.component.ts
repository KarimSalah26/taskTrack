import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service'
import {Subscription} from 'rxjs'
import {Router} from '@angular/router'

@Component({
  selector: 'app-headr',
  templateUrl: './headr.component.html',
  styleUrls: ['./headr.component.css']
})
export class HeadrComponent implements OnInit {

  title = "Task Tracker";
  showAddTask: boolean
  subscribtion:Subscription

  constructor(private uiService: UiService, private router: Router) {
    this.subscribtion = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
  }

  togglAddTask() {
    this.uiService.toggleAddTask()
  }
hasRoute(route : string){
  return this.router.url === route

}
}
