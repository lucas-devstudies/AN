import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomImageTeacher } from './custom-image-teacher';

describe('CustomImageTeacher', () => {
  let component: CustomImageTeacher;
  let fixture: ComponentFixture<CustomImageTeacher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomImageTeacher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomImageTeacher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
