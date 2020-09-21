import React from 'react';

class SeachBar extends React.Component{
    state = { term : ""}

    onInputChage = (event)=>{
        this.setState({term: event.target.value});
    }

    onFormSubmit =(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }


    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input
                            value={this.state.term}
                            type="text" 
                            onChange={this.onInputChage} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SeachBar; 