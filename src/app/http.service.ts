import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Headers} from '@angular/http';


/*
    HTTPSERVICE API - This API can be used to connet to backend from Angular Application. It contains Http GET & POST Methods
                      This API uses the Http & HttpClient packages from the NPM Library.
    
    Requirements: The developer has to initialize a constructor for the class and can use the defined methods to send a 
                  post request to the server and await for response.

    cpost_api(url, body, resType):  This method uses the HttpClient's POST method to send the data. It needs three params namely,
                                    Url - the URL of the PHP file to connect to.
                                    body - The data that needs to be passed to the server.
                                    resType: The content type of the response that the user is expecting(It should be a string).

    post_api(url, body, header):  This method uses the Http's POST method to send the data. It needs three params namely,
                                    Url - the URL of the PHP file to connect to.
                                    body - The data that needs to be passed to the server.
                                    header - It is the object of the Header from the Http package.


*/

@Injectable()
export class HttpService {

  constructor(private http: Http, private httpClient: HttpClient) {}

  cpost_api(url, body, resType) {
    return this.httpClient.post(url, body, {responseType: resType});
  }

  post_api(url, body, header) {
    return this.http.post(url, body, {headers : header});
  }
}
