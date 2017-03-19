import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewsItemComponent } from './hacker-news-item.component';

describe('HackerNewsItemComponent', () => {
  let component: HackerNewsItemComponent;
  let fixture: ComponentFixture<HackerNewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerNewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
