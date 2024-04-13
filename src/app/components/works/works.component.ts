import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Projects } from 'src/app/classes/projects';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  projects: Projects[] = [];

  @Output() dataEvent = new EventEmitter<boolean>();

  loading: boolean = false;

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loading = true;
    this.sendData(); 
  }

  ngAfterViewInit(): void {
    this.loadProjects(); // Load projects when component initializes
  }

  sendData() {
    this.dataEvent.emit(this.loading);
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  loadProjects() {
    this.apiService.getProjects().subscribe((data) => {
      this.projects = data;
      console.log(this.projects);
      this.loading = false; 
      this.sendData(); 

    }, (err: any) => {
      this.loading = false; 
      this.sendData(); 
      console.log(err.status);

      if (err.status == '401') {
        this.reloadSession();
      }
    });
  }

  reloadSession() {
    this.apiService.createSession().subscribe((data) => {
      localStorage.removeItem('sessionToken');
      localStorage.setItem('sessionToken', data);
    });
  }
}
