import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsqlComponent } from './testsql.component';

describe('TestsqlComponent', () => {
  let component: TestsqlComponent;
  let fixture: ComponentFixture<TestsqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
