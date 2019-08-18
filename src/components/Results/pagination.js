import React from "react";

class Pagination extends React.Component{
    render() {
    var {currentPage, totalPages, pageLink}=this.props;
    return(
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end flex-wrap">
                    <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
                        <button 
                            onClick={() => this.props.onChangePage(1)} 
                            className="page-link" 
                            >First
                        </button>
                    </li>
                    {pageLink && pageLink.map(p=>{
                        return(
                            <li className={currentPage === p ? 'page-item active' : ''} key={p}>
                                <button 
                                    onClick={()=>this.props.onChangePage(p)} 
                                    className="page-link" 
                                    >{p}
                                </button>
                            </li>
                        )
                    })
                    }
                    <li className={currentPage === totalPages ? 'page-item disabled' : 'page-item'}>
                        <button 
                            onClick={() => this.props.onChangePage(totalPages)} 
                            className="page-link" 
                        >Last
                        </button>
                    </li>
                </ul>
            </nav>   
        </div>
)}
}
export default Pagination;