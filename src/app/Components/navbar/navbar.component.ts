import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  
  menu(){
  let nav = document.getElementById("navbar");
  console.log("work")
  
  if(nav?.classList.contains("shownav")){
    nav.classList.remove("shownav")
  }
  else{
    nav?.classList.add("shownav")
  }
}
}
