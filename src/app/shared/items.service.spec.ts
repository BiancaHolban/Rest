/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { ItemsService } from './items.service';

const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

describe('Service: Items', () => {
  let http: HttpStub;
  let itemsService: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemsService,
        {provide: HttpClient, useClass: HttpStub}
      ]
    });
  });

  beforeEach(inject([HttpClient, ItemsService], (h: HttpStub, i: ItemsService) => {
    http = h;
    itemsService = i;
  }));

  it('#all should retrieve all items', () => {
    const spy = spyOn(http, 'get').and.callThrough();

    const expectedResponse = [{
      id: 1,
      student_name: "Lee Min Ho",
      nr_abs: 2,
      marks: {
            "math": 10,
            "info": 9,
            "chemistry":8
        }
        }
    }];

    http.setExpectedResponse(expectedResponse);

    itemsService.load(expectedResponse)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.get).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain('/items');
      });
  });

  it('#load should get one item', () => {
    const spy = spyOn(http, 'get').and.callThrough();

    const expectedResponse = {
      id: 1,
      student_name: "Lee Min Ho",
      nr_abs: 2,
      marks: {
            "math": 10,
            "info": 9,
            "chemistry":8
        }
    };

    http.setExpectedResponse(expectedResponse);

    itemsService.load(expectedResponse.id)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.get).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain(`/items/${expectedResponse.id}`);
      });
  });

  it('#create should `POST` a new item', () => {
    const spy = spyOn(http, 'post').and.callThrough();

    const expectedResponse = {
      id: 1,
      student_name: "Lee Min Ho",
      nr_abs: 2,
      marks: {
            "math": 10,
            "info": 9,
            "chemistry":8
        }
    };

    http.setExpectedResponse(expectedResponse);

    itemsService.create(expectedResponse)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.post).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain(`/items`);
        expect(spy.calls.mostRecent().args[1]).toEqual(JSON.stringify(expectedResponse));
        expect(spy.calls.mostRecent().args[2]).toEqual(HEADER);
      });
  });

  it('#update should `PUT` and existing item', () => {
    const spy = spyOn(http, 'patch').and.callThrough();

    const expectedResponse = {
      id: 1,
      student_name: "Lee Min Ho",
      nr_abs: 2,
      marks: {
            "math": 10,
            "info": 9,
            "chemistry":8
        }
    };

    http.setExpectedResponse(expectedResponse);

    itemsService.update(expectedResponse)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.patch).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain(`/items/8`);
        expect(spy.calls.mostRecent().args[1]).toEqual(JSON.stringify(expectedResponse));
        expect(spy.calls.mostRecent().args[2]).toEqual(HEADER);
      });
  });

  it('#delete should `DELETE` an item', () => {
    const spy = spyOn(http, 'delete').and.callThrough();

    const expectedResponse = {
      id: 1,
      student_name: "Lee Min Ho",
      nr_abs: 2,
      marks: {
            "math": 10,
            "info": 9,
            "chemistry":8
        }
    };

    http.setExpectedResponse(expectedResponse);

    itemsService.delete(expectedResponse)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.delete).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain(`/items/8`);
      });
  });

  it('#search should...', () => {
    const spy = spyOn(http, 'get').and.callThrough();

    const expectedResponse = [{
      id: 1,
      student_name: "Lee Min Ho",
      nr_abs: 2,
      marks: {
            "math": 10,
            "info": 9,
            "chemistry":8
        }
    }];

    http.setExpectedResponse(expectedResponse);

    itemsService.search('First item')
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.get).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain('/items');
        expect(spy.calls.mostRecent().args[1]).toContain('/items');
        expect(spy.calls.mostRecent().args[2]).toContain('/items');
        expect(spy.calls.mostRecent().args[3]).toContain('/items');
      });
  });
});
