import Choice from './choice';

export default class TaskChoice {
  id: Number;
  name: String;
  children: Array<Choice> = [];
}
