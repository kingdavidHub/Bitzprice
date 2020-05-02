class Prices extends React.Component {
    state = {
        currency: 'USD'
    }
    
    render() {
        const { USD, EUR, GBP } = this.props.bpi;
        let list = '';

        if (this.state.currency === 'USD') {
            list = <li className="list-group-item">
                Bitcoin rate for {USD.description}:
                        {'      '}
                <span class="badge badge-primary">{USD.code}</span>
                {'      '}
                <strong>{USD.rate}</strong>
            </li>
        } else if (this.state.currency === 'GBP') {
            list = <li className="list-group-item">
                Bitcoin rate for {GBP.description}:
                        {'      '}
                <span class="badge badge-primary">{GBP.code}</span>
                {'      '}
                <strong>{GBP.rate}</strong>
            </li>  
        } else if (this.state.currency === 'EUR') {
            list = <li className="list-group-item">
                Bitcoin rate for {EUR.description}:
                        {'      '}
                <span class="badge badge-primary">{EUR.code}</span>
                {'      '}
                <strong>{EUR.rate}</strong>
            </li>
        }

        return (
            <div>
                <div className="form-group">
                    <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
                <ul className="list-group">
                    {list}
                </ul>
                <br />

            </div>
        );
    }
}


export default Prices;