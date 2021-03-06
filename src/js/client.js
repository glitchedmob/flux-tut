import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from "./vendor/bootstrap-without-jquery";

import Archives from "./pages/Archives";
import Featured from "./pages/ToDos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";


const app = document.getElementById("app");

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={ToDos}></IndexRoute>
			<Route path="archives(/:article)" name="archives" component={Archives}></Route>
			<Route path="settings" name="settings" component={Settings}></Route>
		</Route>
	</Router>, 
app);