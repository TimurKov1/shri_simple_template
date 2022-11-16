import { TodoList } from '../components/TodoList';

export const Home = () => {
    return (
        <div>
            <h1 data-testid="page-title">Home</h1>
            <p>This is the list.</p>
            <p>This is the list PR CHECK</p>
            <p>This is the list PR CHECK 2222</p>
            <TodoList />
        </div>
    );
};
