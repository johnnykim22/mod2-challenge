import React from "react";

const AddFriend = () => {
    return (
      <div>
        <h1>Add Friend</h1>
        <form>
          <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          
          </div>
          <div>
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" name="age" />
          
          </div>
          <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  };

  export default AddFriend