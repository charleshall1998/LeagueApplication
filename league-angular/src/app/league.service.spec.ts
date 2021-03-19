import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LeagueService } from './league.service';

describe('LeagueService', () => {
  let service: LeagueService;
  let http: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    http = jasmine.createSpyObj("HttpClient", ["get"]);
    service = new LeagueService(http as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
