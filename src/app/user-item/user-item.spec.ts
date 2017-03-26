import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItem } from './user-item';

describe('UserItem', () => {
  let component: UserItem;
  let fixture: ComponentFixture<UserItem>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserItem ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
