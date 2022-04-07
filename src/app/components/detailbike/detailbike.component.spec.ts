import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailbikeComponent } from './detailbike.component';

describe('DetailbikeComponent', () => {
  let component: DetailbikeComponent;
  let fixture: ComponentFixture<DetailbikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailbikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
