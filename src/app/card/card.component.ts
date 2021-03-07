import { Component, OnInit, Input } from '@angular/core';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() user;
  faEnvelope=faEnvelope;
  faMapMarkerAlt=faMapMarkerAlt;
  faPhone=faPhone;
  faDatabase=faDatabase;
  constructor( private UserService:UserService) { }

  ngOnInit(): void {
  }
  reload(){
    return location.reload();
  }
}
