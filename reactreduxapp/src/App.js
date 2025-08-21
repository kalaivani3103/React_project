import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { buyBook } from './redux/actions/bookAction';
import OtherBranchComponent from './components/OtherBranchComponent';

function App() {
  const dispatch = useDispatch();

  const numOfBooks = useSelector(state => state.book.numOfBooks);
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">📚 HCL Store</h2>
        <div className="row">
          {/* Books Section */}
          <div className="col-md-12 text-center">
            <h4>Number of Books available: {numOfBooks}</h4>
            <button className="btn btn-success mt-2" onClick={() => dispatch(buyBook())}>Buy Book</button>
          </div>
        </div>
      </div>
      <hr></hr>
      <OtherBranchComponent/>
    </>
  );
}

export default App;
