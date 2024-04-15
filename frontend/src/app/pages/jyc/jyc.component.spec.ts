import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JycComponent } from './jyc.component';

describe('JycComponent', () => {
  let component: JycComponent;
  let fixture: ComponentFixture<JycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JycComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
