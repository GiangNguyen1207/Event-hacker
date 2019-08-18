import React, { Component, createContext } from "react";
export const MyContext = createContext();
export const MyContextConsumer = MyContext.Consumer;

class ProviderComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            categories:{}, 
            cat:"",
            originalEvents:[],
            events:[],
            loaded: false,
            eventName:"",
            location:[],
            placeInput:"",
            categoryID:"",
            sort:"",
            totalPages: null,
            currentPage:1,
            pager:{},
        }
    }

    eventNameHandler = (event) => {
        this.setState({
            eventName: event.target.value
        })
    }

    categoryHandler=(event) => {
        this.setState({
            cat: event.target.value
        }, () => this.getCategoryID())
    }

    placeHandler = (event) => {
        this.setState({
            placeInput: event.target.value
        }, () => this.getLocation(this.state.placeInput))
    }

    getLocation (location) {
        fetch (`https://cors-anywhere.herokuapp.com/https://www.eventbrite.com/api/v3/destination/search/places/?q=${location}`,
        )
        .then(res=>res.json())
        .then(data=>this.setState({location:data.places}))
    }

    getCategoryID = () => {
        this.setState({
            categoryID: this.state.categories[this.state.cat]
        }, ()=> console.log(this.state.categoryID))
    }

    componentDidMount () {
        let cat = [];
        let catObj = {};
        fetch(`https://www.eventbriteapi.com/v3/categories/`, 
        {headers:{"Authorization": "Bearer YOWLUMHD2DEIBGNSZBNW"}
        })
        .then(response => response.json())
        .then(json => {
            cat=json.categories;
            cat.forEach(element => {catObj[element.name]=element.id})
            this.setState({
                categories:catObj
            }, () => console.log(this.state.categories))
        });
    };


    getEventInfo = (eventName,location, categoryID) => {
        if (categoryID) {
        fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&location.address=${location}&categories=${categoryID}` ,
        {headers:{"Authorization": "Bearer YOWLUMHD2DEIBGNSZBNW"}
        })
        .then(response => response.json())
        .then(data => { 
            this.setState({
            events:[...data.events],
            loaded:true,
            totalPages: data.pagination.page_count
            },()=>this.getFirstPage(this.state.currentPage))
        })
        } else {
            fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&location.address=${location}` ,
            {headers:{"Authorization": "Bearer YOWLUMHD2DEIBGNSZBNW"}
            })
            .then(response => response.json())
            .then(data => { 
                this.setState({
                events:[...data.events],
                loaded:true,
                totalPages: data.pagination.page_count
                },()=>this.getFirstPage(this.state.currentPage))
        })
        }         
    }

    searchHandler = (event) => {
        event.preventDefault();
        this.getEventInfo(this.state.eventName, this.state.placeInput, this.state.categoryID)
    }


    onChangePage = (pageNumber) => {
        let pager = this.getPager(pageNumber);
        fetch(`https://www.eventbriteapi.com/v3/events/search/?page=${pageNumber}`,
        {headers:{"Authorization": "Bearer YOWLUMHD2DEIBGNSZBNW"}
        })
        .then(response => response.json())
        .then(data => { 
            this.setState({
            events:[...data.events],
            currentPage: pageNumber,
            pager: pager
            })
        })
        }
    

    getPager(currentPage) {
        let totalPages=this.state.totalPages
        let startPage, endPage;
        if (totalPages <= 6) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 4) {
                startPage = 1;
                endPage = 6;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 5;
                endPage = totalPages;
            } else {
                startPage = currentPage - 3;
                endPage = currentPage + 2;
            }
        }
        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
        return {
            startPage: startPage,
            endPage: endPage,
            pages: pages
        };
    }

    getFirstPage(pageNumber) {
        let pager = this.getPager(pageNumber);
        this.setState({pager:pager})
    }
    

    sortByAsc = () => {
        let asc=[...this.state.events]
        asc.sort((a,b) => {
            if(a.name.text > b.name.text) return 1
            else if(a.name.text < b.name.text) return -1
            else return 0
        })    
        this.setState({events:asc})
    }

    sortByDsc = () => {
        let dsc=[...this.state.events]
        dsc.sort((a,b) => {
            if(a.name.text <  b.name.text) return 1
            else if(a.name.text > b.name.text) return -1
            else return 0
        })    
        this.setState({events:dsc})
    }

    /*freeFilter = (e) => {
        if (e.target.checked) {
            let freeEvents = [...this.state.events]
            let free = freeEvents.filter(event => event.is_free === true)
            this.setState({events:free})
        } else {
            this.setState({events: this.state.events})
        }
            let freeEvents=newArr.filter(event=>event.is_free === true)
            this.setState({events:freeEvents})
        } if (!e.target.checked) {
            this.setState({events: this.state.events})
        }
    }

    paidFilter = (e) => {
        if (e.target.checked) {
            let newArr=[...this.state.events];
            let paid=newArr.filter(event=>event.is_free === false)
            this.setState({events:paid})
        } else {
            this.setState({events:this.state.events})
        }
    }*/

    render() {
        return (
            <div>
                <MyContext.Provider value={{
                    state:this.state,
                    setCategory:this.categoryHandler,
                    setName:this.eventNameHandler,
                    setPlace:this.placeHandler,
                    eventSearch:this.searchHandler,
                    getAddress:this.getAddress, 
                    asc:this.sortByAsc,
                    dsc:this.sortByDsc,
                    freeFilter:this.freeFilter,
                    paidFilter:this.paidFilter,
                    onChangePage:this.onChangePage,
                    getPager:this.getPager}}>
                    {this.props.children}
                </MyContext.Provider>
            </div>
        )
    }
}
    
export default ProviderComponent;