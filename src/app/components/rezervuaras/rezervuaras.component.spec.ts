import { ComponentFixture, TestBed } from '@angular/core/testing';

import { rezervuarasComponent } from './rezervuaras.component';

describe('rezervuarasComponent', () => {
  let component: rezervuarasComponent;
  let fixture: ComponentFixture<rezervuarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ rezervuarasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(rezervuarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
