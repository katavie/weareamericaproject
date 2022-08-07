import React from "react";
import { graphql } from "gatsby";
import { PortableText } from "@portabletext/react";
import Layout from "../components/Layout";

const ResourcesPage = ({ data }) => {
  const page = data.allSanityPage.nodes[0];
  const rawText = data.allSanityPage.nodes[0].content[0]._rawContent;
  return (
    <Layout>
      <h1 className="heading large_heading">{page.title}</h1>
      <PortableText value={rawText} />
    </Layout>
  );
};

export const query = graphql`
  query EducatorResourcesPageQuery {
    allSanityPage(
      filter: { _id: { eq: "d130afef-6556-4f93-a5d5-aa319f34616e" } }
    ) {
      nodes {
        title
        content {
          ... on SanityTextSection {
            _rawContent
          }
        }
      }
    }
  }
`;

export default ResourcesPage;
