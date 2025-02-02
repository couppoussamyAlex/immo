import { Component } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-buy-page',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    PropertyCardComponent],
  templateUrl: './buy-page.component.html',
  styleUrl: './buy-page.component.scss'
})
export class BuyPageComponent {
  selectedReasons: string[] = ['Appartement', 'Maison', "Villa"];
  cityToSearch: string = '';
  postalCode: string = '';

  city = 'Paris';
  type = 'Bureaux';
  surface = 300;
  tenant = 'Confidentiel';
  walb = 6;
  submissionDate = '30/06/2025';
  accessFile = 'Signature NDA';

  submitForm(): void {
    alert('searching...');
  }
}
