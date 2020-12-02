import MainCatagory from './components/MainCatagory'
import ListLogoCar from './components/ListLogoCar'
import ListCar from './components/ListCar'
import ButtonMenu from './components/Menu/ButtonMenu'
 import MainTest from './components/MainTest'



export const routes=[
    {'path':'/catagory',name:'catagory',component:MainCatagory},
    {'path':'/ListLogoCar',name:'catagoryCar',component:ListLogoCar},
    {'path':'/catagoryCar/ListCar/:id/:namecar',name:'ListCar',component:ListCar},
    {'path':'/ButtonMenu',name:'ButtonMenu',component:ButtonMenu},
     {'path':'/MainTest',name:'MainTest',component:MainTest},
    
]