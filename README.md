# stupid-react-pagination

## Quick Start

```
npm i stupid-react-pagination
```

## Simple Example

```
import CommonPagination from 'stupid-react-pagination';

class App extends Component {
  
  render(){
     return(
       <div>
         <CommonPagination
                  activePage={activePage}
                  size={size}
                  totalItems={total}
                  handlePagination={this.handlePagination}
                />
       </div>
     )
  }
}

export class App {}
```
