import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridList,
    MatGridTile],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent implements OnInit {
  @Input() city!: string;
  @Input() type!: string;
  @Input() surface!: number;
  @Input() tenant!: string;
  @Input() walb!: number;
  @Input() submissionDate!: string;
  @Input() accessFile!: string;

  ngOnInit(): void {
    console.log(this.city)
  }
}
