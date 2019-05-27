import {
  Dashboard, Group, Computer, ShoppingCart, AllInbox, AttachMoney, ShowChart, Security,
  Visibility, Settings, Build, Autorenew, LibraryBooks, Receipt, AddCircle, Store, Fastfood
} from '@material-ui/icons';
import HomePage from '../pages/Home';
import UsuarioListPage from '../pages/Usuario/List';

const Routes = [
  {
    name: 'Dashboard',
    icon: Dashboard,
    component: HomePage,
  },
  {
    name: 'Sistema',
    icon: Computer,
    component: HomePage,
    subItems: [{
      name: 'Segurança',
      icon: Security,
      component: HomePage,
      margin: '30px',
      subItems: [{
        path: '/users',
        name: 'Usuários',
        icon: Group,
        margin: '50px',
        component: UsuarioListPage,
      }, {
        path: '/home',
        name: 'Acessos',
        icon: Visibility,
        margin: '50px',
        component: UsuarioListPage,
      }]
    },
    {
      name: 'Configurações',
      icon: Settings,
      component: Settings,
      margin: '30px',
      subItems: [{
        path: '/users',
        name: 'Parâmetros',
        icon: Build,
        margin: '50px',
        component: UsuarioListPage,
      }]
    }]
  },
  {
    name: 'Compras',
    icon: ShoppingCart,
    component: HomePage,
    subItems: [{
      name: 'Movimentos',
      icon: Autorenew,
      component: HomePage,
      margin: '30px',
      subItems: [{
        path: '/users',
        name: 'Pedidos',
        icon: LibraryBooks,
        margin: '50px',
        component: UsuarioListPage,
      }, {
        path: '/users',
        name: 'Entrada',
        icon: Receipt,
        margin: '50px',
        component: UsuarioListPage,
      }]
    },
    {
      name: 'Relatórios',
      icon: Settings,
      component: Settings,
      margin: '30px',
      subItems: [{
        path: '/users',
        name: 'Relatório 1',
        icon: Build,
        margin: '50px',
        component: UsuarioListPage,
      }]
    }]
  },
  {
    name: 'Estoque',
    icon: AllInbox,
    component: HomePage,
    subItems: [{
      name: 'Cadastros',
      icon: AddCircle,
      component: HomePage,
      margin: '30px',
      subItems: [{
        path: '/users',
        name: 'Depósitos',
        icon: Store,
        margin: '50px',
        component: UsuarioListPage,
      }, {
        path: '/users',
        name: 'Produtos',
        icon: Fastfood,
        margin: '50px',
        component: UsuarioListPage,
      }]
    },
    {
      name: 'Relatórios',
      icon: Settings,
      component: Settings,
      margin: '30px',
      subItems: [{
        path: '/users',
        name: 'Relatório 1',
        icon: Build,
        margin: '50px',
        component: UsuarioListPage,
      }]
    }]
  },
  {
    name: 'Financeiro',
    icon: AttachMoney,
    component: HomePage,
  },
  {
    name: 'Faturamento',
    icon: ShowChart,
    component: HomePage,
  },
];

export default Routes;