class Team extends React.Component{
   constructor(props){
       super(props)
       this.state ={
           shots:0,
           score:0
       }
       this.shotsound =new Audio('../assets/sounds/shoot.wav')
       this.scoresound =new Audio('../assets/sounds/score.wav')
   }

   shothandler =() =>{
let score =this.state.score
this.shotsound.play()

     if (Math.random()> 0.5){
        score +=1
        setTimeout(()=> {
           this.scoresound.play() 
        },100)
        
        
     }


       this.setState((state,props) => ({
           shots: state.shots + 1,
           score
       }))
   }
   
    render(){
        let shotpersentagediv 
        if (this.state.shots){
           const shotpersentage =Math.round((this.state.score / this.state.shots)*100)
           shotpersentagediv=(
            <strong>
            Shooting %:{shotpersentage}
        </strong>
           )
        }

        return(
        <div className="Team">
            <h2>{this.props.name}</h2>
            <div className="identity">
            <img src={this.props.logo} alt={this.props.name}/>
            </div>
        <div>
            <strong>shots:</strong>{this.state.shots}
        </div>
        <div>
            <strong>score:</strong>{this.state.score}
        </div>
        {shotpersentagediv}
        <button onClick={this.shothandler}>Shoot!</button>
        </div>
        )
    }
}
function Game (props){
    return(
        <div className="Game">
            <h1>Welcome to {props.venue}</h1>
 <div className="stats">
       <Team
       name={props.visitingTeam.name}
       logo={props.visitingTeam.logoSrc} />
       <div className="versus">
           <h1>VS</h1>
       </div>
       <Team
       name={props.homeTeam.name}
       logo={props.homeTeam.logoSrc} />
      </div>
        </div>
    )
}



function App(props){
const barca ={
    name:'FC barcelona',
    logoSrc:'../assets/images/barca.png'
}
const madird ={
    name:'Real Madrid',
    logoSrc:'../assets/images/madrid.png'
}
const paris ={
    name:'Paris saint germain',
    logoSrc:'../assets/images/paris.png'
}
const chelsea ={
    name :'Fc chelsea',
    logoSrc: '../assets/images/chelsea.png'

}
    return (
      <div className="App">
      <Game 
      venue ="santiago bernabio"
      homeTeam={madird}
      visitingTeam={chelsea}
      />
      <Game
       venue ="park de prince"
       homeTeam={paris}
       visitingTeam={barca}
       
       />
      </div>
    )
  }
  
  //Render the application
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );