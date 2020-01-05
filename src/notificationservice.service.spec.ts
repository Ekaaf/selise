import { TestBed } from '@angular/core/testing';

import { NotificationserviceService } from './notificationservice.service';

describe('NotificationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationserviceService = TestBed.get(NotificationserviceService);
    expect(service).toBeTruthy();
  });
});
