import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';





class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      skills: ''

    }
    // this.assignInput = this.assignInput.bind(this)
  }
  assignInput=()=> {
    // let skill=this.state.skills.split(',');
    // let skill1=this.state;
    //  skill1['skills']=skill;
    this.props.dataSet(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      skills: ''

    })
  }
  // className="submitbutton"


  render() {
    return (
      <div >
        firstname: <input onChange={(event) => this.setState({ firstName: event.target.value })}></input><br />
        lastname:<input onChange={(event) => this.setState({ lastName: event.target.value })} ></input><br />
        skills:<input onChange={(event) => this.setState({ skills: event.target.value })}  ></input><br />
        <button onClick={this.assignInput} >Add</button>

      </div>
    );

  }
}


class Search extends Component {
  render() {
    return (
      <div className="search" >
        search:<input onChange={(event) => this.props.searchInfo(event.target.value)} placeholder='enter char to filter' />
      </div>
    )
  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          'firstName': 'Pramod',
          'lastName': 'Ray',
          'skills': ['Python', 'HTML', 'CSS']
        },
        {
          'firstName': 'Sachin',
          'lastName': 'Suresh',
          'skills': ['Python', 'HTML', 'CSS', 'CAT']
        },
        {
          'firstName': 'Samarth',
          'lastName': 'Hegde',
          'skills': ['Python', 'Git', 'CSS']
        }
      ],
       searchName: ''
    }
    this.getList = this.getList.bind(this);
    this.sortfname = this.sortfname.bind(this);
    this.sortlname = this.sortlname.bind(this);
    this.sortSkills = this.sortSkills.bind(this);
    this.searchItem = this.searchItem.bind(this);
    // this.refresh = this.refresh.bind(this)         no need to bind fat arrow used

  }

  refresh = () => {
    Axios.get("http://127.0.0.1:8000/student/")
    .then(response => {
      this.setState({
        students: response.data
      })
    })
  }

  componentDidMount() {
   this.refresh();
  }


  getList(char) {
    // this.setState({
    // students:[...this.state.students,char]
    Axios.post("http://127.0.0.1:8000/student/list/", char)
    .then(this.refresh());
    // })
  }

  delList(id) {
    Axios.delete("http://127.0.0.1:8000/student/list/del/" + id.toString() + "/")
    .then(this.refresh())
  }

  // updateList(id){
  //   Axios.delete("http://127.0.0.1:8000/student/list/upd/"+id.toString()+"/")

  // }




  sortfname() {
    let sortedFirstName = this.state.students
    sortedFirstName.sort(function (a, b) {
      return a.firstName.localeCompare(b.firstName)
    })
    this.setState({
      students: sortedFirstName
    });

  }

  sortlname() {
    let sortedLastName = this.state.students
    sortedLastName.sort(function (a, b) {
      return a.lastName.localeCompare(b.lastName)
    })
    this.setState({
      students: sortedLastName
    });

  }

  sortSkills() {
    let sortedSkills = this.state.students
    sortedSkills.sort(function (a, b) {
      if (a.skills.length > b.skills.length) {
        return -1;
      }
      if (a.skills.length < b.skills.length) {
        return 1;
      }
      return 0;
    });
    this.setState({
      students: sortedSkills
    })
  }


  searchItem(text) {
    this.setState({
      searchName: text
    })
  }


  render() {
    return (
      
            <div className='App'>

                  <div className="add2">
                    <Search searchInfo={this.searchItem} /><br></br>
                    <div>
                    <Input dataSet={this.getList} />
                    </div>
              {/* <div>       */}
                  
                <table className="add">
                  
                  
                    <tr className="flex-row">
                        <th onClick={this.sortfname}>Firstname</th>
                        <th onClick={this.sortlname}>Lastname</th>
                        <th onClick={this.sortSkills}>skills</th>
                        <th >operations</th>
                    </tr>
                
                  <tbody>
                    {this.state.students.filter(name => {
                      return name.firstName.toLowerCase().includes(
                        this.state.searchName.toLowerCase()) ||
                        name.lastName.toLowerCase().includes(this.state.searchName.toLowerCase());
                    }).map((stu, index) => (

                      <tr key={index} >


                        <td>{stu.firstName} </td>
                        <td>{stu.lastName}</td>
                        <td>{stu.skills.map((stu, index) => (
                          <ul key={index}>
                            <ol>{stu}</ol>
                          </ul>)
                        )}
                        </td>
                        <td><button onClick={(event)=>this.delList(stu.id)}>delete</button></td>
                        {/* <td><button onclick={this.updateList(stu.id)}>edit</button></td> */}

                      </tr>
                    ))}
                  </tbody>
            
            
             </table>
             </div>
             {/* </div> */}

             

                 
         </div>

      
    
    );
  }
}

export default App;

