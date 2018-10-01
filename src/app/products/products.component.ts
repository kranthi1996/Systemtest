import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import {Dataconfig} from   '../config/index';
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
  show_data: boolean = true;
  filter = false;
  allVals;
  arr = [];
  constructor(private router: Router, private productsservice: ProductsService) { }
  ngOnInit() {
    this.products = this.productsservice.getData();
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
    if (event.type == "change") {
      this.data.splice(0, this.data.length);
    }
    if (event.target[1] == undefined) {
      alert("please select the brand first");
    }
    this.brand_products.forEach(obj => {
      if (obj.ProductType == this.brandproduct) {
        this.data.push(obj);
        this.model = true;
        this.router.navigate(['./list'], { queryParams: { BrandName: this.brandname, ProductName: this.brandproduct } })
      }
    });
  }
  product(event, productname) {
    let selected = productname.selected;
    productname.selected = !selected;
    if (productname.selected == true) {
      this.selected_value = true;
      var result = this.filtered.find(obj => {
        if (obj.ProductType == productname.ProductType) {
          this.products_types.push(obj.ModelName);
          this.router.navigate(['./list'], { queryParams: { ProductType: productname.ProductType } })
        }
      })
    }
    if (productname.selected == false) {
      if (productname.ProductType == Dataconfig.TV) {
        var a = this.products_types.indexOf(Dataconfig.TV1.FIRST);
        var b = this.products_types.indexOf(Dataconfig.TV1.LAST);
        this.products_types.splice(a, b + 1);
      }
      if (productname.ProductType == Dataconfig.FRIDGE) {
        var a = this.products_types.indexOf(Dataconfig.FRIDGE1.FIRST);
        var b = this.products_types.indexOf(Dataconfig.FRIDGE1.LAST);
        this.products_types.splice(a, b + 1);
      }
      if (productname.ProductType == Dataconfig.MOBILE) {
        var a = this.products_types.indexOf(Dataconfig.MOBILE1.FIRST);
        var b = this.products_types.indexOf(Dataconfig.MOBILE1.LAST);
        this.products_types.splice(a, b + 1);
      }
    }
  }
}



