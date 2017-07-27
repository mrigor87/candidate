import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import {AppService, Foo} from '../app.service';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers: [AppService]
})



export class Comp1Component implements OnInit {

  private apiUrl = 'http://localhost:8082/ui/rest/candidates';
  data: any= {};
  public foo = new Foo (1, 'sample foo');

  constructor(private service: AppService) { }


  ngOnInit() {
/*    this.service.getResource('http://localhost:8082/ui/rest/candidates')*/
/*      .subscribe(
        data => console.log(data),
        error =>  this.foo.name = 'Error');*/


/*this.service.getResource('http://localhost:8082/ui/rest/candidates')
  .map((res: Response) => res.json())
  .subscribe( data =>{
    console.log(data);
    this.data=data
  });*/


    /*    const customHeaders: Headers = new Headers();*/

    /*customHeaders.append('Cookie', 'UISESSION=3F08C496348307F64148EF52FF4295D1');*/

  }

}
