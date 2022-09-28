import { Injectable } from '@nestjs/common';
import { Todo } from '@azure-poc/todos';

@Injectable()
export class AppService {
  getData(): Todo[] {
    return [
      { message: 'Is Kubernetes still awesome?', done: true },
      { message: 'Will we ever want to go back to Heroku?', done: false },
      { message: 'An update?', done: false },
      { message: 'Did the PR deploy 4?', done: true },
    ];
  }
}
