import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';

function App() {
  return (
    <div className="todoapp">
      <h1>Задачи</h1>
      <section>
       <NewTaskForm />
        <TaskList />
        <Footer />
      </section>
    </div>
  );
}

export default App;
