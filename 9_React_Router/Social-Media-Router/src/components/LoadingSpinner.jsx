function LoadingSpinner(){
    return (
        <div className="spinner">
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status" style={{width:"4rem",height:"4rem"}}>
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
}

export default LoadingSpinner;