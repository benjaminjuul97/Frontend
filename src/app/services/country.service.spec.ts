import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';
import { Country } from '../model/country';


describe('CountryService', () => {
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryService);
  });

      // getCountry
    
       it('should return country with a specific id', (done) => {
         localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
         service.getCountry(1).subscribe(country => {
           expect(country.cname).toBe('Saudi Arabia');
           done();
         });
       })
    
      // getCountries
    
       it('should return countries', (done) => {
         localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
         service.getCountries().subscribe(country => {
          expect(country).toBeTruthy(); 
           done();
         });
       })
    
      // createCountry
    
      it('should create a new country', (done) => {
        localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');  
        
        const newCountry: Country = {
          id: 0,
          cname: 'Colombia',
          flag: 'colombia.svg'
        };
      
        service.createCountry(newCountry).subscribe(response => {
          expect(response).toBeNull();
          done();
        });
      });  
    
      // updateCountry
  
      it('should create a new country', (done) => {
        localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');
      
        const updateCountry: Country = {
          id: 1,
          cname: 'Qatar',
          flag: 'qatar.svg',
        };
      
        service.updateCountry(updateCountry).subscribe(response => {
          expect(response).toBeNull();
          done();
        });
      });
    
      
      // deleteCountry

       it('should delete country with a specific id', (done) => {
         localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
         service.deleteCountry(18).subscribe(country => {
           done();
         });
        
    });
});
