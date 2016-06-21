var React = require('react');

var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');
var SearchForm = require('./SearchForm');

var MainComponent = React.createClass({
  getInitialState:function () {
    return {
      showCompleted:false,
      searchText: '',
      todolist:[{
                id:1,
                todo: 'play computer',
                completed: true
                },{
                id:2,
                todo: 'play game',
                completed: false
                }]
    }
  },
  handleSendTodo: function (newTodo) {
    var {todolist} = this.state;
    var totalLength = todolist.length;
    var forPush = {
                  id: totalLength+1,
                  todo: newTodo,
                  completed: false
                  }
    this.setState({
      todolist:[...this.state.todolist,forPush]
    })
    
  },
  handleSearch: function (showCompleted,searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleOnClickTodo: function (id) {
    var todolist = this.state.todolist;
    var updateTodo = todolist.map((todo)=>{
                      if(todo.id==id){
                        todo.completed = !todo.completed
                      }
                      return todo;
                      })
    this.setState({
      todolist: updateTodo
      });
  }
  ,
  render: function () {

    return (
      <div>
        <div className="row">
          <div className="small-centered medium-6 large-4 columns">
            <h2>hiiii</h2>
            <SearchForm onSearch={this.handleSearch}/>
            <TodoList todolist={this.state.todolist} onToggle={this.handleOnClickTodo}/>
            <AddTodo handleSendTodo={this.handleSendTodo}/>
          </div>
        </div>
      </div>

    )
  }
})

module.exports = MainComponent;
