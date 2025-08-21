import React, { useEffect, useState } from 'react';
import BookList from './BookList';
import UserList from './UserList';
import CalculatorParent from './CalculatorParent';
import UserListUseEffect from './UserListUseEffect';
import ProductListUseEffect from './ProductListUseEffect';
import ControlledComponent from './ControlledComponent';
import UnControlledComp from './UnControlledComp';
import ReactHookFormComp from './ReactHookFormComp';
import axios from 'axios';
import UserParentContextComp from './UserParentContextComp';
import ProductParentContextComp from './ProductParentContextComp';
import ReactHookFormUserComp from './ReactHookFormUserComp';
// import Functional from './Functional'
// import ChildClass from './ChildClass';
// // import ArrowFunction from './ArrowFunction';
// import EmployeeState from './EmployeeState';
// import EmployeeFunctionComp from './EmployeeFunctionComp';
// import ConditionalComponent from './ConditionalComponent';
// import ParentContextComp from './ParentContextComp';
// import AxiosUseEffect from './AxiosUseEffect';
// import CountUseEffect from './CountUseEffect';
// import Parent from './Parent';
export const userContext = React.createContext() 
export const productsContext = React.createContext() //step 1 , export for a public access.
export default function App() {
  // let products="Samsung Tvs"
  // (or)
  // let products=[
  //   {id:101,name:'Samsung Tv',price:2000},
  //   {id:102,name:'LG Tv',price:3000},
  //   {id:103,name:'Onida Tv',price:2200},
  //   {id:101,name:'MI Tv',price:2300},
  // ]
  // const customer = {
  //   name: "Kalaivani",
  //   age: "25",
  //   designation: "Java FullStack Developer",
  // }

  //user using context with axios API:
  const [data, setData] = useState([])
  const[products,setProduct]=useState([])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(user => setData(user.data)) //because response come with status code like that.
      .catch(error => console.log(`Error Fetching user local data ${error}`))
  }, [])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(product => setProduct(product.data)) //because response come with status code like that.
            .catch(error=> console.log(`Error Fetching user local data ${error}`))
    }, [])

  return (
    <>
      {/* <CountUseEffect />
      <AxiosUseEffect/> */}

      {/* <productsContext.Provider value={products}>
        <ParentContextComp/>
      </productsContext.Provider> */}

      <ReactHookFormComp />
      <ReactHookFormUserComp/>

      <userContext.Provider value={data}>
        <UserParentContextComp />
      </userContext.Provider>

      <productsContext.Provider value={products}>
        <ProductParentContextComp />
      </productsContext.Provider>

      
      <ControlledComponent />
      <UnControlledComp />
      
      <UserListUseEffect />
      <ProductListUseEffect />
      <BookList />
      <UserList />
      <CalculatorParent />



      {/* <Functional customer={customer} />
      <ChildClass customer={customer} />
      <EmployeeState />
      <EmployeeFunctionComp/>
      <ConditionalComponent/> 
      <CalculatorParent/>*/
      }
    </>
  )
};

