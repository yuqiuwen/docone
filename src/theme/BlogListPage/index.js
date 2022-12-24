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
import BlogPostItem from "@theme/BlogPostItem";
import TagsListInline from '@theme/TagsListInline';
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

      
      <div className={styles.cookbookItemsContainer}>
        <div className="container container--narrow container--bleed margin-vert--lg padding-vert--sm">
          <div className="row">
            <div className="col col--12">
              <div className={styles.search}>
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
                    const dateObj = new Date(date.replace('Z','')); // Z表示格林尼治时间
                    

                    const year = dateObj.getFullYear();
                    let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
                    const day = ("0" + dateObj.getDate()).slice(-2);
                    const authors = blogMetaData.authors.length >0 ? blogMetaData.authors[0].name + ' ○ ': ''
                  

                    return (
                      
                      <div
                        className={styles.blogPostItem}
                        key={index}
                        metadata={blogMetaData}
                        truncated={blogMetaData.truncated}
                      >
                     
                          <Link to={blogMetaData.permalink} className="post__list-title">
                            {frontMatter.title}
                          </Link>
                          <div className="post__list-date">
                          <span>{authors}  {year}-{month}-{day} </span>
                          </div>
                          <div className="post__list-content">
                            {blogMetaData.description}
                          </div>

                          {tags.length >0 && <TagsListInline tags={tags} />}

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
                    <p>Looks like your search hasn't got any results.</p>
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
