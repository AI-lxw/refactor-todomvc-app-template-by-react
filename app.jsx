window.APP = class APP extends React.Component{
	render(){
		return(
			<div>
				<section className="todoapp">
					<Head></Head>
					
					{/* <!-- This section should be hidden by default and shown when there are todos --> */}
					<Main></Main>
					{/* <!-- This footer should hidden by default and shown when there are todos --> */}
					<Footer></Footer>
				</section>
				<Info></Info>
			</div>
		)
	}
}
	
