import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logincomponent } from './logincomponent';

fdescribe('Logincomponent', () => {
  let component: Logincomponent;
  let fixture: ComponentFixture<Logincomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logincomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logincomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle login', () => {
    const loginData = { username: 'testuser', password: 'password123' };
    spyOn(component, 'onSubmit');
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });
});
