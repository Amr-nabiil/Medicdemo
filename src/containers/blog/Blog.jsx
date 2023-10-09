import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';


const Blog = () => {
  return (
    <div className="medic__blog section__padding" id="blog">
      <div className="medic__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
     
    </div>
    <div className="medic__blog-container">
      <div className="medic__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="This approach tailors medical treatment to an individual's genetic makeup." />
      </div>
      <div className="medic__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Technologies like CRISPR-Cas9 have revolutionized genetics." />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="The COVID-19 pandemic accelerated the adoption of telemedicine." />
        <Article imgUrl={blog04} date="Sep 26, 2021" text=" Disparities in access to healthcare persist, both globally and within countries." />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Mental health issues have gained more recognition." />
      </div>
    </div>
  </div>
  );
}

export default Blog;
