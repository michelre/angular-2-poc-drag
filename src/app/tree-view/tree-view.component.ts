import { Component, OnInit, ViewChild } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions, TreeComponent } from 'angular-tree-component';
import { TreeViewService } from './tree-view.service';
import S from 'string';
import shortid from 'shortid';
import R from 'ramda';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  providers: [TreeViewService]
})
export class TreeViewComponent implements OnInit {

  nodes: any = [];
  options: ITreeOptions = {
    isExpandedField: 'expanded'
  }
  filters: any = {
    name: '',
    status: '',
  }
  editables : any = {};

  @ViewChild(TreeComponent)
  private tree: TreeComponent;

  @ViewChild('nodeFocus') vc: any;

  constructor(private service: TreeViewService) { }

  ngOnInit() {
    this.nodes = this.service.getData();
  }


  filterByName(value, treeModel) {
    this.filters = R.merge(this.filters, { name: S(value).slugify() })
    this.filterNodes(treeModel);
  }

  filterByStatus(status, treeModel) {
    this.filters = R.merge(this.filters, { status })
    this.filterNodes(treeModel);
  }

  filterNodes(treeModel){
    const { name, status } = this.filters;
    treeModel.filterNodes((node) => {
      if(status === '') return S(node.data.name).slugify().contains(name);
      return S(node.data.name).slugify().contains(name) && node.data.status === status;
    });
  }

  addNode(node){
    if(!node.data.type){
      node.data.children.push({ id: shortid.generate(), name: 'TestPlan TEST', type: 'test-plan', children: [], expanded: true });
    }
    if(node.data.type === 'test-plan'){
      node.data.children.push({ id: shortid.generate(), name: 'Run TEST', type: 'run', children: [], status: 'todo' });
    }
    this.tree.treeModel.update();
  }

  clickNodeAction(node){
    this.editables = R.merge(this.editables, { [node.data.id]: true });
  }

  keypressAction(node, event){
    if(event.keyCode === 13) {
      this.editables = R.merge(this.editables, { [node.data.id]: false });
      let path = this.service.getPathFromIds(node.path, this.nodes);
      path = path.concat('name')
      this.nodes = R.set(R.lensPath(path), event.target.value, this.nodes);
    }
  }

  focusOutAction(node){
    this.editables = R.merge(this.editables, { [node.data.id]: false });
  }

}
