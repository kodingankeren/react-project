import React from 'react';
import './BlogList.css';
const BlogList = (props) => {
  return (
    <section>
      <h1>{props.judul}</h1>
      <p>{props.deskripsi}</p>
    </section>
  );
};

BlogList.defaultProps = {
  judul: 'Belum Ada Judul',
  deskripsi: 'Krispi Krispi',
};
export default BlogList;
