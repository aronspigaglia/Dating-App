import { Component, inject } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { Member } from '../../_model/member';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent {
private memberService = inject(MembersService)
members: Member[]=[];

  ngOnInit(): void {
    this.loadMembers();
  }
  
   loadMembers(){
     this.memberService.getMembers().subscribe({
       next: members => this.members = members
      })
    }
}
