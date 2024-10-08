import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToPdfComponent } from './html-to-pdf.component';

describe('HtmlToPdfComponent', () => {
  let component: HtmlToPdfComponent;
  let fixture: ComponentFixture<HtmlToPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlToPdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlToPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
