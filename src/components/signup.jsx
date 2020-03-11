import React from 'react';
import './signup.css';

class signup extends React.Component {

    render() {
        return (
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
        )
    }

}

export default signup;
