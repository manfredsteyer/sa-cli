import { Component } from '../../standalone-shim';

@Component({
    standalone: true,
    selector: 'app-navbar-cmp',
    template: require('./navbar.component.html')
})
export class NavbarComponent {
    
    sidebarVisible: boolean = false;

    sidebarToggle(){
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
