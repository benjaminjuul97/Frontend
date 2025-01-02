import { TestBed } from '@angular/core/testing';

import { ManagerService } from './manager.service';
import { Manager } from '../model/manager';


describe('ManagerService', () => {
  let service: ManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerService);
  });

          // getManager
        
           it('should return manager with a specific id', (done) => {
             localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
             service.getManager(1).subscribe(manager => {
               expect(manager.firstname).toBe('Carlo');
               done();
             });
           })
        
          // getManagers
        
           it('should return managers', (done) => {
             localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
             service.getManagers().subscribe(manager => {
              expect(manager).toBeTruthy(); 
               done();
             });
           })
        
          // createManager
        
          it('should create a new manager', (done) => {
            localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');  
            
            const newManager: Manager = {
              id: 0,
              firstname: 'Mr',
              lastname: 'Coach',
              countryid: 1,
              clubid: 1,
              image: 'jupiler-pro-manager.svg',
              dob: new Date('2025-01-01'),
              flag: '',
              logo: ''
            };
          
            service.createManager(newManager).subscribe(response => {
              expect(response).toBeNull();
              done();
            });
          });  
        
          // updateManager
      
          it('should create a new manager', (done) => {
            localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');
          
            const updateManager: Manager = {
              id: 18,
              firstname: 'Mr',
              lastname: 'Coach',
              countryid: 8,
              clubid: 1,
              image: '',
              dob: new Date('2025-01-01'),
              flag: '',
              logo: ''
            };
          
            service.updateManager(updateManager).subscribe(response => {
              expect(response).toBeNull();
              done();
            });
          });
        
          
          // deleteManager
          
           it('should delete manager with a specific id', (done) => {
             localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
             service.deleteManager(14).subscribe(manager => {
               done();
             });
            
        });
});
