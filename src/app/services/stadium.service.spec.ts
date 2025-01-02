import { TestBed } from '@angular/core/testing';
import { StadiumService } from './stadium.service';
import { Stadium } from '../model/stadium';

describe('StadiumService', () => {
  let service: StadiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StadiumService);
  });

      // getStadium
    
        it('should return stadium with a specific id', (done) => {
          localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
          service.getStadium(6).subscribe(manager => {
            expect(manager.sname).toBe('Santiago Bernabeu');
            done();
          });
        })
    
      // getStadiums
    
        it('should return stadiums', (done) => {
          localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
          service.getStadiums().subscribe(stadium => {
          expect(stadium).toBeTruthy(); 
            done();
          });
        })
    
      // createStadium
    
      it('should create a new stadium', (done) => {
        localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');  
        
        const newStadium: Stadium = {
          id: 0,
          sname: 'New',
          slocation: 'Stadium',
          capacity: 10000,
          clubid: 5,
          image: 'new-stadium.png',
          logo: ''
        };
      
        service.createStadium(newStadium).subscribe(response => {
          expect(response).toBeNull();
          done();
        });
      });  
    
      // updateStadium
  
      it('should create a new stadium', (done) => {
        localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');
      
        const newStadium: Stadium = {
          id: 17,
          sname: 'New',
          slocation: 'Stadium123',
          capacity: 10000,
          clubid: 5,
          image: 'new-stadium.png',
          logo: ''

        };
      
        service.updateStadium(newStadium).subscribe(response => {
          expect(response).toBeNull();
          done();
        });
      });
    
      
      // deleteStadium
      
        it('should delete stadium with a specific id', (done) => {
          localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
          service.deleteStadium(17).subscribe(stadium => {
            done();
          });
        
    });
});
