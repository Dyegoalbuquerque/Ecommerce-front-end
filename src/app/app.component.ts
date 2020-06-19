import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  

    currentIndexKitSalgados = 0;
    currentIndexBebidas = 0;
    speed = 5000;
    
    infinite = true;
    direction = 'right';
    directionToggle = true;
    autoplay = true;
    showNum = 4;
    sizeScreen;
    avatars = '1234567891234'.split('').map((x, i) => {
      const num = i;
      // const num = Math.floor(Math.random() * 1000);
      return {
        url: `https://picsum.photos/600/400/?${num}`,
        title: `${num}`
      };
    });
  
    constructor(private toastr: ToastrService) {}
    showSuccess() {
      this.toastr.success('Adicionado ao carrinho', '',{timeOut: 3000});
    }
  
    click(i) {
      alert(`${i}`);
    }


    colorSelect: Array<any>;
    sizeSelect: Array<any>;
  
      public itemsList: Object[] = [
      {
      title: 'Description',
      description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson'
      }
      ];
  
      ngOnInit() {
      this.colorSelect = [
      { value: 'Black', label: 'Black' },
      { value: 'White', label: 'White' },
      { value: 'Red', label: 'Red' },
      ];
      this.sizeSelect = [
      { value: 'XS', label: 'XS' },
      { value: 'S', label: 'S' },
      { value: 'L', label: 'L' },
      ];


    let width = window.innerWidth;
    if(width < 1000 && width >= 800){
      this.showNum = 3;
    }else if(width < 800 && width >= 300)
    this.showNum = 1;
  }
}

 
      