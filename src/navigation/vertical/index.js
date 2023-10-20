import {
  Login,
  Table,
  CubeOutline,
  HomeOutline,
  AccountCircle,
  CashRemove,
  FormatLetterCase,
  AccountCogOutline,
  CreditCardOutline,
  AccountPlusOutline,
  AlertCircleOutline,
  GoogleCirclesExtended
} from 'mdi-material-ui'

const navigation = () => {
  return [
    {
      sectionTitle: 'Danh sách'
    },
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Nhân viên',
      icon: AccountCircle,
      path: '/nhan-vien'
    },
    {
      title: 'Nợ xấu',
      icon: CashRemove,
      path: '/no-xau'
    },
    {
      sectionTitle: 'Yêu cầu'
    },
    {
      title: 'Tờ trình miễn giảm',
      icon: AccountCogOutline,
      path: '/to-trinh-mien-giam'
    },
    {
      title: 'Đơn khởi kiện',
      icon: AccountCogOutline,
      path: '/don-khoi-kien'
    },
    {
      sectionTitle: 'Template resources'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
