import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  @Input()  title: string;
  @Input()  subtitle: string;
  @Input()  description:string;
  constructor() { }

  ngOnInit() {
  }

}
