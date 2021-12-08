import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ConversationItem {
  id: string;
  label: string;
  icon: string;
}

export const CACHE_KEY = 'MessengerShellService';

const generateConversations = () => {
  const c: ConversationItem[] = [];
  for (let i = 0; i < 100; ++i) {
    c.push({
      id: '' + i,
      label: 'item ' + i,
      icon: 'face',
    });
  }
  return c;
};

@Injectable({ providedIn: 'root' })
export class MessengerShellService {
  /**
   * State
   */
  conversations$ = new BehaviorSubject<ConversationItem[]>([]);

  /**
   * Actions
   */
  load() {
    // fetch from local storage
    const cache = localStorage.getItem(CACHE_KEY);
    if (cache) {
      // notify cached (update state)
      const cached = JSON.parse(cache);
      this.conversations$.next(cached);
    }
    // fetch from network
    // todo if there is cache, send request with last update to get only diff
    const remote = generateConversations();
    if (remote) {
      // todo here should come update strategy
      // notify remote (update state)
      this.conversations$.next(remote);
      // save cache
      localStorage.setItem(CACHE_KEY, JSON.stringify(remote));
    }
  }
}
