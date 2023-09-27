import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {}

  constructor(
    private accountService: AccountService,
    private toastrService: ToastrService
  ) {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => console.log({ response }),
      error: err => this.toastrService.error(err.message)
    })
  }

  cancel() {

  }
}
