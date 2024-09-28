import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit {
joinRoomForm!: FormGroup;
fb = inject(FormBuilder);
router = inject(Router);
chatService = inject(ChatService);


ngOnInit(): void {
  this.joinRoomForm = this.fb.group({
    user: ['', Validators.required],
    room: ['',Validators.required]
  })
}
joinRoom(){
const {user, room} = this.joinRoomForm.value;
sessionStorage.setItem("user", user);
sessionStorage.setItem("room", room);
this.chatService.joinRoom(user,room)
.then(() => {
  this.router.navigate(['chat']);
}).catch((err) => {
  console.log(err);
})
  
}


}
