


const Skeleton = () =>{
    return <div className="card shadow shadow-md col mx-3 mb-4" aria-hidden="true"   style={{ width: "18rem" }}>
    <div className="card-header">
    </div>
    <div className="card-body">
      <h5 className="card-title placeholder-glow">
        <span className="placeholder col-6" />
      </h5>
      <p className="card-text placeholder-glow">
        <span className="placeholder col-7" />
        <span className="placeholder col-4" />
        <span className="placeholder col-4" />
        <span className="placeholder col-6" />
        <span className="placeholder col-8" />
      </p>
     
    <a className="btn btn-primary disabled placeholder col-6" />
    </div>
  </div>
  
}


const SkeletonLoader = () => {
  return (
   <>
   <Skeleton/>
   <Skeleton/>
   <Skeleton/>
   <Skeleton/>
   <Skeleton/>
   <Skeleton/>
  


   </>
  )
}

export default SkeletonLoader
