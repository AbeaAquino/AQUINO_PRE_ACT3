import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('fullName', 'Test Name');
    fixture.componentRef.setInput('location', 'Test City');
    fixture.componentRef.setInput('email', 'test@example.com');
    fixture.componentRef.setInput('phone', '0900 000 0000');
    fixture.componentRef.setInput('profile', ['First paragraph', 'Second paragraph']);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
