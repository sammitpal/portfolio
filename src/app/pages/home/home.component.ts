import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pdfUrl: string = '';

  constructor(private apiService: ApiService, private sanitizer: DomSanitizer) { }

  dataBoolean: Boolean = false;
  ngOnInit(): void {
  }


  receiveData(data:Boolean) {
    this.dataBoolean = data;
    console.log(this.dataBoolean);
  }


  viewResume() {
    this.apiService.getResume().subscribe((data: any) => {
      let blob: Blob = new Blob([data], { type: 'application/pdf' })
      this.pdfUrl = URL.createObjectURL(blob);
      window.open(this.pdfUrl, "_blank")
      console.log(this.pdfUrl);
    })
  }

}
