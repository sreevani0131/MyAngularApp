import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray, AbstractControl, NgForm, FormsModule } from '@angular/Forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  authForm: FormGroup;
  id: string;
  auth = { username:String, password:String };
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id  = this.route.snapshot.paramMap.get('id');
    this.authForm = new FormGroup(
      {
        data: new FormGroup({
          username: new FormControl(),
          password: new FormControl()
        })
              
      }
    );
  }

  onSubmit() {
    this.auth.username = this.authForm.value.data.username;
    this.auth.password = this.authForm.value.data.password;
    console.log(this.auth);
  }
}
