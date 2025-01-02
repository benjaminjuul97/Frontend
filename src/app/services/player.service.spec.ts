import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { provideHttpClient } from '@angular/common/http';
import { Player } from '../model/player';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(PlayerService);
  });

  // getPlayer

   it('should return player with a specific id', (done) => {
     localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
     service.getPlayer(40).subscribe(player => {
       expect(player.firstname).toBe('John');
       done();
     });
   })

  // getPlayers

   it('should return players', (done) => {
     localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
     service.getPlayers().subscribe(player => {
      expect(player).toBeTruthy(); 
       done();
     });
   })

  // createPlayer

  it('should create a new player', (done) => {
    localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');  
    
    const newPlayer: Player = {
      id: 0,
      firstname: 'Bruce',
      lastname: 'Wayne',
      pposition: 'Midfielder',
      clubid: 1,
      countryid: 1,
      image: 'player.jpg',
      dob: new Date('2000-01-01'),
      flag: '',
      logo: '',
    };
  
    service.createPlayer(newPlayer).subscribe(response => {
      expect(response).toBeNull();
      done();
    });
  });  

  // updatePlayer
  it('should create a new player', (done) => {
    localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');
  
    const updatePlayer: Player = {
      id: 47,
      firstname: 'Benjamin',
      lastname: 'Juuls',
      pposition: 'Midfielder',
      clubid: 1,
      countryid: 1,
      image: 'player.jpg',
      dob: new Date('2000-01-01'),
      flag: '',
      logo: '',
    };
  
    service.updatePlayer(updatePlayer).subscribe(response => {
      expect(response).toBeNull();
      done();
    });
  });

  
  // deletePlayer
   it('should delete with a specific id', (done) => {
     localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
     service.deletePlayer(34).subscribe(player => {
       done();
     });
    
});

});