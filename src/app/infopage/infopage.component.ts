import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

interface PlantComment {
  autor: string;
  title: string;
  comment: string;
}

interface PLANT {
  name?: string;
  img?: string;
  watering?: string;
  sun?: string;
  fertizalisng?: string;
  description?: string;
  comments?: PlantComment;
}

@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html',
  styleUrls: ['./infopage.component.css']
})
export class InfopageComponent implements OnInit {
  private Andrzejek: PLANT = {
    name: "Andrzejek",
    comments: {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id aliquet lectus. Donec fermentum mauris eu fermentum aliquet. Aenean gravida, felis quis semper volutpat, enim massa scelerisque lectus, ac dignissim lacus justo id velit. ',
      autor: 'Angela',
      title: 'Minions ipsum ti amooo'
    },
    sun: "sun, sun & sun",
    img: "/assets/flowers/Echeveria_Elegans_1_1200x1200.jpg",
    watering: "Watering and more watering",
    fertizalisng: 'Fertiliser',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id aliquet lectus. Donec fermentum mauris eu fermentum aliquet. Aenean gravida, felis quis semper volutpat, enim massa scelerisque lectus, ac dignissim lacus justo id velit.'
  };

  private Olaf: PLANT = {
    comments: {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id aliquet lectus. Donec fermentum mauris eu fermentum aliquet. Aenean gravida, felis quis semper volutpat, enim massa scelerisque lectus, ac dignissim lacus justo id velit. ',
      autor: 'Angela',
      title: 'Minions ipsum ti amooo'
    },
    name: 'Olaf',
    sun: "sun, sun & sun",
    img: "/assets/flowers/echeveria-agavoides-lipstick-.jpg",
    watering: "Watering and more watering",
    fertizalisng: 'Fertiliser',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id aliquet lectus. Donec fermentum mauris eu fermentum aliquet. Aenean gravida, felis quis semper volutpat, enim massa scelerisque lectus, ac dignissim lacus justo id velit.'
  };
  public plant: PLANT = this.Andrzejek;
  private productName: string;


  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.activeRoute.snapshot.paramMap.get('product')) {
      debugger;
      this.activeRoute.url.subscribe(res => {
        this.productName = this.activeRoute.snapshot.paramMap.get('product');
        debugger;
        if (this.productName === 'Andrzejek') {
          this.plant = this.Andrzejek;
        }
        if (this.productName === 'Olaf') {
          this.plant = this.Olaf;
        }
        console.log(this.plant, "this.productName");
      });
    }
  }

}
