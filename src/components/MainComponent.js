import React, { Component } from "react";
import DishDetail from "./DiskdetailComponent";
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes.js';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent.js";
import { Route, Navigate, Routes } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
        };
    }
    
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }

    render() {
        const HomePage = () => {
            return (
                <Home/>
            )
        }

        <Routes>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>

        return (
            <div>
                <Header/>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
                <Footer/>
            </div>
        )
    }
}

export default Main;