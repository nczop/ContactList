import React from 'react';
import './App.css';
import { shallow } from 'enzyme';



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
          <List/>                    
        </div>
      );
    }    
  }
  

  class AppHeader extends React.Component {
    render () { 
      return (    
        <header className="ui fixed menu">  
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"></link>  
          <nav className="ui container">
            <a href="#" className="header item">
              <img className="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
              Lista kontaktów
            </a>
            <div className="header item">
              <button className="ui button">Dodaj</button>
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
          <input value ={this.state.name} onChange={this.newName.bind(this)}/>          
          <input value ={this.state.surname} onChange={this.newSurname.bind(this)}/>
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
        input: this.props.input
      };
    }
    handleChange (e) {
      this.setState ({
        input: e.target.value
      })
    }    
     render () {
       return (
         <div>
           <input type = "number" onChange = {this.handleChange.bind(this)}/>                      
           <Child 
            parentNumber ={this.state.input}
           />                     
         </div>
       )
     };
  }
  
  class Child extends React.Component {  
    constructor (props) {
      super(props);
      this.state = {
        childNumber: this.props.childNumber
      };
    }    
    componentWillReceiveProps (nextProps) {
      if (nextProps.parentNumber !== this.state.childNumber) {
        this.setState ({
          childNumber: Number(nextProps.parentNumber)
        });
      }
    }   
    increment() {
      this.setState({      
        childNumber: this.state.childNumber + 1,      
      });    
    }      
    decrement() {      
      this.setState({     
        childNumber: this.state.childNumber - 1,      
      })
    }  
    render() {      
      return (
        <div>          
          <output>{this.state.childNumber}</output>
          <br/>
          <button onClick= {this.increment.bind(this)}>+</button>                     
          <button onClick= {this.decrement.bind(this)}>-</button>  
          <br/>           
          <br/>
        </div>        
      )
    }
  }

const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class List extends React.Component {
  constructor() {
    super();    
    
    this.state = {
      filteredUsers: allUsers
    };
  }

  filterUsers(e) {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text)
    this.setState({
      filteredUsers
    })
  }
  
  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }
  
  render () {
    return (
      <div>
        <input onInput={this.filterUsers.bind(this)} />
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
};

const UsersList = ({ users }) => {
  if (users.length > 0) {
    return (
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    );
  }

  return (
    <p>No results!</p>
  );
};



it('includes input', () => {
  const parent = shallow(<Parent />);
  expect (parent.containsMatchingElement(<input />)).toEqual(true)
});

it ('includes UserList' , () => {
  const app = shallow (<App />);
  expect (app.containsMatchingElement (<ContactsList />)).toEqual(true)
});

it ('show message when there are no value' , () => {
  const userList = shallow(<UsersList users = {[]} />);
  expect (userList.text()).toContain('No results!')
});

it ('doesnt show message when there are users', () => {
  const userList = shallow (<UsersList users = {['Michal']} /> );
  expect (userList.text()).not.toContain('No results!')
});

it('passes all users to the UsersList', () => {
  const app = shallow(<List />);
  expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);
});

it ('filters names on input' , () => {
  const app = shallow (<List />);
  expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);

  app.find('input').simulate('input', {currentTarget: {value: ''}})
  expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);
});


  


  



  




export default App;
