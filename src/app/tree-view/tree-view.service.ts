import R from 'ramda';
import shortid from 'shortid';

export class TreeViewService {

  getData(){
    return [
      {
        id: shortid.generate(),
        name: 'DataSheet "Toto"',
        expanded: true,
        children: [
          { id: shortid.generate(), name: 'TestPlan Aging', type: 'test-plan', expanded: true, children: [] },
          { id: shortid.generate(), name: 'TestPlan Capacity', type: 'test-plan', expanded: true, children: [
            { id: shortid.generate(), name: 'Run 1', type: 'run', status: 'done' }, { id: shortid.generate(), name: 'Run 2', type: 'run', status: 'working' }
          ] },
          { id: shortid.generate(), name: 'TestPlan Stock', type: 'test-plan', expanded: true, children: [
            { id: shortid.generate(), name: 'Run 1', type: 'run', status: 'pause' }, { id: shortid.generate(), name: 'Run 2', type: 'run', status: 'todo' }
          ] },
        ]
      },
      {
        id: shortid.generate(),
        name: 'Benchmark "bubu"',
        expanded: true,
        children: [
          { id: shortid.generate(), name: 'TestPlan Aging', type: 'test-plan' },
          { id: shortid.generate(), name: 'TestPlan', type: 'test-plan', expanded: true, children: [
            { id: shortid.generate(), name: 'Run 1', status: 'done', type: 'run' }, { id: shortid.generate(), name: 'Run 2', type: 'run', status: 'done' }
          ] }
        ]
      }
    ]
  }

  getPathFromIds(ids, nodes = [], acc = []){
    if(acc.length === ids.length) return R.intersperse('children', acc);
    const currentId = ids[acc.length];
    const idx = R.findIndex(R.propEq('id', currentId), nodes);
    return this.getPathFromIds(ids, nodes[idx].children, acc.concat([idx]))
  }

  getIcon(node){
    const iconsFolderExpanded = {
      true: 'fa fa-folder-open',
      false: 'fa fa-folder'
    };

    if(node.data.type === 'test-plan') return 'fa fa-file-text';
    if(node.hasChildren)return iconsFolderExpanded[node.isExpanded];
    return 'fa fa-line-chart'
  }

  getStatusIcon(node){
    const icons = {
      todo: 'fa fa-play',
      working: 'fa fa-spinner fa-spin',
      done: 'fa fa-check',
      pause: 'fa fa-pause'
    }
    return icons[node.data.status] || ''
  }

}
