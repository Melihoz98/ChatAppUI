import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit {
joinRoomForm!: FormGroup;
fb = inject(FormBuilder);
router = inject(Router);


ngOnInit(): void {
  this.joinRoomForm = this.fb.group({
    user: ['', Validators.required],
    room: ['',Validators.required]
  })
}
joinRoom(){
  console.log(this.joinRoomForm.value);
  this.router.navigate(['chat']);
}


}
