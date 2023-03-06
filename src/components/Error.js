function Error(props) {
  return (
    <div className="mt-6">
    <div
      className="container d-flex text-center flex-column mt-3"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1 style={{ fontSize: "73px" }}>404</h1>
      <p> This Page Could Not Be Found</p>
    </div>
    </div>
  );
}

export default Error;
