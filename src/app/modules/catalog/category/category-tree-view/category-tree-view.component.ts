import {Component, OnInit} from '@angular/core';
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-tree-view',
  templateUrl: './category-tree-view.component.html',
  styleUrls: ['./category-tree-view.component.scss']
})
export class CategoryTreeViewComponent implements OnInit {
  dataSource = new MatTreeNestedDataSource<treeNode>();
  treeControl = new NestedTreeControl<treeNode>(node => node.children);

  constructor(private categoryService: CategoryService) {
  }
  ngOnInit() {
    // this.dataSource.data = TREE_DATA;

    this.load();
  }


  hasChild = (_: number, node: treeNode) => !!node.children && node.children.length > 0;

  private load() {
    this.categoryService.loadCategoryTree().subscribe({
      next: (res: any) => {
        console.log(res);
        this.dataSource.data = res;
      }
    });
  }
}

interface treeNode {
  id?: number;
  name: string;
  children?: treeNode[];
}

// const TREE_DATA: treeNode[] = [
//   {
//     name: 'TECH',
//     children: [
//       {name: 'Company Maintenance'},
//       {
//         name: 'Employees',
//         children: [
//           {name: 'Reports'},
//           {name: 'Reports 2'},
//         ]
//       },
//       {name: 'Human Resources'},
//     ]
//   }, {
//     name: 'XRP',
//     children: [
//       {name: 'Company Maintenance'},
//       {
//         name: 'Employees',
//         children: [
//           {name: 'Reports'}
//         ]
//       },
//       {name: 'Human Resources'},
//     ]
//   },
// ];
