import React, { Component } from 'react'
import '../styling/recipe.css';
import { Button } from 'react-bootstrap';
import SelectRecipe, { selectRecipe } from './selectRecipe'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    withRouter,
    Link
  } from "react-router-dom";
  
// I Can access the data in onther component using (props.location.state)
export class recipes extends Component {

   
    // routeChange=()=>{
        
    //     let path =`/${SelectRecipe}`; 
    //     // let history = useHistory;
    //     // history.push(path);
    //    this.props.history.push( {pathname:'/selectRecipe', state:[ {id: 7, color: 'green'}] });
    // }

    // function routeChange() {
    //     let history = useHistory();
      
    //     const redirect = () => {
    //       history.push('/your-path')
    //     }
    // }

    render() {
        return (
            <div>
                {this.props.recipeData.map((recipe)=>{
                 return   <div id='recipe' >
                       <h3>
                           {recipe.name}
                       </h3>
                       <p>{recipe.steps}</p>
                       <img src={recipe.imageURL} alt=""  />
                       {/* <Router>

                       <Route exact path='/recipe' component={SelectRecipe} >
                       <button onClick={this.selectOneRecipe()}>show more</button>
                       </Route>
                       </Router> */}
                       <br/>
                       <br/>
                        <Router>

                        <Link to={{
                            pathname: '/selectRecipe',
                           state: [{id: 1, name: 'Ford', color: 'red'}]
                         }}> show more </Link> 
                             {/* <Button color="primary" className="px-4" onClick={this.routeChange} > 
                                       show more
                                    </Button>  */}
                             </Router> 
                   </div> 
                })}
               {/* <h3>{this.props.recipeData[0].name}</h3>  */}
            </div>
        )
    }
}

export default recipes
