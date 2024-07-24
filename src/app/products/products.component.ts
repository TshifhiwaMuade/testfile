import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
interface People{
  firstname?: string;
  lastname?: string;
  age?: string;
  employmentStatus?: string;
  city?: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  tableData: People[] = [];
  cols: any[] = [];
  constructor(){}

  ngOnInit(){
    this.cols = [
      {
      field: 'firstname',
      header: 'First Name'
      },
      {
        field: 'lastname',
        header: 'Last Name'
      },
      {
        field: 'age',
        header: 'Age'
      },
      {
        field: 'employementStatus',
        header: 'Employment Status'
      },
      {
        field: 'city',
        header: 'City'
      },
    ];
    this.tableData = [
      { 
        firstname: 'David', 
        lastname: 'ace', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria',
    }, 
    { 
        firstname: 'Jane', 
        lastname: 'west', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'

    }, 
    { 
        firstname: 'Mak', 
        lastname: 'Lame', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Peter', 
        lastname: 'raw', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Kane', 
        lastname: 'James', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Peter', 
        lastname: 'raw', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Kane', 
        lastname: 'James', 
        age: '40', employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Peter', 
        lastname: 'raw', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Kane', 
        lastname: 'James', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Peter', 
        lastname: 'raw', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Kane', 
        lastname: 'James', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Peter', 
        lastname: 'raw', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Kane', 
        lastname: 'James', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
      { 
        firstname: 'David', 
        lastname: 'ace', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria',
    }, 
    { 
        firstname: 'AJne', 
        lastname: 'west', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'

    }, 
    { 
        firstname: 'Mak', 
        lastname: 'Lame', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Peter', 
        lastname: 'raw', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Kane', 
        lastname: 'James', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Peter', 
        lastname: 'raw', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Kane', 
        lastname: 'James', 
        age: '40', employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Peter', 
        lastname: 'raw', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Kane', 
        lastname: 'James', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Peter', 
        lastname: 'raw', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Kane', 
        lastname: 'James', 
        age: '40', 
        employmentStatus: 'unemployed',
        city: 'Pretoria'
    }, 
    { 
        firstname: 'Peter', 
        lastname: 'raw', 
        age: '40', 
        employmentStatus: 'employed',
        city: 'johannesburg'
    }, 
    { 
        firstname: 'Kane', 
        lastname: 'James', 
        age: '40', 
        employmentStatus: 'student',
        city: 'Pretoria'
    }, 
    ];
  }
}
