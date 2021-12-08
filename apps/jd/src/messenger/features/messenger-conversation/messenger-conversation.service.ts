import { Injectable } from '@angular/core';
import { Conversation } from '@xprjs/messenger-data';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//
// export class MessagesData extends DataSource<any> {
//   private cache = [];
//
//   connect(collectionViewer: CollectionViewer): Observable<any[]> {
//     return undefined;
//   }
//
//   disconnect(collectionViewer: CollectionViewer) {
//   }
// }

@Injectable({
  providedIn: 'root',
})
export class MessengerConversationService {
  constructor(public readonly http: HttpClient) {}

  fetch() {
    return this.http.get<Conversation>('/assets/sample-data.json').pipe(
      map((c) => {
        c.messages = (c.messages || []).map((m, idx) => ({
          ...m,
          content: 'msg ' + idx,
        }));
        return c;
      })
    );
  }
}
