/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BlogListPaginator from "@theme/BlogListPaginator";
import qs from 'qs';
import classnames from 'classnames';




import HeroMain from "./img/hero_main.svg";

import Link from "@docusaurus/Link";

import styles from './style.module.css';



function BlogListPage(props) {
  const { metadata, items } = props;
  const {
    siteConfig: { title: siteTitle },
    // 当前语言
    // i18n: { currentLocale },
  } = useDocusaurusContext();
  const isBlogOnlyMode = metadata.permalink === "/";
  const isPaginated = metadata.totalPages > 1;
  const title = isBlogOnlyMode ? siteTitle : "Blog";
  const description = "blogs";

  // Get all post views
  // const views = useViews(items);



  const queryObj = props.location ? qs.parse(props.location.search, { ignoreQueryPrefix: true }) : {};

  let itemsFiltered = items.slice(0);
  itemsFiltered.sort((a, b) => (b.content.metadata.featured === true && 1) || -1);
  const [onlyFeatured, setOnlyFeatured] = useState(queryObj['featured'] == 'true');
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchLimit, setSearchLimit] = useState(20);

  let filteredCap = itemsFiltered.length;
  let increaseSearchLimit = function () {
    if (searchLimit > filteredCap) {
      return
    }
    let newLimit = searchLimit + 10;
    setSearchLimit(newLimit);
  };

  //
  // Filtering
  //

  if (searchTerm) {
    itemsFiltered = itemsFiltered.filter(item => {
      let searchTerms = searchTerm.split(" ");
      let content = `${item.content.metadata.title.toLowerCase()} ${item.content.metadata.description.toLowerCase()}`;
      return searchTerms.every(term => {
        return content.includes(term.toLowerCase())
      })
    });
  }

  if (onlyFeatured) {
    itemsFiltered = itemsFiltered.filter(item => item.content.metadata.featured == true);
  }

  filteredCap = itemsFiltered.length;
  itemsFiltered = itemsFiltered.slice(0, searchLimit).sort((a,b) => b.content.metadata.date.localeCompare(a.content.metadata.date));

  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName="blog-list__page"
    >
      {/* <div className={styles.cookbookItemsContainer}>
        <div className="container container--narrow container--bleed margin-vert--lg">
          {itemsFiltered.map(({content: BlogPostContent}) => (
            <BlogPostItem
              key={BlogPostContent.metadata.permalink}
              frontMatter={BlogPostContent.frontMatter}
              metadata={BlogPostContent.metadata}
              truncated>
              <BlogPostContent />
            </BlogPostItem>
          ))}
          {itemsFiltered.length > 0 && itemsFiltered.length < items.length && itemsFiltered.length > searchLimit &&
            <div className="col">
              <button className="button button--secondary cookbook-show-more" onClick={() => increaseSearchLimit()}>Show more</button>
            </div>}
          {itemsFiltered.length == 0 &&
            <div className="col">
              <p>Whoops, looks like your search hasn't got any results. If the cookbook you want doesn't exist please <a href="https://github.com/benthosdev/benthos/issues/new">ask for it</a>.</p>
            </div>}
        </div>
      </div> */}

      
      <div className="container-wrapper">
        <div className="container padding-vert--sm">
          <div className="row">

            <div className="col col--12">
              {/* <div className="content__divider"></div> */}
              <div className="search">
                <input
                  className={classnames("shadow--lw", styles.cookbookSearch)}
                  type="text"
                  onChange={(event) => setSearchTerm(event.currentTarget.value)}
                  placeholder="🔍 Search..." />
              </div>
              <div className="bloghome__posts">
                <div className="bloghome__posts-list">
                  
                  {itemsFiltered.map(({ content: BlogPostContent }, index) => {
                


                    const { metadata: blogMetaData, frontMatter, } = BlogPostContent;

                    const { date, tags } = blogMetaData;
                    const dateObj = new Date(date);

                    const year = dateObj.getFullYear();
                    let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
                    const day = ("0" + dateObj.getDate()).slice(-2);
                    console.log(BlogPostContent.frontMatter)
                    return (
                      
                      <div
                        // className="post__list-item"
                        className={styles.blogPostItem}
                        key={blogMetaData.permalink}
                        metadata={blogMetaData}
                        truncated={BlogPostContent.metadata.truncated}
                      >
                     
                          <Link to={blogMetaData.permalink} style={{"fontSize":"24px"}}>
                            {frontMatter.title}
                          </Link>
                          <div className="post__list-date" style={{'fontSize':'12px','paddingBottom':'12px'}}>
                          <a>{blogMetaData.authors[0].name}</a> ○ {year}-{month}-{day}
                          </div>
                          <div className="post__list-content">
                            {blogMetaData.description}
                          </div>
                          <div className="post__list-tags">
                        
                            {tags.length > 0 &&
                              tags.slice(0, 5).map(({ label, permalink: tagPermalink }, index) => (
                                <Link key={tagPermalink} className={`post__tags ${index < tags.length ? "margin-right--sm" : ""}`}
                                  to={tagPermalink}
                                  style={{ fontSize: "0.75em", fontWeight: 500, }}
                                >
                                  {label}
                                </Link>
                              )
                              )}
                          </div>
                        </div>
                        

                    );
                  })}

                </div>

                {itemsFiltered.length > 0 && itemsFiltered.length < items.length && itemsFiltered.length > searchLimit &&
                  <div className="col">
                    <button className="button button--secondary cookbook-show-more" onClick={() => increaseSearchLimit()}>Show more</button>
                  </div>}
                {itemsFiltered.length == 0 &&
                  <div className="col">
                    <p>Whoops, looks like your search hasn't got any results. If the cookbook you want doesn't exist please <a href="https://github.com/benthosdev/benthos/issues/new">ask for it</a>.</p>
                  </div>}
                  
                {isPaginated && <BlogListPaginator metadata={metadata} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function HeroMainImage() {
  return (
    <div className="bloghome__image">
      <HeroMain />
    </div>
  );
}

export default BlogListPage;
