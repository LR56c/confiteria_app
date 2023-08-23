import {
  Component,
  OnInit
} from '@angular/core'
import { Router } from '@angular/router'
import { Product } from 'src/app/models/Product'
import { UserModel } from 'src/app/models/UserModel'

@Component( {
  selector   : 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls  : [ './admin.page.scss' ]
} )
export class AdminPage implements OnInit {
  adminInfoReceived: UserModel | undefined
  listProducts: Product[] = [
    {
      id     : 1,
      name   : 'Producto 1',
      sku    : 3001,
      brand  : 'Marca 1',
      enabled: true
    },
    {
      id     : 2,
      name   : 'Producto 2',
      sku    : 3002,
      brand  : 'Marca 2',
      enabled: true
    },
    {
      id     : 3,
      name   : 'Producto 3',
      sku    : 3003,
      brand  : 'Marca 3',
      enabled: true
    },
    {
      id     : 4,
      name   : 'Producto 4',
      sku    : 3004,
      brand  : 'Marca 4',
      enabled: true
    },
    {
      id     : 5,
      name   : 'Producto 5',
      sku    : 3005,
      brand  : 'Marca 5',
      enabled: true
    },
    {
      id     : 6,
      name   : 'Producto 6',
      sku    : 3006,
      brand  : 'Marca 6',
      enabled: true
    },
    {
      id     : 7,
      name   : 'Producto 7',
      sku    : 3007,
      brand  : 'Marca 7',
      enabled: true
    },
    {
      id     : 8,
      name   : 'Producto 8',
      sku    : 3008,
      brand  : 'Marca 8',
      enabled: true
    },
    {
      id     : 9,
      name   : 'Producto 9',
      sku    : 3009,
      brand  : 'Marca 9',
      enabled: true
    },
    {
      id     : 10,
      name   : 'Producto 10',
      sku    : 3010,
      brand  : 'Marca 10',
      enabled: true
    },
  ]

  constructor( private r: Router ) {
    this.adminInfoReceived =
      this.r.getCurrentNavigation()?.extras.state?.['user']
  }

  ngOnInit() {
  }

  public backButton(): void {
    this.r.navigate( [ '/login' ])
  }
}
