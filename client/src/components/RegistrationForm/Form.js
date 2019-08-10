import {Field, Form, withFormik} from "formik";
import React from "react";
import axios from 'axios';
import {TextField} from "formik-material-ui";
import {Button, Card} from '@material-ui/core'
import * as Yup from 'yup';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    root: {
        display: "flex",
        justifyContent: 'center',
    },
    card: {
        width: '40%',
        padding: '20px',
    },
    form: {
        display: "flex",
        justifyContent: 'center',
        flexDirection: 'column',
    },

};

class LoginForm extends React.Component {

    state = {
        users: [],
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({user: [...this.state.users, this.props.status]})
        }
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <Card className={this.props.classes.card}>
                    <Form className={this.props.classes.form}>
                        <Field name="username" placeholder="Username" component={TextField} variant="outlined"
                               margin="normal"/>
                        <Field label="Password" type="password" name="password" placeholder="Password"
                               component={TextField} variant="outlined"
                               margin="normal"/>
                        <Button type="submit" fullWidth variant="contained" color="primary">Submit!</Button>
                    </Form>
                </Card>
            </div>
        );
    }
}

const LogInForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(8).required(),
    }),

    handleSubmit(values, {setStatus}) {
        console.log("log", values);
        axios
            .post('http://localhost:5000/api/register', values)
            .then(response => {
                setStatus(response.data);
            })
            .catch(error => console.log(error.response));
    }
})(LoginForm);

export default withStyles(styles)(LogInForm);