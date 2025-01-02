import { TestBed } from '@angular/core/testing';

import { ClubService } from './club.service';
import { Club } from '../model/club';


describe('ClubService', () => {
  let service: ClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubService);
  });

    // getClub
  
     it('should return club with a specific id', (done) => {
       localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
       service.getClub(1).subscribe(club => {
         expect(club.cname).toBe('Real Madrid');
         done();
       });
     })
  
    // getClubs
  
     it('should return clubs', (done) => {
       localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
       service.getClubs().subscribe(club => {
        expect(club).toBeTruthy(); 
         done();
       });
     })
  
    // createClub
  
    it('should create a new club', (done) => {
      localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');  
      
      const newClub: Club = {
        id: 0,
        cname: 'Bruce',
        leagueid: 1,
        managerid: 1,
        stadiumid: 1,
        logo: '',
        managerFirstname: 'Test',
        managerLastname: 'Test',
        leagueLogo: 'test.svg'

      };
    
      service.createClub(newClub).subscribe(response => {
        expect(response).toBeNull();
        done();
      });
    });  
  
    // updateClub

    it('should create a new club', (done) => {
      localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');
    
      const updateClub: Club = {
        id: 61,
        cname: 'Bruce',
        leagueid: 1,
        managerid: 1,
        stadiumid: 1,
        logo: '',
        managerFirstname: 'Test',
        managerLastname: 'Test',
        leagueLogo: 'test.svg'
      };
    
      service.updateClub(updateClub).subscribe(response => {
        expect(response).toBeNull();
        done();
      });
    });
  
    
    // deleteClub
     it('should delete club with a specific id', (done) => {
       localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
       service.deleteClub(61).subscribe(club => {
         done();
       });
      
  });

});
