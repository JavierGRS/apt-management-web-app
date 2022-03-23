import React from "react"

import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PrivateRoute from "../routes/PrivateRoute"
import Dashboard from "../pages/Dashboard"
import ForgotPassword from "../pages/ForgotPassword"
import NewTicket from "../pages/NewTicket"
import UpdateProfile from "../pages/UpdateProfile"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import TicketDetails from "../pages/TicketDetails"
import EditTicket from "../pages/EditTicket"
import NewWorker from "../pages/NewWorker"

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/new-worker" component={NewWorker} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/ticket-details" component={TicketDetails} />
          <PrivateRoute path="/newTicket" component={NewTicket} />
          <PrivateRoute path="/editTicket" component={EditTicket} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
