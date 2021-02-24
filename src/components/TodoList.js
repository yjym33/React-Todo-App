import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;

// todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여려개의 TodoListItem 컴포넌트로 변환하여 보여 줍니다.
