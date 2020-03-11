import React from 'react';
import './login.css';

class Login extends React.Component {

    render() {
        return (
            <div>

                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">Login</a>
                        </li>
                        <li>
                            <a href="#">sign up</a>
                        </li>
                        <li>
                            <a href="#">Enter</a>
                        </li>
                    </ul>
                </nav>

                <form>
                    <table id="table">
                        <tr>
                            <td>
                                user-id<input className="text" type="text" name="user-id" /><br />
                                password<input id="pass" type="password" name="password" /><br />
                                <input id="submit" type="submit" name="submit" value="submit" />
                                <button>Signup</button>
                            </td>

                            <td>

                                <img src="https://i.pinimg.com/236x/70/b9/3e/70b93ef371b4fa888b07c7fd8c6bdfd6--smile-images-free-pictures.jpg"
                                    alt="image" />
                            </td>

                        </tr>
                    </table>
                </form>

            </div>)
    }

}

export default Login;   