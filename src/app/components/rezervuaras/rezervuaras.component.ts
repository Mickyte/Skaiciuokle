import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezervuaras',
  templateUrl: './rezervuaras.component.html',
  styleUrls: ['./rezervuaras.component.css']
})
export class rezervuarasComponent implements OnInit {
  public talpa:number|null = null;
  public greitis:number|null = null;
  public laikas:number|null = null;
  public rezervuaras = "";
  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuok(){
    if (this.talpa!=null && this.greitis!=null && this.laikas!=null){
      this.rezervuaras=((((this.greitis*this.laikas)/this.talpa))*100).toFixed(2);
    }
  }

}
