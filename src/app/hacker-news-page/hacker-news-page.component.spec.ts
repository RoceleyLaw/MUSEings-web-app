import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewsPageComponent } from './hacker-news-page.component';

describe('HackerNewsPageComponent', () => {
  let component: HackerNewsPageComponent;
  let fixture: ComponentFixture<HackerNewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerNewsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
