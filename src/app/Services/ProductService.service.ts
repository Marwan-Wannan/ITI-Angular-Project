import { IProduct } from './../Models/iproduct';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[] = [];

  constructor() {
    this.products = [
      {
        id: 1,
        title: 'Odense 8-Seater Top Dining Table',
        price: 21500,
        stock: 0,
        thumbnail:
          'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: 'furniture',
        description: 'Engineered Wood dining table',
      },
      {
        id: 5,
        title: 'Trixia 4-Seater Glass Top Dining Table',
        price: 30000,
        stock: 8,
        thumbnail:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: 'furniture',
        description: 'Metal dining table with glass top',
      },
      {
        id: 25,
        title: 'Gasha Marble Top Side Table',
        price: 14000,
        stock: 10,
        thumbnail:
          'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: 'furniture',
        description: 'Metal side table with marble top',
      },
      {
        id: 7,
        title: 'Ventura Fabric Dining Chair',
        price: 1500,
        stock: 1,
        thumbnail:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: 'furniture',
        description: 'Upholstered Seating dining chair',
      },
      {
        id: 17,
        title: 'Ventura Fabric Dining Chair',
        price: 1500,
        stock: 2,
        thumbnail:
          'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: 'furniture',
        description: 'Upholstered Seating dining chair',
      },
      {
        id: 9,
        title: 'Boston Study Chair',
        price: 1000,
        stock: 10,
        thumbnail:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: 'furniture',
        description: 'Upholstered Seating study chair',
      },
      {
        id: 10,
        title: 'Coby Extendable TV Unit',
        price: 13000,
        stock: 0,
        thumbnail:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: 'furniture',
        description: 'Wooden TV unit',
      },
      {
        id: 15,
        title: 'Accent TV Unit',
        price: 36999,
        stock: 4,
        thumbnail:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: 'furniture',
        description: 'MDF TV unit',
      },
      {
        id: 55,
        title: 'Plymouth TV Unit',
        price: 36999,
        stock: 3,
        thumbnail:
          'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: 'furniture',
        description: 'Wooden TV unit',
      },
    ];
  }
  getAllProducts(): IProduct[] {
    return this.products;
  }
  getProductByID(prdID: number): IProduct | undefined {
    return this.products.find(prd => prd.id === prdID);
  }

  getProductsByCategoryID(catID: string): IProduct[] {
    if (catID === '0' || catID === 'all') {
      return this.products;
    } else {
      return this.products.filter(prd => prd.category === catID);
    }
  }

  PerformFilter(v: string): IProduct[] {
    if (v == "0" || v == "all") {
      return this.products;
    }
    return this.products.filter((p) => p.category == v);
  }

}
