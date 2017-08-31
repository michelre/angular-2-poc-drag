import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import TaskChoice from '../model/task-choice';
import Choice from '../model/choice';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragAndDropComponent implements OnInit {

  taskChoices: Array<TaskChoice> = [];
  selectedTasks: Array<Choice> = [];

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('first-bag', {
      copy: (el, source) => source.dataset.copy === 'true',
      accepts: (el, target, source, sibling) => target.dataset.droppable === "true",
    });

  }

  ngOnInit() {
    this.taskChoices = [
      {
        id: 1,
        name: 'BCS-805 Aux temp',
        children: [
          { id: 'cc', name: 'CC', limits: 't > 10 s -> Next Seq.', record: 't = 0.1s', ranges: 'I : 10mA' },
          { id: 'cv', name: 'CV', limits: 't > 10 s -> Next Seq.', record: 't = 0.1s', ranges: 'I : 10mA' },
          { id: 'peis', name: 'PEIS', limits: 't > 10 s -> Next Seq.', record: 't = 0.1s', ranges: 'I : 10mA' },
          { id: 'geis', name: 'GEIS', limits: 't > 10 s -> Next Seq.', record: 't = 0.1s', ranges: 'I : 10mA' },
          { id: 'charge', name: 'Charge', limits: 't > 10 s -> Next Seq.', record: 't = 0.1s', ranges: 'I : 10mA' },
        ],
      },
      {
        id: 2,
        name: 'Clim Chamber',
        children: [
          { id: 'temperature', name: 'Set temperature', limits: 't > 10 s -> Next Seq.', record: '', ranges: 'I : 10mA' },
        ],
      },
      {
        id: 3,
        name: 'Logic Object',
        children: [
          { id: 'calculator', name: 'Calculate', limits: '', record: '', ranges: 'I : 10mA' },
          { id: 'cycle', name: 'Cycle', limits: '', record: '', ranges: 'I : 10mA' },
        ],
      }
    ]

    this.selectedTasks = this.selectedTasks.concat(this.taskChoices[0].children[0]);

  }

  onDblClickAction(sample){
    this.selectedTasks = this.selectedTasks.concat(sample);
  }

}
