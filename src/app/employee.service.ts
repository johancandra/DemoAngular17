import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  constructor(private messageService: MessageService) { }

  getEmployees(): Observable<Employee[]> {
    const employees = of(EMPLOYEES);
    this.messageService.add('EmployeeService: fetched employees');
    return employees;
  }

  getEmployee(username: string): Observable<Employee> {
    const employee = EMPLOYEES.find(h => h.username === username)!;
    this.messageService.add(`EmployeeService: fetched employee username=${username}`);
    return of(employee);
  }
}
