import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux/es/exports";
// import { addTodo, deleteTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";
import { todoRemainingSelector } from "../../redux/selector";
import todoListSlice from "./todoListSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [valueInputChange, setValueInputChange] = useState("");
  const [valueSelectOptionChange, setValueSelectOptionChange] =
    useState("Medium");

  const todoList = useSelector(todoRemainingSelector);

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: valueInputChange,
        priority: valueSelectOptionChange,
        completed: false,
      })
    );
    setValueInputChange("");
    setValueSelectOptionChange("Medium");
    inputRef.current.focus();
  };

  const handleOnInputChange = (e) => {
    setValueInputChange(e.target.value);
  };

  const handleSelectOptionChange = (value) => {
    setValueSelectOptionChange(value);
  };

  const handleDelete = (id) => {
    dispatch(todoListSlice.actions.deleteTodo(id));
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList?.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo?.name}
            prioriry={todo?.priority}
            completed={todo?.completed}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            onChange={handleOnInputChange}
            value={valueInputChange}
            ref={inputRef}
          />
          <Select
            defaultValue="Medium"
            value={valueSelectOptionChange}
            onChange={handleSelectOptionChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
