import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtExampleComponent } from './jwt-example.component';

describe('JwtExampleComponent', () => {
  let component: JwtExampleComponent;
  let fixture: ComponentFixture<JwtExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JwtExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JwtExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
