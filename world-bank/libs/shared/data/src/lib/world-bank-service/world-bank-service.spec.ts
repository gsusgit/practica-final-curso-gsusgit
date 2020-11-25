import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WorldBankService } from './world-bank-service';
import { Observable } from 'rxjs';

describe('GIVEN: a WorldBankService', () => {
  describe('WHEN: the DataModule is compiled', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
    });

    it('THEN: should be created', () => {
      const service: WorldBankService = TestBed.get(WorldBankService);
      expect(service).toBeTruthy();
    });

    it(`THEN: should return an observable when call 'getGrettings()'`, () => {
      const service: WorldBankService = TestBed.get(WorldBankService);
      const regiones$: Observable<any> = service.obtenerRegionesContinentales$();
      expect(regiones$).toBeInstanceOf(Observable);
    });

  });
});
