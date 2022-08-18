import * as rpg from './rpg.js'

const RED='red'
const BLACK='black'
const YELLOW='yellow'
const BLUE='blue'
const WHITE='white'
const GREEN='green'

class Hero{
  constructor(name,focus){
    this.name=name
    this.focus=focus
  }
}

export var heroes=[
  new Hero('Kid',RED),
  new Hero('Lynx',BLACK),
  new Hero('Guile',BLACK),
  new Hero('Norris',YELLOW),
  new Hero('Nikki',BLUE),
  new Hero('Viper',YELLOW),
  new Hero('Riddel',WHITE),
  new Hero('Karsh',GREEN),
  new Hero('Zoah',YELLOW),
  new Hero('Marcy',BLUE),
  new Hero('Korcha',BLUE),
  new Hero('Luccia',BLACK),
  new Hero('Poshul',YELLOW),
  new Hero('Razzly',GREEN),
  new Hero('Zappa',RED),
  new Hero('Orcha',RED),
  new Hero('Radius',GREEN),
  new Hero('Fargo',BLUE),
  new Hero('Macha',RED),
  new Hero('Glenn',GREEN),
  new Hero('Leena',BLUE),
  new Hero('Miki',RED),
  new Hero('Harle',BLACK),
  new Hero('Janice',RED),
  new Hero('Draggy',RED),
  new Hero('Starky',WHITE),
  new Hero('Sprigg',GREEN),
  new Hero('Mojo',BLACK),
  new Hero('Turnip',GREEN),
  new Hero('NeoFio',GREEN),
  new Hero('Greco',RED),
  new Hero('Skelly',BLACK),
  new Hero('Funguy',YELLOW),
  new Hero('Irenes',BLUE),
  new Hero('Mel',YELLOW),
  new Hero('Leah',YELLOW),
  new Hero('Van',GREEN),
  new Hero('Sneff',YELLOW),
  new Hero('Steena',WHITE),
  new Hero('Doc',WHITE),
  new Hero('Grobyc',BLACK),
  new Hero('Pierre',BLUE),
  new Hero('Orlha',BLUE),
  new Hero('Pip',WHITE),
]

var serge=new Hero('Serge',WHITE)

export function setup(){
  rpg.shuffle(heroes)
  heroes.splice(0,0,serge)
}
