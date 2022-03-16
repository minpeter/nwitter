import React from "react";

const Home = () => {
  const [nweet, setNweet] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChage = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  <div>
    <form>
      <input
        value={nweet}
        onChange={onChage}
        type="text"
        placeholder="Waht's on your mind?"
        maxLength={120}
      />
      <input type="submit" value="Nweet" />
    </form>
  </div>;
};

export default Home;
