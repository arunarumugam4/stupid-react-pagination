# stupid-react-pagination

## Demo
https://react-atgnpp.stackblitz.io/



## Quick Start

```
npm i stupid-react-pagination
```

## Include bottstrap css link into your html head tag for styles
```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

```

## Simple Example

```
import CommonPagination from 'stupid-react-pagination';

class App extends Component {
  handlePagination = (selectedPageNumber) => {
  
  }
  render(){
     return(
       <div>
         <CommonPagination
                  activePage={activePage}
                  size={size}
                  totalItems={totalItems}
                  handlePagination={this.handlePagination}
                />
       </div>
     )
  }
}

export default App {}
```
## PROPS
```
  activePage => current active page to highlight (ex: 1 or 2 or 3..)
  size => total list OF items to show on single page (ex: 10 or 20 or 30 ..)
  totalItems => toatal size of your list (ex: 30 or 40 or 100 ..)
  handlePagination => handlePagination callback function get called with the selected page number.
  
 ```
