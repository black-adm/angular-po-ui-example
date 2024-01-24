import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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
}
