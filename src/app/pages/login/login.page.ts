import {
  Component,
  OnInit
} from '@angular/core'
import {
  NavigationExtras,
  Router
} from '@angular/router'
import { UserLogin } from 'src/app/models/UserLogin'
import { UserModel } from 'src/app/models/UserModel'

@Component( {
  selector   : 'app-login',
  templateUrl: './login.page.html',
  styleUrls  : [ './login.page.scss' ]
} )
export class LoginPage implements OnInit {
  listUser: UserModel[] = [
    UserModel.create( {
      name     : 'Jorge',
      last_name: 'Gomez',
      email    : 'jgomez@gmail.com',
      birthday : undefined,
      type     : 'USUARIO',
      username : 'jgomez',
      password : 'jorge123'
    } ),
    UserModel.create( {
      name     : 'Juan',
      last_name: 'Perez',
      email    : 'jperez@gmail.com',
      birthday : undefined,
      type     : 'ADMIN',
      username : 'jperez',
      password : 'juan123'
    } ),
    UserModel.create( {
      name     : 'Carlos',
      last_name: 'Gomez',
      email    : 'cgomez@gmail.com',
      birthday : undefined,
      type     : 'USUARIO',
      username : 'cgomez',
      password : 'carlos123'
    } ),
    UserModel.create( {
      name     : 'Valentina',
      last_name: 'Gomez',
      email    : 'vgomez@gmail.com',
      birthday : undefined,
      type     : 'ADMIN',
      username : 'vgomez',
      password : 'valentina123'
    } ),
    UserModel.create( {
      name     : 'Pedro',
      last_name: 'Gomez',
      email    : 'pgomez@gmail.com',
      birthday : undefined,
      type     : 'USUARIO',
      username : 'pgomez',
      password : 'pedro123'
    } ),
    UserModel.create( {
      name     : 'Gabriel',
      last_name: 'Gomez',
      email    : 'ggomez@gmail.com',
      birthday : undefined,
      type     : 'USUARIO',
      username : 'ggomez',
      password : 'gabriel123'
    } ),
    UserModel.create( {
      name     : 'Santiago',
      last_name: 'Gomez',
      email    : 'sgomez@gmail.com',
      birthday : undefined,
      type     : 'USUARIO',
      username : 'sgomez',
      password : 'santiago123'
    } )
  ]

  userLoginModal: UserLogin = {
    username: '',
    password: ''
  }

  constructor( private route: Router ) { }

  ngOnInit() {
    this.userLoginModalRestart()
  }

  userLogin( userLoginInfo: UserLogin ) {
    for ( let i = 0; i < this.listUser.length; i++ ) {
      if ( ( this.listUser[i].username == userLoginInfo.username ) && ( this.listUser[i].password == userLoginInfo.password ) )
      {
        console.log( 'User Loged...', this.userLoginModal.username, this.userLoginModal.password )
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }
        const routeName = this.listUser[i].type == 'USUARIO' ? '/usuario' : '/admin'
        this.route.navigate( [ routeName ], userInfoSend )
      }
    }
    this.userLoginModalRestart()
  }

  userLoginModalRestart(): void {
    this.userLoginModal.username = ''
    this.userLoginModal.password = ''
  }
}
