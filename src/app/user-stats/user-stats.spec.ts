import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStats } from './user-stats';

describe('UserStats', () => {
  let component: UserStats;
  let fixture: ComponentFixture<UserStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Write additional tests here
  it('should initialize user data', () => {
    expect(component.user).toBeDefined();
    expect(component.user.name).toBe('John Doe');
    expect(component.user.email).toBe('john.doe@example.com');
    expect(component.user.age).toBe(30);
  });
});
