import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

feedbackForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.feedbackForm=this.fb.group({
      name:['',[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      mobilenumber:['', [ Validators.required,Validators.maxLength(10)]],
      feedback:['',[Validators.required]]
    });
  }

  ngOnInit() {
  }
  submit(){
    if(this.feedbackForm.valid){
      localStorage.setItem('feedback',JSON.stringify(this.feedbackForm.value));
      this.feedbackForm.reset();
      alert("Thanks for your feedback");
    }
  }
}
