// import { Component, OnInit } from '@angular/core';
// import { ApiService } from './api.service';
// import { map } from 'rxjs';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit {
//   ngOnInit(): void {
//     this.getData();
//     this.sort()
//   }
//   title = 'App';
//   constructor(private api: ApiService) {}

//   data:Array<any>=[]
//   getData() {
//     this.api
//       .ApiCall()
//       .pipe(map((val) => val.results))
//       .subscribe((res) => {
//         console.log(res);
//         this.data=res
//         return
//       });
//   }
//   sort() {
//     let i = 1;
//     console.log("i times", i++);

//     // Fix the order assignment
//     let order = 'asc';

//     // Toggle the order
//     order = order === 'asc' ? 'desc' : 'asc';

//     this.data.sort((a, b) => {
//       const comparison = a.email.localeCompare(b.email);
//       console.log(comparison);
//       return order === 'asc' ? comparison : -comparison;
//     });

//     console.log(this.data, `sorted data ${order}`);
//   }

//   // sort() {
//   //   let i=1
//   //   console.log("i times",i++)
//   //   this.data.sort((a, b) => {
//   //     var  order='asc'?'desc'?'asc':'desc':'asc'
//   //     const comparison = a.email.localeCompare(b.email);
//   //     console.log(comparison)
//   //     return order === 'asc' ? comparison : -comparison;
//   //   });

//   //   // console.log(this.data, `sorted data ${order}`);
//   // }
//   // sort(order: 'asc' | 'desc') {
//   //   this.data.sort((a, b) => {
//   //     if (a.email > b.email) {
//   //       console.log(a.email > b.email,"a>b")
//   //       return order === 'asc' ? 1 : -1;
//   //     } else if (a.email < b.email) {
//   //       console.log(a.email< b.email,"a<b")
//   //       return order === 'asc' ? -1 : 1;
//   //     } else {
//   //       return 0;
//   //     }
//   //   });

//   //   console.log(this.data, `sorted data ${order}`);
//   // }


// }
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'App';
  data: Array<any> = [];
  order: 'asc' | 'desc' = 'asc'; // Initialize order here

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api
      .ApiCall()
      .pipe(map((val) => val.results))
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });
  }

  sort() {
    let i = 1;
    console.log("i times", i++);

    // Toggle the order correctly
    this.order = this.order === 'asc' ? 'desc' : 'asc';

    this.data.sort((a, b) => {
      const comparison = a.email.localeCompare(b.email);
      console.log(comparison);
      return this.order === 'asc' ? comparison : -comparison;
    });

    console.log(this.data, `sorted data ${this.order}`);
  }
}

