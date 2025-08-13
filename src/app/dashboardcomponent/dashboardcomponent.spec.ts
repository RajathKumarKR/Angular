import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardcomponent } from './dashboardcomponent';


fdescribe('Dashboardcomponent', () => {
  let component: Dashboardcomponent;
  let fixture: ComponentFixture<Dashboardcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboardcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update userData on user update', () => {
    const updatedUser = { name: 'Jane Doe', email: 'jane.doe@example.com', age: 25 };
    component.userData = { name: 'John Doe', email: 'john.doe@example.com', age: 20 };
    component.onUserUpdated(updatedUser);
    expect(component.userData).toEqual(updatedUser);
  });
}); 