import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommunicationComponent } from './create-communication.component';

describe('CreateCommunicationComponent', () => {
  let component: CreateCommunicationComponent;
  let fixture: ComponentFixture<CreateCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCommunicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
