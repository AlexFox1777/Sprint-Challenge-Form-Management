import React from 'react'
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const styles ={
  card: {
      margin: '1rem',
  }
};

class UserCards extends React.Component {

    state = {
        users: [],
    };

    componentDidMount() {
        fetch('http://localhost:5000/api/restricted/data')
            .then(response => response.json())
            .then(usersData => this.setState({users: usersData}))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <Grid container justify={"center"} alignItems={'center'}>
                {this.state.users.map(user =>
                    <Grid item xs={12} sm={3}>
                        <Card className={this.props.classes.card}>
                            <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>{user.name}</Typography>
                            <Typography color="textSecondary" >Course: {user.course}</Typography>
                            <Typography color="textSecondary" gutterBottom>Technique: {user.technique}</Typography>
                            <Typography variant="h6" component="h6" gutterBottom>Ingredients</Typography>
                            {user.ingredients.map(ingredient =>
                            <Typography color="textSecondary">{ingredient}</Typography>
                            )}
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default withStyles(styles)(UserCards);