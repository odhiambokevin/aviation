import {Link} from 'react-router-dom';

const Blogs = ({blog}) => {
    return ( 
        <>
       
                        
						
								<div className="sidebar-widget clearfix">	
									<Link to={`/blogs/${blog.slug}`}><img src={blog.image} alt="img" />
									<p className="sidebar-widget-title">{blog.title}</p></Link>
									<p className="sidebar-widget-body">{blog.body.substring(0,65)}..</p>
									<p className="date">Published: {blog.created_date}</p>
								</div>
						
        </>
     );
}
 
export default Blogs;