// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { Bicycle, Human, Map } from 'mdi-material-ui'

const navigation = () => {
  return [
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Users',
      icon: Human,
      path: '/users'
    },
    {
      title: 'Bicycles',
      icon: Bicycle,
      path: '/bicycles'
    },
    {
      title: 'Maps',
      icon: Map,
      path: '/maps'
    }
  ]
}

export default navigation
