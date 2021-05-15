import Layout from "../components/Layout";

import { skills, experiences, projects } from "../profile";
import Link from "next/link";

const Index = () => {
  const titlePage = "Home";
  return (
    <Layout titlePage={titlePage}>
      {/*Presentation*/}

      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="/ryan-ray-profile2.jpeg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <section>
                  <h1>Ryan Ray</h1>
                  <article>
                    <h3>Fullstack Developer</h3>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptates ducimus perferendis sunt vitae tempora omnis
                      illum voluptatem. Neque eveniet fugiat nihil optio in
                      reprehenderit eligendi explicabo eos, nemo adipisci quos!
                    </p>
                    <a href="/hireme" className="btn btn-primary">
                      Hire me
                    </a>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="row py-2">
        {/*Skills*/}

        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <section>
                <h2>Skills</h2>
                {skills.map(({ skill, percentage }, i) => (
                  <div className="py-3" key={i}>
                    <h5>{skill}</h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>

        {/*Experiences*/}

        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <section>
                <h2>Experience</h2>
                <ul>
                  {experiences.map(({ title, description, from, to }, i) => (
                    <li key={i}>
                      <h3>{title}</h3>
                      <h4>
                        {from} - {to}
                      </h4>
                      <p className="text-justify pr-4">{description}</p>
                    </li>
                  ))}
                </ul>
                <Link href="/experiences">
                  <a className="btn btn-ligth">Know here</a>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/**Portfolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center text-light">Portfolio</h2>
              </div>
              {projects.map(({ name, description, image }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt="project"
                        className="img-fluid card-img-top"
                      />
                    </div>

                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!">Know more</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-3">
              <Link href="/portfolio">
                <a className="btn btn-outline-light">More projects</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
