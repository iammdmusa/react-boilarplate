import * as React from "react";
import { NextPage } from "next";
import Layout from "../components/Layout/index";

type AboutProps = {};

const About: NextPage<AboutProps> = () => (
  <>
    <Layout>
      <div className="flex">
        <div className="flex-1 bg-gray-400 text-center">
          <h1 className="text-4xl">Welcome to About page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            animi tempora? A, in aliquam? Id qui autem cum. Laborum nemo nihil
            minus aliquam, sed ipsum rerum velit magnam voluptate assumenda.
          </p>
        </div>
      </div>
    </Layout>
  </>
);

export default About;
