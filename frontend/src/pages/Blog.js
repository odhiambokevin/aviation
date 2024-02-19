import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Blogs from "../components/Blogs";
import LoadingSpinner from "../components/LoadingSpinner";
import { allBlogs } from '../state/slices/blogSlice';

function Blog() {
	const {blogs,isError, isLoading,isSuccess,message} = useSelector((state)=> state.blogs)
	const dispatch = useDispatch();
	
	useEffect(()=> {
		dispatch(allBlogs())
	},[dispatch,isError, message])

	

	const [featuredBlog] = [blogs.filter((item)=> item).slice(-1)];
	const [stateload, setIsLoading] = useState(isLoading);
	const [search, setSearch] = useState({
		query: '',
		list: []
	});

	// const handleChange = (e) =>{
	// 	const results = blogs.filter(blogsearch => {
	// 		if (e.target.value === "") return blogs
	// 		return blogsearch.title.toLowerCase().includes(e.target.value.toLowerCase())
	// 	})
	// 	setSearch({
	// 		query: e.target.value,
	// 		list : results
	// 	})

	// }

	// console.log(search);
	
	useEffect(() => {
		setIsLoading(isLoading);
	}, [isLoading]);
    return (
        <>	
		<section className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-8">
						{isLoading ? <LoadingSpinner/> : featuredBlog.map((blogfeat)=>(
						<div className="post-content" key={blogfeat.id}>	
							<div className="post-img">
								<img src={blogfeat.image} alt="" style={{height: "400px"}}/>
							</div>
							
							<div className="post-meta">
                                <ul className="list-inline">
                                  <li><Link to="#"><i className="fa fa-calendar"></i>{blogfeat.created_date}</Link> </li>
                                  <li><Link to="#"><i className="fa fa-user"></i>{blogfeat.author}</Link></li>
                                </ul>
							</div>
							
							<div className="post-description">							
								<h3>{blogfeat.title}</h3>
								<p>{blogfeat.body}</p>
							</div>
                          												
						</div>
						))}
					</div>	
										
				   <div className="col-md-4 col-sm-4">
				   <div className="widget widget-sidebar">
							<div className="search-box">
								<form>
									<input type="search" className="form-control"  /*value={search.query}*/ placeholder="Search posts" /*onChange={handleChange}*/ />
									<i className="fa fa-search" alt="search" onClick={()=>{}}></i>
								</form>
							</div>
					</div>
						<div className="widget-main">
							<h4>Blog Posts</h4>

						{/* wait for async api call to load results first then map */}
                        {isLoading ? <LoadingSpinner/> : blogs && blogs.map((blog)=>(<Blogs blog={blog} key={blog.title}/>)) }
						</div>
				
                        <div className="widget-main">
                             <h4>Categories</h4>
                            <div  className="post-categories">
                                <ul>
                                <li><Link to="#">Photography</Link></li>
                                <li><Link to="#">WordPress</Link></li>
                                <li><Link to="#">Web Design</Link></li>
                                <li><Link to="#">Video</Link></li>
                                <li><Link to="#">Photography</Link></li>
                               </ul>
                             </div>
                        </div>
                     
						<div className="widget-main">	
							<h4>Adertisement </h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in molestie neque, eget posuere risus. In mauris orci, imperdiet quis hendrerit eget, dapibus sed nisi.. 
							</p>
						</div>
					
						<div className="widget-main">
						   <h4>Tags</h4>
							<div className="tags">
								<Link to="">Web Design</Link>
                                <Link to="">Graphic Design</Link>
                                <Link to="">PHP</Link>
								<Link to="">Jquery</Link>
                                <Link to="">Wordpress</Link>
                                <Link to="">Animation</Link>
                                <Link to="">Audio</Link>
                                <Link to="">Photo Gallery</Link>						
							</div>
						</div>
					</div>
				</div> 		
			</div>		
		</section>
        </>
     );
}

export default Blog;