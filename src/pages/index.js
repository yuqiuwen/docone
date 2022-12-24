import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import useGlobalData from '@docusaurus/useGlobalData';
import styles from './index.module.css';
import avatar from '@site/static/img/avatar1.jpg'
import TagsListInline from '@theme/TagsListInline';
import './styles.css'


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.container}>
        <div className={styles.imgBox}>
        <img src={avatar} className={styles.avatarStyle} /> 
    
        <h1 className="hero__title" style={{color: '#fff'}}>QiuWen</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        
        <div className={styles.buttons}>
          <Link
            className="button button--info  button--lg"
            to="/blog">
            Enter
          </Link>
        </div>
      </div>
    </header>
  );
}


function BlogList() {
  const globalData = useGlobalData();
  const pluginData = globalData['custom-blog-plugin-tags']["default"];
  const recentBlogPosts = pluginData.blogPosts;
  return(
    <div className="twcontainer mx-auto mb-16 max-w-6xl px-4 lg:px-0">
        <div className="flex items-center mb-8">
          <p className="text-2xl font-semibold">Recent Community Tutorials</p>
          <div className="ml-auto">
            <Link className="font-semibold" to="/tutorials">See more</Link>
          </div>
        </div>

        {
          recentBlogPosts.map((post) => (

            <div key={post.id} className="border p-6 mb-6 text-secondary">
              
              <div className="flex items-center">
                <Link itemProp="url" to={post.metadata.permalink}>
                  <h3 className="font-bold">{post.metadata.title}</h3>
                </Link>
                <div className="ml-auto hidden lg:block">
                  <p className="uppercase font-semibold text-xs border px-3 py-1 border-secondary text-secondary">BEGINNER</p>
                </div>
              </div>
              <div className="pt-2 pb-4 text-gray-500 text-sm">
                {JSON.stringify(post.metadata.frontMatter)}
                {post.metadata.authors[0].name}&nbsp;·&nbsp;
                <time dateTime={post.metadata.date} itemProp="datePublished">
                  {post.metadata.formattedDate}
                </time>
              </div>
              <div className="flex items-ceter">
                {
                  post.metadata.image !== "" ?
                    <div><img src={post.metadata.image} /></div>
                    : null
                }
                <p className=" mb-6 text-secondary line-clamp-3">{post.metadata.description}</p>
              </div>
              <TagsListInline tags={post.metadata.tags} />
            </div>
          ))
        }
      </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header>
      <HomepageHeader />
      </header>
     
      <main>
      
        
      </main>
    </Layout>
  );
}
