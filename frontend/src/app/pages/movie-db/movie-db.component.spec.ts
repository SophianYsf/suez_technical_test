import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDbComponent } from './movie-db.component';

describe('MovieDbComponent', () => {
  let component: MovieDbComponent;
  let fixture: ComponentFixture<MovieDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
