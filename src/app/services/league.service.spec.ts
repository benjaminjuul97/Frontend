import { TestBed } from '@angular/core/testing';
import { LeagueService } from './league.service';
import { League } from '../model/league';


describe('LeagueService', () => {
  let service: LeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagueService);
  });

        // getLeague
      
         it('should return league with a specific id', (done) => {
           localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
           service.getLeague(1).subscribe(league => {
             expect(league.lname).toBe('Saudi League');
             done();
           });
         })
      
        // getLeagues
      
         it('should return leagues', (done) => {
           localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
           service.getLeagues().subscribe(league => {
            expect(league).toBeTruthy(); 
             done();
           });
         })
      
        // createLeague
      
        it('should create a new league', (done) => {
          localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');  
          
          const newLeague: League = {
            id: 0,
            lname: 'Jupiler Pro League',
            countryid: 1,
            logo: 'jupiler-pro-league.svg',
            flag: 'belgium.svg'
          };
        
          service.createLeague(newLeague).subscribe(response => {
            expect(response).toBeNull();
            done();
          });
        });  
      
        // updateLeague
    
        it('should create a new league', (done) => {
          localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');
        
          const updateLeague: League = {
            id: 14,
            lname: 'Ukraine Premier League',
            countryid: 17,
            logo: 'ukraine-premier-league.svg',
            flag: 'ukraine.svg'
          };
        
          service.updateLeague(updateLeague).subscribe(response => {
            expect(response).toBeNull();
            done();
          });
        });
      
        
        // deleteCountry
        
         it('should delete league with a specific id', (done) => {
           localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
           service.deleteLeague(14).subscribe(league => {
             done();
           });
          
      });
});
