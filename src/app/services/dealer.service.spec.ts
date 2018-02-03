import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DealerService } from './dealer.service';
import { AppConfigModule } from '../config';
import { IDealer } from '../models';


describe('DealerService', () => {

  let service: DealerService;
  let httpMock: HttpTestingController;
  const dealers: IDealer[] = [
    {
      id: '56f0175f-0058-46c3-97d7-40eb42cbcf71',
      country_code: 'RS',
      type: '1',
      name: 'SINGLE COFFEE & TEA DOO',
      native_name: '',
      phone: '3.81607E+11',
      fax: '',
      email: 'office@shangritea.com',
      street_address: 'Adrani 36\nKraljevo\nSERBIA',
      native_street_address: '',
      website: 'www.mojasoljica.com',
      registration_uri: '/registration'
    },
    {
      id: '56f0175f-16e8-40c6-8c71-40eb42cbcf71',
      country_code: 'HR',
      type: '0',
      name: 'Bio kuća d.o.o',
      native_name: '',
      phone: '00385 01 6399070',
      fax: '00385 01 6399071',
      email: 'biokuca@gmail.com',
      street_address: 'Masarykova 26/1',
      native_street_address: '',
      website: 'www.biokuca.com.hr',
      registration_uri: '/registration'
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppConfigModule,
      ],
      providers: [DealerService]
    });

    service = TestBed.get(DealerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get residential dealers', (done) => {
    service.getAll$()
      .subscribe(res => {
        expect(res).toEqual(dealers.splice(0,1));
        done();
      });

    const request = httpMock.expectOne('https://s3-us-west-1.amazonaws.com/data.blendtec.com/international-dealers.json');
    request.flush(dealers);


    httpMock.verify();
  });
});


