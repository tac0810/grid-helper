# How to grid
```javascript
var gridHelper = new GridHelper()

gridHelper.verticalEnds()
// or
gridHelper.verticalEnds(30)
// or
gridHelper.verticalEnds({
  color: '#F00',
  alpha: 0.5,
  position: '50px'
})
```

## Border Property
```javascript
var borderProperty = {
  color: '#F00',
  alpha: 0.5,
  position: '50px'
}
```
- color { String }
  - Please use CSS color
- alpha { Number }
  - You can use 0.0 ~ 1.0
- position { Number | String }
  - You can use Number and below units.
  - 'em', 'ex', 'in', 'cm', 'mm', 'pt', 'pc', 'px', 'ch', 'rem', 'vw', 'vh', 'vmax', 'vmin', 'q', '%'

## Grid Property
```javascript
var gridProperty = {
  color: '#f00',
  alpha: 0.5,
  cols: 3,
  gutter: 30,
  width: 1280,
  right: 30,
  left: 30,
}
```
- color { String }
  - Please use CSS color
- alpha { Number }
  - You can use 0.0 ~ 1.0
- cols { Number }
  - Please use integer
- gutter { Number | String }
  - You can use Number and below units.
  - 'em', 'ex', 'in', 'cm', 'mm', 'pt', 'pc', 'px', 'ch', 'rem', 'vw', 'vh', 'vmax', 'vmin', 'q', '%'
- width { Number | String }
  - You can use Number and below units.
  - 'em', 'ex', 'in', 'cm', 'mm', 'pt', 'pc', 'px', 'ch', 'rem', 'vw', 'vh', 'vmax', 'vmin', 'q', '%'
- right { Number | String }
  - If 'width' puts in gridProperty, 'right' property is disabled. 
  - You can use Number and below units.
  - 'em', 'ex', 'in', 'cm', 'mm', 'pt', 'pc', 'px', 'ch', 'rem', 'vw', 'vh', 'vmax', 'vmin', 'q', '%'
- left { Number | String }
  - If 'width' puts in gridProperty, 'left' property is disabled.
  - You can use Number and below units.
  - 'em', 'ex', 'in', 'cm', 'mm', 'pt', 'pc', 'px', 'ch', 'rem', 'vw', 'vh', 'vmax', 'vmin', 'q', '%'

## Instance Methods
### .top(property)
- Arguments:
  - { borderProperty | Number } property
  - { null } default
- Usage:  
  Draw top border.  
  
![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/top.png)

### .right(property)
- Arguments:
  - { borderProperty | Number } property
  - { null } default
- Usage:  
  Draw right border.

![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/right.png)

### .bottom(property)
- Arguments:
  - { borderProperty | Number } property
  - { null } default
- Usage:  
  Draw bottom border.
  
![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/bottom.png)
  
### .left(property)
- Arguments:
  - { borderProperty | Number } property
  - { null } default
- Usage:  
  Draw left border.

![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/left.png)

### .verticalCenter(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:  
   Draw vertical center border.

![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/verticalCenter.png)

### .horizontalCenter(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:  
   Draw horizontal center border.
 
![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/horizontalCenter.png)
 
### .center(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:  
   Draw vertical and horizontal center border.

![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/center.png)

### .verticalEnds(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:  
   Draw right and left border.
   
![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/verticalEnds.png)
   
### .horizontalEnds(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:
   Draw top and bottom border.
   
![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/horizontalEnds.png)
   
### .frame(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:
   Draw verticalEnds and horizontalEnds border.

![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/frame.png)

### .verticalGrid(property)
 - Arguments:
   - { gridProperty | Number } property
   - { null } default
 - Usage:
   Draw columns with gutter, if you want.

![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/verticalGrid.png)
