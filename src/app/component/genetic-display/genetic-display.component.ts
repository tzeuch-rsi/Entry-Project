import { Component, OnInit } from '@angular/core';
import { GeneticService } from 'src/app/service/genetic.service';
import { GeneticData } from 'src/app/interface/genetic-data';

@Component({
  selector: 'app-genetic-display',
  templateUrl: './genetic-display.component.html',
  styleUrls: ['./genetic-display.component.css']
})
export class GeneticDisplayComponent implements OnInit {

  data: GeneticData[] = [];

  getData(): void {
    this.geneticService.getData()
      .subscribe(data => this.data = data);
  }

  constructor(private geneticService: GeneticService) { }

  ngOnInit(): void {
    this.geneticService.getData()
      .subscribe(data => this.data = data);
  }

}
