import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SliderComponent {
  sliderData = [
    "assets/images/D2ROMCUEIV.jpg",
    "assets/images/HZZKGVVJ6I.jpg",
    "assets/images/PU9HHZB5QW.jpg"
  ];
  index = 0;
  interval: any;
  next() {
    if (this.index >= this.sliderData.length - 1) return;
    this.index++;
  }
  prev() {
    if (this.index <= 0) return;
    this.index--;
  }
  getIndex(index: number) {
    this.index = index;
  }
  slide() {
    this.interval = setInterval(() => {
      this.index++;
      if (this.index > this.sliderData.length - 1) this.index = 0;
    }, 1000);
  }
  stopSlide() {
    clearInterval(this.interval);
  }
}

