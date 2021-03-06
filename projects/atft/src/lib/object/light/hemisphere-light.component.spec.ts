import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {HemisphereLightComponent} from './hemisphere-light.component';
import {StatsService} from '../../stats';

describe('light', () => {
  describe('HemisphereLightComponent', () => {
    let component: HemisphereLightComponent;
    let fixture: ComponentFixture<HemisphereLightComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          HemisphereLightComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(HemisphereLightComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('init', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
