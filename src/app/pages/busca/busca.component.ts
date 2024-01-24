import { Component, OnInit } from '@angular/core';
import { PassagensService } from '../../core/services/passagens.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  [x: string]: any;
  constructor(private passagensService: PassagensService) {}
  ngOnInit(): void {
    const buscaPadrao = {
      data: new Date().toISOString,
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: "Executiva"
    }

    this.passagensService.getPassagens(buscaPadrao).subscribe((res: any) => console.log(res)
    )
  }

}
