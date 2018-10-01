import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  brandname;
  brand_products;
  brandproduct;
  data = [];
  ProductName;
  model: boolean = false;
  product_items = [];
  unique_data = [];
  selected_value: boolean = false;
  filtered;
  products_types = [];
  show_data:boolean=true;
  filter = false;
  allVals;
  arr=[];
  constructor(private router: Router, private productsservice: ProductsService) { }
  ngOnInit() {
    this.products = this.productsservice.getData();
    var filtered = _.uniqWith(this.products, _.isEqual);
    this.products.forEach(obj => {
      obj.BrandProducts.forEach(obj => {
        this.product_items.push(obj);
      });
    });
    this.filtered = _.uniqWith(this.product_items, _.isEqual);
  }
  selectBrand(event) {
    this.products.forEach(obj => {
      if (obj.BrandName == event.target.value) {
        this.brand_products = obj.BrandProducts;
      }
    });
  }

  selectProduct(event) {
    console.log(event);
    if(event.type=="change"){
      this.data.splice(0,this.data.length);
    } 
    if (event.target[1] == undefined) {
      alert("please select the brand first");
    }
    this.brand_products.forEach(obj => {
      if (obj.ProductType == this.brandproduct) {
        this.data.push(obj);
        
        console.log(this.data);
        this.model = true;
        this.router.navigate(['./list'], { queryParams: { BrandName: this.brandname, ProductName: this.brandproduct } })
      }
    });
  }

  product(event,productname) {
    console.log(event)
    this.selected_value = true;
    var result = this.filtered.find(obj => {
      if (obj.ProductType == productname) {
        this.products_types.push(obj.ModelName);
        this.router.navigate(['./list'], { queryParams: { ProductType: productname } })
      }
    })
  }
  

}



