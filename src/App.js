import React from 'react';
import './App.css';


  class App extends React.Component {
    render () {
      return (
        <div>
          <AppHeader/>
          <main className="ui main text container">
            <ContactsList />            
          </main>  
          <CounterApp /> 
          <NameAndSurname/>
          <Parent/>                     
        </div>
      );
    }    
  }
  
  class AppHeader extends React.Component {
    render () { 
      return (    
        <header className="ui fixed menu">  
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"></link>  
          <nav class="ui container">
            <a href="#" class="header item">
              <img class="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
              Lista kontaktów
            </a>
            <div class="header item">
              <button class="ui button">Dodaj</button>
            </div>
          </nav>
        </header>
      );
    }      
           
  }


  
  class ContactsList extends React.Component {
    render () {
      return (
        <ul className="ui relaxed divided list selection">
          <ContactItem
            login="typeofweb1"
            name="Lena"
            department="JavaScript Developer"
          />
          <ContactItem
            login="typeofweb2"
            name="Brian"
            department="Human Resources"
          />
          <ContactItem
            login="typeofweb3"
            name="Rick"
            department="QA"
          />
        </ul>
      );
    }
  }
  
  class ContactItem extends React.Component {
    render () {
      const { login, name, department } = this.props           
      return (        
        <li className="item" > 
          <UserAvatar login = {login}/>              
          <div className="content" >        
            <h4 className="header">{name}</h4>
            <div className="description">{department}</div>
          </div>
        </li>
      );    
    }         
  }
  
  class UserAvatar extends React.Component {    
    render () {
      const {login} = this. props 
      const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;    
      return (
        <img src={imgUrl} className="ui mini rounded image" onClick = {this.onClickAvatar}/>
      );
    }
    onClickAvatar () {
      alert("kliknieto!");
      console.log("Uwaga")
    }
  } 

  class CounterApp extends React.Component { 
    constructor () {
      super ();
      this.state = {counter: 0, sumOfClick: 0, sumOfDoubleClick: 0};
    }       
    render () {
      return (
        <div>
          <button onClick = {this.increment.bind(this)}>+</button>
          <output>{this.state.counter}</output>
          <button onClick= {this.decrement.bind(this)}>-</button> 
          <br/>
          <output>Sum of Click= {this.state.sumOfClick}</output>                                    
        </div>
      );
    }
    increment() {
      this.setState ({
        counter: this.state.counter + 1,
        sumOfClick: this.state.sumOfClick +1 
      })      
    }
    decrement() {
      this.setState ({
        counter: this.state.counter -1,
        sumOfClick: this.state.sumOfClick +1
      })
    }            
  }

  class NameAndSurname extends React.Component {
    constructor () {
      super ();
      this.state = {name: "", surname: ""};
    }
    render() {
      return (
        <div>
          <input value ={this.state.name} onInput={this.newName.bind(this)}/>          
          <input value ={this.state.surname} onInput={this.newSurname.bind(this)}/>
          <br/>
          <output>name: {this.state.name}</output>
          <br/>
          <output>surname: {this.state.surname}</output>
          <br/>
          <button onClick={this.cleanName.bind(this)}>Clean</button>
          <br/>
          <br/>
          <br/>
        </div>
      )
    }
    newName (e) {
      this.setState ({
        name: e.target.value   
      })
    }
    newSurname (e) {
      this.setState ({
        surname: e.target.value
      })
    }
    cleanName () {
      this.setState ({
        name: ""
      })
    }
  }

  class Parent extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        number: this.props.number,
        input: this.props.input
      };
    }
    handleChange (e) {
      this.setState ({
        input: e.target.value
      })
    }

    sentToChild () {
      this.setState ({
        number: this.state.input
      })
    }

    componentWillReceiveProps (nextProps) {
      if (nextProps.number !== this.props.parentNumber) {
        this.setState ({
          parentNumber: nextProps.number
        });
      }
    }

    

     render () {
       return (
         <div>
           <input onChange = {this.handleChange.bind(this)}/>
           <button onClick = {this.sentToChild.bind(this)} >Sent</button>           
           <Child 
            parentNumber ={this.state.number}>               
           </Child>           
         </div>
       )
     };
  }
  
  class Child extends React.Component {  
    increment() {
      this.setState({      
        parentNumber: this.state.parentNumber + 1,      
      });    
    }      
    decrement() {      
      this.setState({     
        parentNumber: this.state.parentNumber - 1,      
      })
    }  
    render() {      
      return (
        <div>          
          <output>{this.props.parentNumber}</output>
          <br/>
          <button onClick= {this.props.increment}>+</button>                     
          <button onClick= {this.props.decrement}>-</button>             
        </div>        
      )
    }
  }




export default App;
