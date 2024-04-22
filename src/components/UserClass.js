import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                login: "Dummy",
                location: "Default",
            }
        }
    //console.log(props);
    }

    async componentDidMount() {
        const data = await fetch ("https://api.github.com/users/likhithpalasala");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);

    }


    render() {

        const{ login, public_repos } = this.state.userInfo;

        return (
        <div className="user-card">
          <h2>Name: {login}</h2>
          <h3>Repos: {public_repos}</h3>
          <h4>Contact: @Likhith-Likkii</h4>
       </div>
        );
    } 
}


export default UserClass;