import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { map, take } from 'rxjs';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-tablesort',
  templateUrl: './tablesort.component.html',
  styleUrls: ['./tablesort.component.scss']
})
export class TablesortComponent implements OnInit ,OnChanges{
  event: any;
  products: any;
  sortedProducts: any; // Variable to store sorted products

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.ApiData();
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.sortedProducts)
  }
 
  onSort() {

   return this.sortedProducts=this.products


  }

  ApiData(): void {
    this.apiService.GetProductData().pipe(
      take(1),
      map(data => {
        this.products = data;
        console.log(this.products);
      })
    ).subscribe();
  }

  print() {
    console.log("Printing started");
    const doc = new jsPDF();
    const content = document.getElementById('printableTable')!;
    html2canvas(content).then(canvas => {
      const imageData = canvas.toDataURL('image/png');
      doc.addImage(imageData, 'PNG', 10, 10, 180, 0);
      doc.save('table.pdf');
    });
  }
}
