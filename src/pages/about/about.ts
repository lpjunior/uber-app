import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  slides = [
    {
      title: "Uber Black",
      description: "O <strong>UberBLACK</strong> oferece uma viagem premium com um motorista profissional. Vá de UberBLACK quando quiser impressionar.",
      image: "assets/svg/uberBlack.svg",
    },
    {
      title: "Uber X",
      description: "O <strong>uberX</strong> é a <b>modalidade</b> de viagens mais popular da Uber. Solicite uma viagem para chegar ao aeroporto, ao trabalho, a sua casa ou a qualquer outro lugar que quiser.",
      image: "assets/svg/uberX.svg",
    },
    {
      title: "Uber Pool",
      description: "Conheça o <strong>Uber Juntos</strong>, uma nova opção que pode custar até 35% menos que o UberX. Você dá alguns passos e tem uma grande economia.",
      image: "assets/svg/uberPool.svg",
    }
    ,
    {
      title: "Uber Eats",
      description: "Com o <strong>Uber Eats</strong>, entregadores parceiros se cadastram e, após serem ativados, começam a receber chamadas de restaurantes e a conectar pessoas às suas comidas favoritas.",
      image: "assets/svg/uberEats.svg",
    }
  ];
  
  constructor(public navCtrl: NavController) {

  }

}
