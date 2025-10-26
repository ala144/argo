import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatUpdateDialogComponent } from './plat-update-dialog.component';

describe('PlatUpdateDialogComponent', () => {
  let component: PlatUpdateDialogComponent;
  let fixture: ComponentFixture<PlatUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatUpdateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
