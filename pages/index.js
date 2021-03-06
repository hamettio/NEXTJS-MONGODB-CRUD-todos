import Link from "next/link";
import dbConnect from "../lib/dbConnect";
import Todo from "../models/Todo";

const Index = ({ todos }) => (
  <>
    {/* Create a card for each todo */}
    {todos.map((todo) => (
      <div key={todo._id}>
        <div>
          <h3>Title: {todo.title}</h3>
          <p>Description: {todo.description}</p>
          <div>
            <Link href="/[id]/edit" as={`/${todo._id}/edit`}>
              <button>Edit</button>
            </Link>
            <Link href="/[id]" as={`/${todo._id}`}>
              <button>View</button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </>
);

/* Retrieves todo(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Todo.find({});
  const todos = result.map((doc) => {
    const todo = doc.toObject();
    todo._id = todo._id.toString();
    return todo;
  });

  return { props: { todos: todos } };
}

export default Index;
