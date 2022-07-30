import React, { Component } from "react";

import styled from "styled-components";


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a href="#" className="navbar-brand"
                    >PokeView App</a></nav>
            </div>
        )
    }
}

