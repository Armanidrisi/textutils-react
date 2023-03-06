export default function About(props) {
  return (
  
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>About {props.title} </h1>
        <div className="my-3">
          <p>
            sit Lorem pariatur ad reprehenderit nisi nostrud enim ex nostrud
            velit enim sint consectetur duis nulla voluptate quis tempor duis
            elit elit et tempor pariatur laborum ipsum officia reprehenderit
            enim veniam eu duis sunt mollit
          </p>
        </div>
        <div className="my-6">
          <p>
            sit Lorem pariatur ad reprehenderit nisi nostrud enim ex nostrud
            velit enim sint consectetur duis nulla voluptate quis tempor duis
            elit elit et tempor pariatur laborum ipsum officia reprehenderit
            enim veniam eu duis sunt mollit
          </p>
        </div>
        <div className="my-6">
          <p>
            sit Lorem pariatur ad reprehenderit nisi nostrud enim ex nostrud
            velit enim sint consectetur duis nulla voluptate quis tempor duis
            elit elit et tempor pariatur laborum ipsum officia reprehenderit
            enim veniam eu duis sunt mollit
          </p>
        </div>
        <div className="my-6">
          <p>
            sit Lorem pariatur ad reprehenderit nisi nostrud enim ex nostrud
            velit enim sint consectetur duis nulla voluptate quis tempor duis
            elit elit et tempor pariatur laborum ipsum officia reprehenderit
            enim veniam eu duis sunt mollit
          </p>
        </div>
        <div className="mt-8 text-center">
          <h2>Follow Us On</h2>
          <div className="d-flex justify-content-center my-4 social-icons">
            <a
              href="/"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              <i class="fab fa-instagram mx-2"></i>
            </a>
            <a
              href="/"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              <i class="fab fa-github-square mx-2"></i>
            </a>
            <a
              href="/"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              <i class="fab fa-twitter-square mx-2"></i>
            </a>
            <a
              href="/"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              <i class="fab fa-facebook-square mx-2"></i>
            </a>
            <a
              href="/"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              <i class="fab fa-linkedin mx-2"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
