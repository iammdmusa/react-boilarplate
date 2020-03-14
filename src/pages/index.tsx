import * as React from "react";
import { NextPage } from "next";
import Layout from "../components/Layout/index";

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => (
  <>
    <Layout>
      <div className="flex">
        <div className="flex-1 bg-gray-400 text-center">
          <h1 id="page-title" className="text-4xl">Welcome to home page</h1>
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

export default IndexPage;
