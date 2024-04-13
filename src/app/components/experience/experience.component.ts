import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Experience } from 'src/app/classes/experience';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Output() dataEvent = new EventEmitter<boolean>();

  loading: boolean = false;

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) { }

  experiences:Experience[]=[]

  ngOnInit(): void {
    this.loading =  true;
    this.sendData(); 
  }
  
  ngAfterViewInit(): void {
    this.getAllExperiences()
  }

  sendData() {
    this.dataEvent.emit(this.loading);
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  getAllExperiences(){
    this.apiService.getExperience().subscribe((data)=>{
      this.experiences=data
      this.loading = false; 
      this.sendData(); 
    },(err:any)=>{
      this.loading = false; 
      this.sendData(); 
      console.log(err);
    })
  }
}
