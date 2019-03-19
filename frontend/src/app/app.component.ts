import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'frontend';
  message = '';

  constructor(private http: HttpClient) {
    this.loadMessage();
  }

  loadMessage() {
    this.http.get('http://localhost:8080/angularee/resources/hello').subscribe((data: any) => {
      this.message = data.message;
    });
  }

}
