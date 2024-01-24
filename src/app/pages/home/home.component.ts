import { Component } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType, PoDialogService, PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [PoDialogService]
})
export class HomeComponent {
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  evolutionOfCoffeeAndSomeCompetitorsType: PoChartType = PoChartType.Column;
  coffeConsumingChartType: PoChartType = PoChartType.Donut;
  consumptionPerCapitaType: PoChartType = PoChartType.Bar;

  chartAreaCategories: Array<string> = ['Jan-20', 'Jul-20', 'Jan-21', 'Jul-21', 'Jan-22', 'Jul-22', 'Jan-23'];

  chartAreaSeries: Array<PoChartSerie> = [
    {
      label: 'Madeira Madeira',
      data: [550, 497, 532, 550, 530, 565, 572],
      type: PoChartType.Area,
      color: 'po-color-07'
    },
    {
      label: 'Shopify',
      data: [420, 511, 493, 525, 522, 510, 567],
      type: PoChartType.Area,
      color: 'green'
    },
    {
      label: 'Mercado Livre',
      data: [312, 542, 497, 610, 542, 661, 674],
      type: PoChartType.Area,
      color: 'yellow'
    },
    {
      label: 'Estátisticas',
      data: [550, 612, 525, 373, 342, 297, 282],
      type: PoChartType.Line,
      color: 'blue'
    }
  ];

  items: Array<any> = [
    {
      Ranking: '1',
      Empresa: 'BrasilMadeira',
      Localização: 'Salvador, Bahia',
      Compras: '77'
    },
    {
      Ranking: '2',
      Empresa: 'Minas Esquadrias',
      Localização: 'Extrema, Minas-Gerais',
      Compras: '51'
    },
    {
      Ranking: '3',
      Empresa: 'CMC Portas e Esquadrias',
      Localização: 'Guarulhos, São Paulo',
      Compras: '39'
    },
    {
      Ranking: '4',
      Empresa: 'Irmãos Luz',
      Localização: 'Guarulhos, São Paulo',
      Compras: '33'
    },
    {
      Ranking: '5',
      Empresa: 'Sodimax Construções',
      Localização: 'Florianópolis, Santa Catarina',
      Compras: '24'
    },
    {
      Ranking: '6',
      Empresa: 'Graziele Casa Planejada',
      Localização: 'Fortaleza, Ceará',
      Compras: '16'
    },
    {
      Ranking: '7',
      Empresa: 'Jamil Portas Indaiatuba',
      Localização: 'Indaiatuba, São Paulo',
      Compras: '9'
    },
  ];

  consumptionPerCapitaOptions: PoChartOptions = {
    axis: {
      maxRange: 100,
      gridLines: 2
    }
  };

  chartAreaOptions: PoChartOptions = {
    axis: {
      maxRange: 700,
      gridLines: 8
    }
  };

  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7
    }
  };

  constructor(private poAlert: PoDialogService) { }

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Inicio',
      shortLabel: 'Inicio',
      icon: 'po-icon-home',
    },
    {
      label: 'Usuários',
      shortLabel: 'Usuários',
      icon: 'po-icon-user',
    },
    {
      label: 'Empresas',
      shortLabel: 'Empresas',
      icon: 'po-icon-company',
    },
    {
      label: 'Fornecedores',
      shortLabel: 'Fornecedores',
      icon: 'po-icon-waiter',
      subItems: [
        {
          label: 'Jamil Portas e Esquadrias',
          icon: 'po-icon-handshake',
        },
        {
          label: 'CMC Portas de alumínio',
          icon: 'po-icon-handshake',
        },
      ]
    },
    {
      label: 'Vendas',
      shortLabel: 'Vendas',
      icon: 'po-icon-payment',
      subItems: [
        {
          label: 'Finalizadas',
          icon: 'po-icon-finance',
        },
        {
          label: 'Pendentes',
          icon: 'po-icon-clock',
        },
        {
          label: 'Rejeitadas',
          icon: 'po-icon-exclamation',
        }
      ]
    },
  ]

  searchMore(event: any) {
    window.open(`http://google.com/search?q=coffee+producing+${event.label}`, '_blank');
  }

  showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: `${event.label} consuming ${event.data}kg per capita!`,
      ok: () => { }
    });
  }
}
